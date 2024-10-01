class CourseManagerAPI {
    constructor() {
        this.apiUrl = "http://localhost:8000/classesList";
    }

    async loadCourses() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch courses');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error loading departments:', error);
            return [];
        }
    }

    // saveCourses() {
    //     try {
    //         console.log("Saving courses:", this.courses);
    //         localStorage.setItem('courses', JSON.stringify(this.courses));
    //     } catch (error) {
    //         console.error('Error saving courses to localStorage:', error);
    //     }
    // }

    async addCourse(course) {
        if (!course.Id) {
            console.error('Courses must have an ID.');
            return;
        }

        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(course),
            });

            if (!response.ok) {
                throw new Error('Failed to add courses');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error adding courses:', error);
        }
    }

    async getCourses() {
        return await this.loadCourses();
    }

    async updateCourse(id, updatedCourse) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCourse),
            });

            if (!response.ok) {
                throw new Error(`Failed to update courses with ID ${id}`);
            }

            const updated = await response.json();
            return updated;
        } catch (error) {
            console.error('Error updating courses:', error);
        }
    }

    async removeCourse(id) {
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
}

export default CourseManagerAPI;
