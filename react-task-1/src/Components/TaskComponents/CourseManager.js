class CourseManager {
    constructor() {
        this.courses = this.loadCourses();
    }

    loadCourses() {
        try {
            const storedCourses = localStorage.getItem('courses');
            const parsedCourses = storedCourses ? JSON.parse(storedCourses) : [];
            console.log("Loaded courses:", parsedCourses); // Debugging output
            return parsedCourses;
        } catch (error) {
            console.error('Error loading courses from localStorage:', error);
            return []; // Return an empty array if there was an error
        }
    }

    saveCourses() {
        try {
            console.log("Saving courses:", this.courses); // Debugging output
            localStorage.setItem('courses', JSON.stringify(this.courses));
        } catch (error) {
            console.error('Error saving courses to localStorage:', error);
        }
    }

    addCourse(course) {
        if (!course.Id) {
            console.error('Course must have an ID.');
            return; // Prevent adding courses without an ID
        }
        // Check for duplicate ID before adding
        const exists = this.courses.some(existingCourse => existingCourse.Id === course.Id);
        if (exists) {
            console.error(`Course with ID ${course.Id} already exists.`);
            return; // Prevent adding duplicate courses
        }
        this.courses.push(course);
        this.saveCourses();
    }

    getCourses() {
        return this.courses;
    }

    updateCourse(id, updatedCourse) {
        const index = this.courses.findIndex(course => course.Id === id);
        if (index !== -1) {
            this.courses[index] = { ...this.courses[index], ...updatedCourse };
            this.saveCourses();
        } else {
            console.error(`Course with ID ${id} not found.`);
        }
    }

    removeCourse(id) {
        const initialLength = this.courses.length;
        this.courses = this.courses.filter(course => course.Id !== id);
        if (this.courses.length < initialLength) {
            this.saveCourses();
        } else {
            console.error(`Course with ID ${id} not found for deletion.`);
        }
    }
}

export default CourseManager;
