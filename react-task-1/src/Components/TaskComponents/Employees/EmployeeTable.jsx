import React, { useEffect, useState } from 'react';
import EmployeeManagerAPI from './EmployeeManagerLocalServer';
import CourseManagerAPI from '../Courses/CourseManagerLocalServer';
import { Link } from 'react-router-dom';

const EmployeeTable = () => {
    const employeeManager = new EmployeeManagerAPI();
    const courseManager = new CourseManagerAPI();
    const [employees, setEmployees] = useState([]);
    const [courses, setCourses] = useState([]);
    const [editingEmployeeId, setEditingEmployeeId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        CourseList: [], // Default to an empty array
    });
    const [ageFilter, setAgeFilter] = useState('');
    const [sortBySalary, setSortBySalary] = useState(false);

    const fetchEmployees = async () => {
        try {
            const employeeData = await employeeManager.getEmployees();
            setEmployees(employeeData);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const fetchCourses = async () => {
        try {
            const courseData = await courseManager.getCourses();
            setCourses(courseData);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };
    useEffect(() => {

        fetchEmployees();
        fetchCourses();
    }, []);

    const filteredEmployees = employees.filter(employee => {
        if (ageFilter) {
            return employee.Age <= Number(ageFilter);
        }
        return true;
    });

    const sortedEmployees = sortBySalary
        ? filteredEmployees.sort((a, b) => b.Salary - a.Salary)
        : filteredEmployees;

    // const handleDelete = async (id) => {
    //     try {

    //         await employeeManager.deleteEmployee(id);
    //         setEmployees(employees.filter(employee => employee.id !== id));

    //     } catch (error) {
    //         console.error('Error deleting employee:', error);
    //     }
    // };
    const handleDelete = async (id) => {
        const res = prompt("Type 'sure' if you want to continue.");
        if (res === 'sure') {
            try {
                await employeeManager.deleteEmployee(id);
                setEmployees(employees.filter(employee => employee.id !== id));
                console.log(id)
                fetchEmployees();
            } catch (error) {
                console.error('Error deleting employee:', error);
            }
        }
    };


    const handleEditClick = (employee) => {
        setEditingEmployeeId(employee.id);
        setEditFormData({
            ...employee,
            CourseList: Array.isArray(employee.CourseList) ? employee.CourseList : [],
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditFormData((prevData) => ({
            ...prevData,
            [name]: name === 'CourseList' ? value.split(',').map(item => item.trim()) : value,
        }));
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            await employeeManager.updateEmployee(editingEmployeeId, editFormData);
            setEmployees((prevEmployees) =>
                prevEmployees.map(employee =>
                    employee.id === editingEmployeeId ? editFormData : employee
                )
            );
            setEditingEmployeeId(null);
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    const getCourseNames = (courseIds) => {
        return courseIds.map(id => {
            const course = courses.find(course => course.id === id);
            return course ? course.CourseName : 'Unknown Course';
        }).join(', ');
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Employee List</h2>
            <Link className='btn btn-success' to='/employees/add'>Add</Link>

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
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>
                                {editingEmployeeId === employee.id ? (
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
                                {editingEmployeeId === employee.id ? (
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
                                {editingEmployeeId === employee.id ? (
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
                                {editingEmployeeId === employee.id ? (
                                    <input
                                        type="text"
                                        name="CourseList"
                                        value={Array.isArray(editFormData.CourseList) ? editFormData.CourseList.join(', ') : ''} // Safeguard for .join()
                                        onChange={handleInputChange}
                                        required
                                    />
                                ) : (
                                    <div>
                                        {Array.isArray(employee.CourseList) && employee.CourseList.length > 0 ? (
                                            employee.CourseList.map((courseId, index) => (
                                                <span key={index} className="badge bg-secondary mx-1" style={{ fontSize: '0.9em' }}>
                                                    {getCourseNames([courseId])}
                                                </span>
                                            ))
                                        ) : (
                                            <span>No courses assigned</span>
                                        )}
                                    </div>
                                )}
                            </td>
                            <td>
                                {editingEmployeeId === employee.id ? (
                                    <button className="btn btn-success btn-sm" onClick={handleUpdateSubmit}>
                                        Save
                                    </button>
                                ) : (
                                    <>
                                        <button className="btn btn-warning btn-sm mx-1" onClick={() => handleEditClick(employee)}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(employee.id)}>Delete</button>
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
