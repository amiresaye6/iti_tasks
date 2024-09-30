import React, { useEffect, useState } from 'react';
import EmployeeManager from './EmployeeManager';
import CourseManager from './CourseManager';

const EmployeeTable = () => {
    const employeeManager = new EmployeeManager();
    const courseManager = new CourseManager();
    const [employees, setEmployees] = useState([]);
    const [editingEmployeeId, setEditingEmployeeId] = useState(null);
    const [editFormData, setEditFormData] = useState({});
    const [ageFilter, setAgeFilter] = useState('');
    const [sortBySalary, setSortBySalary] = useState(false);

    useEffect(() => {
        setEmployees(employeeManager.getEmployees());
    }, []);

    // Filter employees by age
// Filter employees by age (younger than the specified age)
const filteredEmployees = employees.filter(employee => {
    // If ageFilter is provided, filter by age
    if (ageFilter) {
        console.log(employee.Age, ageFilter); // Debugging output
        return employee.Age <= Number(ageFilter); // Change to "<" for younger than
    }
    return true; // No filter applied
});


    // Sort filtered employees by salary if the checkbox is checked
    const sortedEmployees = sortBySalary
        ? filteredEmployees.sort((a, b) => b.Salary - a.Salary)
        : filteredEmployees;

    const handleDelete = (id) => {
        employeeManager.deleteEmployee(id);
        setEmployees(employeeManager.getEmployees()); // Refresh the employee list
    };

    const handleEditClick = (employee) => {
        setEditingEmployeeId(employee.Id);
        setEditFormData(employee); // Pre-fill the form with the employee data
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        employeeManager.updateEmployee(editingEmployeeId, editFormData); // Add an update method in EmployeeManager
        setEditingEmployeeId(null); // Exit edit mode
        setEmployees(employeeManager.getEmployees()); // Refresh the employee list
    };

    const getCourseNames = (courseIds) => {
        return courseIds.map(id => {
            const course = courseManager.getCourses().find(course => course.Id === id);
            return course ? course.CourseName : 'Unknown Course';
        }).join(', '); // Return course names as a comma-separated string
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Employee List</h2>

            {/* Age Filter Input */}
            <div className="mb-3">
                <label>Filter by Age:</label>
                <input
                    type="number"
                    className="form-control"
                    value={ageFilter}
                    onChange={(e) => setAgeFilter(e.target.value)}
                    placeholder="Enter age"
                />
            </div>

            {/* Salary Sort Checkbox */}
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={sortBySalary}
                    onChange={(e) => setSortBySalary(e.target.checked)}
                />
                <label className="form-check-label">Sort by Salary</label>
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Courses</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedEmployees.map(employee => (
                        <tr key={employee.Id}>
                            <td>{employee.Id}</td>
                            <td>
                                {editingEmployeeId === employee.Id ? (
                                    <input
                                        type="text"
                                        name="Name"
                                        value={editFormData.Name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                ) : (
                                    employee.Name
                                )}
                            </td>
                            <td>
                                {editingEmployeeId === employee.Id ? (
                                    <input
                                        type="number"
                                        name="Age"
                                        value={editFormData.Age}
                                        onChange={handleInputChange}
                                        required
                                    />
                                ) : (
                                    employee.Age
                                )}
                            </td>
                            <td>
                                {editingEmployeeId === employee.Id ? (
                                    <input
                                        type="number"
                                        name="Salary"
                                        value={editFormData.Salary}
                                        onChange={handleInputChange}
                                        required
                                    />
                                ) : (
                                    employee.Salary
                                )}
                            </td>
                            <td>
                                {getCourseNames(employee.CourseList)}
                            </td>
                            <td>
                                {editingEmployeeId === employee.Id ? (
                                    <button className="btn btn-success btn-sm" onClick={handleUpdateSubmit}>
                                        Save
                                    </button>
                                ) : (
                                    <>
                                        <button className="btn btn-warning btn-sm mx-1" onClick={() => handleEditClick(employee)}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(employee.Id)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;
