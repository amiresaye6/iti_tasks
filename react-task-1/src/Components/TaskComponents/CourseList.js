import CourseList from '../Data/CourseList';

class CourseManager {
    constructor() {
        this.courses = [];
    }

    // Create a new course
    addCourse(id, courseName, duration, startDate, endDate, teachingInstrList) {
        const newCourse = new CourseList(id, courseName, duration, startDate, endDate, teachingInstrList);
        this.courses.push(newCourse);
        return newCourse;
    }

    // Read (find) course by ID
    getCourseById(id) {
        return this.courses.find(course => course.Id === id);
    }

    // Update course data by ID
    updateCourse(id, updatedFields) {
        const course = this.getCourseById(id);
        if (course) {
            Object.assign(course, updatedFields);
            return course;
        }
        return null;
    }

    // Delete course by ID
    deleteCourse(id) {
        const courseIndex = this.courses.findIndex(course => course.Id === id);
        if (courseIndex !== -1) {
            this.courses.splice(courseIndex, 1);
            return true;
        }
        return false;
    }

    // Get all courses
    getAllCourses() {
        return this.courses;
    }
}

export default CourseManager;
