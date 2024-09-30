import CourseList from '../Data/CourseList';

// Sample courseArray (This can be your data store for courses)
let courseArray = [
    new CourseList(101, "JavaScript", "3 months", "2024-10-01", "2025-01-01", ["Prof. Ali", "Dr. Sara"]),
    new CourseList(102, "Biology", "2 months", "2024-09-01", "2024-11-01", ["Prof. Ahmed"]),
    new CourseList(103, "Physics", "4 months", "2024-08-01", "2024-12-01", ["Dr. Samir"]),
    new CourseList(104, "History", "6 months", "2024-07-01", "2024-12-01", ["Prof. Mona"]),
    new CourseList(105, "English", "3 months", "2024-06-01", "2024-09-01", ["Dr. Omar"]),
];

// Create (Add a new course)
function addCourse(id, courseName, duration, startDate, endDate, teachingInstrList) {
    const newCourse = new CourseList(id, courseName, duration, startDate, endDate, teachingInstrList);
    courseArray.push(newCourse);
    return newCourse;
}

// Read (Get a single course by ID)
function getCourseById(id) {
    return courseArray.find(course => course.Id === id);
}

// Read (Get all courses)
function getAllCourses() {
    return courseArray;
}

// Update (Modify an existing course by ID)
function updateCourse(id, updatedData) {
    const courseIndex = courseArray.findIndex(course => course.Id === id);
    if (courseIndex !== -1) {
        const courseToUpdate = courseArray[courseIndex];
        
        // Merge existing course data with updatedData
        courseArray[courseIndex] = { ...courseToUpdate, ...updatedData };
        return courseArray[courseIndex];
    } else {
        return null;
    }
}

// Delete (Remove a course by ID)
function deleteCourse(id) {
    const courseIndex = courseArray.findIndex(course => course.Id === id);
    if (courseIndex !== -1) {
        return courseArray.splice(courseIndex, 1)[0]; // Removes and returns the deleted course
    } else {
        return null;
    }
}

export {
    addCourse,
    getCourseById,
    getAllCourses,
    updateCourse,
    deleteCourse
};
