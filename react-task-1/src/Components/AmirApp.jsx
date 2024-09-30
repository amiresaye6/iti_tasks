import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CoursesPage from './TaskPages/CoursesPage';
import { Route, Routes } from 'react-router-dom';
import EmployeesPage from './TaskPages/EmployeesPage';
import NavBar from './TaskComponents/NavBar';
import HomePage from './TaskPages/HomePage';

const AmirApp = () => {


    return (
        <div className="container">
            <h1 className="mt-4">Employee Management</h1>
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/employees" element={<EmployeesPage />} />
            </Routes>
        </div>
    );
};

export default AmirApp;
