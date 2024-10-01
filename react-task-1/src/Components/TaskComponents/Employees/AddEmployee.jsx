import React, { useState, useEffect } from 'react';
import EmployeeManagerAPI from './EmployeeManagerLocalServer';
import CourseManagerAPI from '../Courses/CourseManagerLocalServer';
import Employees from '../../Data/Employees';
import { Link } from 'react-router-dom';

const AddEmployee = ({ onEmployeeAdded }) => {
    const employeeManager = new EmployeeManagerAPI();
    const courseManager = new CourseManagerAPI();

    const [formData, setFormData] = useState({
        id: '',  // Changed to lowercase 'id' to match your server field
        Name: '',
        Age: '',
        Salary: '',
        CourseList: [],
    });

    const [courses, setCourses] = useState([]);
    const [loadingCourses, setLoadingCourses] = useState(true);  // For handling loading state

    // Fetch courses from the server asynchronously
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const coursesFromServer = await courseManager.getCourses();
                setCourses(coursesFromServer);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoadingCourses(false);  // Set loading state to false after fetch
            }
        };
        fetchCourses();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCourseChange = (e) => {
        const { options } = e.target;
        const selectedCourses = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);
        setFormData((prevData) => ({
            ...prevData,
            CourseList: selectedCourses,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting:", formData);

        // Submit employee data to the server asynchronously
        try {
            await employeeManager.addEmployee(new Employees(
                formData.id,  // Changed to match your JSON server schema
                formData.Name,
                formData.Age,
                formData.Salary,
                formData.CourseList
            ));
            onEmployeeAdded();  // Trigger callback after successful submission
            setFormData({ id: '', Name: '', Age: '', Salary: '', CourseList: [] });  // Reset form
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add New Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>ID</label>
                    <input
                        type="text"
                        name="id"  // Changed to lowercase 'id' to match server field
                        className="form-control"
                        value={formData.id}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="Name"
                        className="form-control"
                        value={formData.Name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        name="Age"
                        className="form-control"
                        value={formData.Age}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Salary</label>
                    <input
                        type="number"
                        name="Salary"
                        className="form-control"
                        value={formData.Salary}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Select Courses</label>
                    <select
                        multiple
                        className="form-control"
                        onChange={handleCourseChange}
                        disabled={loadingCourses}  // Disable if courses are still loading
                    >
                        {loadingCourses ? (
                            <option>Loading courses...</option>
                        ) : (
                            courses.map((course) => (
                                <option key={course.id} value={course.id}>  {/* Adjusted id key */}
                                    {course.CourseName}
                                </option>
                            ))
                        )}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add Employee</button>
                <Link className='btn btn-success' to='/employees'>Go back</Link>

            </form>
        </div>
    );
};

export default AddEmployee;
