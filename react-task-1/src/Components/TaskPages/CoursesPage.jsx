import React, { useState } from 'react'
import AddCourse from '../TaskComponents/AddCourse';
import CourseTable from '../TaskComponents/CourseTable';

function CoursesPage() {
    const [courseRefresh, setCourseRefresh] = useState(false);

    const handleCourseAdded = () => {
        setCourseRefresh(prev => !prev);
    };

    return (
        <>
            <AddCourse onCourseAdded={handleCourseAdded} />
            <CourseTable />

        </>
    )
}

export default CoursesPage
