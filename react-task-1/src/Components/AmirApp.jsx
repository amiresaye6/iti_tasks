import React, { useState } from 'react';
import CoursesPage from './TaskPages/CoursesPage';
import { Route, Routes } from 'react-router-dom';
import EmployeesPage from './TaskPages/EmployeesPage';
import NavBar from './TaskComponents/NavBar';
import HomePage from './TaskPages/HomePage';
import DeptsPage from './TaskPages/DeptsPage';
import LoginPage from './TaskPages/LoginPage';
import AddCourse from './TaskComponents/Courses/AddCourse';
import AddDept from './TaskComponents/Depts/AddDept';
import AddEmployee from './TaskComponents/Employees/AddEmployee';

const AmirApp = () => {
    const [deptsRefresh, setDeptsRefresh] = useState(false);
    const [employeeRefresh, setEmployeeRefresh] = useState(false);
    const [courseRefresh, setCourseRefresh] = useState(false);

    const handleCourseAdded = () => {
        setCourseRefresh(prev => !prev);
    };

    const handleEmployeeAdded = () => {
        setEmployeeRefresh(prev => !prev);
    };
    const handleDeptsAdded = () => {
        setDeptsRefresh(prev => !prev);
    };

    return (
        <div className="container">
            <h1 className="mt-4">Employee Management</h1>
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/courses/add" element={<AddCourse onCourseAdded={handleCourseAdded} />} />
                <Route path="/depts" element={<DeptsPage />} />
                <Route path="/depts/add" element={<AddDept onDeptAdded={handleDeptsAdded} />} />
                <Route path="/employees" element={<EmployeesPage />} />
                <Route path="/employees/add" element={<AddEmployee onEmployeeAdded={handleEmployeeAdded} />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default AmirApp;
