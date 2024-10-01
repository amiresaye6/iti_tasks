import React, { useState } from 'react';
import AddCourse from '../TaskComponents/Courses/AddCourse';
import CourseTable from '../TaskComponents/Courses/CourseTable';
import LoginPage from './LoginPage';

function CoursesPage() {
    const [courseRefresh, setCourseRefresh] = useState(false);
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("loggedIn") === 'true');

    const handleCourseAdded = () => {
        setCourseRefresh(prev => !prev);
    };

    const handleLoginSuccess = () => {
        setLoggedIn(true);
    };

    return (
        <>
            {loggedIn ? (
                <>
                    {/* <AddCourse onCourseAdded={handleCourseAdded} /> */}
                    <CourseTable refresh={courseRefresh} />
                </>
            ) : (
                <LoginPage onLoginSuccess={handleLoginSuccess} />
            )}
        </>
    );
}

export default CoursesPage;
