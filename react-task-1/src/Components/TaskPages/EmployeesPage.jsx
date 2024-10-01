import React, { useEffect, useState } from 'react';
// import AddEmployee from '../TaskComponents/Employees/AddEmployee';
import EmployeeTable from '../TaskComponents/Employees/EmployeeTable';
import LoginPage from './LoginPage';

function EmployeesPage() {
    const [employeeRefresh, setEmployeeRefresh] = useState(false);
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("loggedIn") === 'true');

    const handleEmployeeAdded = () => {
        setEmployeeRefresh(prev => !prev);
    };

    const handleLoginSuccess = () => {
        setLoggedIn(true);
    };

    useEffect(() => {
    }, [employeeRefresh]);

    return (
        <>
            {loggedIn ? (
                <>
                    {/* <AddEmployee onEmployeeAdded={handleEmployeeAdded} /> */}
                    <EmployeeTable refresh={employeeRefresh} />
                </>
            ) : (
                <LoginPage onLoginSuccess={handleLoginSuccess} />
            )}
        </>
    );
}

export default EmployeesPage;
