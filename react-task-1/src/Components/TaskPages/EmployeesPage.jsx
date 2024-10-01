import React, { useState } from 'react'
import AddEmployee from '../TaskComponents/Employees/AddEmployee'
import EmployeeTable from '../TaskComponents/Employees/EmployeeTable'

function EmployeesPage() {
    const [employeeRefresh, setEmployeeRefresh] = useState(false);
    const handleEmployeeAdded = () => {
        setEmployeeRefresh(prev => !prev);
    };

    return (
        <>
            <AddEmployee onEmployeeAdded={handleEmployeeAdded} />
            <EmployeeTable />
        </>
    )
}

export default EmployeesPage
