import React from 'react';
import CoursesPage from './TaskPages/CoursesPage';
import { Route, Routes } from 'react-router-dom';
import EmployeesPage from './TaskPages/EmployeesPage';
import NavBar from './TaskComponents/NavBar';
import HomePage from './TaskPages/HomePage';
import DeptsPage from './TaskPages/DeptsPage';

const AmirApp = () => {


    return (
        <div className="container">
            <h1 className="mt-4">Employee Management</h1>
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/depts" element={<DeptsPage />} />
                <Route path="/employees" element={<EmployeesPage />} />
            </Routes>
        </div>
    );
};

export default AmirApp;
