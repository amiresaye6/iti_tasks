const loadCourses = () => {
    try {
        const storedCourses = localStorage.getItem('courses');
        return storedCourses ? JSON.parse(storedCourses) : [];
    } catch (error) {
        console.error('Error loading courses from localStorage:', error);
        return [];
    }
};

const saveCourses = (courses) => {
    try {
        console.log("Saving courses:", courses);
        localStorage.setItem('courses', JSON.stringify(courses));
    } catch (error) {
        console.error('Error saving courses to localStorage:', error);
    }
};

const addCourse = (course) => {
    if (!course.Id) {
        console.error('Course must have an ID.');
        return;
    }

    const courses = loadCourses();
    const exists = courses.some(existingCourse => existingCourse.Id === course.Id);
    if (exists) {
        console.error(`Course with ID ${course.Id} already exists.`);
        return;
    }

    const updatedCourses = [...courses, course];
    saveCourses(updatedCourses);
};

const getCourses = () => {
    return loadCourses();
};

const updateCourse = (id, updatedCourse) => {
    const courses = loadCourses();
    const index = courses.findIndex(course => course.Id === id);
    if (index !== -1) {
        const updatedCourses = courses.map((course, i) =>
            i === index ? { ...course, ...updatedCourse } : course
        );
        saveCourses(updatedCourses);
    } else {
        console.error(`Course with ID ${id} not found.`);
    }
};

const removeCourse = (id) => {
    const courses = loadCourses();
    const initialLength = courses.length;
    const updatedCourses = courses.filter(course => course.Id !== id);

    if (updatedCourses.length < initialLength) {
        saveCourses(updatedCourses);
    } else {
        console.error(`Course with ID ${id} not found for deletion.`);
    }
};

export {
    loadCourses,
    saveCourses,
    addCourse,
    getCourses,
    updateCourse,
    removeCourse
};
