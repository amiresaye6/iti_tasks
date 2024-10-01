class DeptsManager {
    constructor() {
        this.apiUrl = 'http://localhost:8000/depts';
    }

    // Load departments from JSON server
    async loadDepts() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch departments');
            }
            const depts = await response.json();
            return depts;
        } catch (error) {
            console.error('Error loading departments:', error);
            return [];
        }
    }

    // Add a new department to the JSON server
    async addDept(dept) {
        if (!dept.Id) {
            console.error('Department must have an ID.');
            return;
        }

        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dept),
            });

            if (!response.ok) {
                throw new Error('Failed to add department');
            }

            const newDept = await response.json();
            return newDept;
        } catch (error) {
            console.error('Error adding department:', error);
        }
    }

    // Get a list of departments from the JSON server
    async getDepts() {
        return await this.loadDepts();
    }

    // Update a department on the JSON server
    async updateDept(id, updatedDept) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedDept),
            });

            if (!response.ok) {
                throw new Error(`Failed to update department with ID ${id}`);
            }

            const updated = await response.json();
            return updated;
        } catch (error) {
            console.error('Error updating department:', error);
        }
    }

    // Remove a department from the JSON server
    async removeDept(id) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Failed to delete department with ID ${id}`);
            }

            return response.ok;
        } catch (error) {
            console.error('Error deleting department:', error);
        }
    }
}

export default DeptsManager;
