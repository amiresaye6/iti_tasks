class EmployeeManagerAPI {
    constructor() {
        this.apiUrl = "http://localhost:8000/employees";
    }

    async loadEmployees() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch employees');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error loading employees:', error);
            return [];
        }
    }

    // saveEmployees() {
    //     localStorage.setItem('employees', JSON.stringify(this.employees));
    // }

    async addEmployee(employee) {
        if (!employee.Id) {
            console.error('Employee must have an ID.');
            return;
        }
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(employee),
            });

            if (!response.ok) {
                throw new Error('Failed to add emplyees');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error adding emplyees:', error);
        }
    }

    async deleteEmployee(id) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Failed to delete courses with ID ${id}`);
            }

            return response.ok;
        } catch (error) {
            console.error('Error deleting courses:', error);
        }
    }

    async getEmployees() {
        return await this.loadEmployees();
    }

    async updateEmployee(id, updatedData) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error(`Failed to update employee with ID ${id}`);
            }

            const updated = await response.json();
            return updated;
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    }
}

export default EmployeeManagerAPI;
