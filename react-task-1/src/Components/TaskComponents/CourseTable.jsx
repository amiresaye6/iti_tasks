import React, { useEffect, useState } from 'react';
import CourseManager from './CourseManager';

const CourseTable = () => {
    const courseManager = new CourseManager();
    const [courses, setCourses] = useState([]);
    const [editingCourseId, setEditingCourseId] = useState(null);
    const [editFormData, setEditFormData] = useState({});

    useEffect(() => {
        setCourses(courseManager.getCourses());
    }, []);

    const handleDelete = (id) => {
        courseManager.removeCourse(id); // Change to removeCourse
        setCourses(courseManager.getCourses()); // Refresh the course list
    };

    const handleEditClick = (course) => {
        setEditingCourseId(course.Id);
        setEditFormData(course); // Pre-fill the form with the course data
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
        courseManager.updateCourse(editingCourseId, editFormData);
        setEditingCourseId(null); // Exit edit mode
        setCourses(courseManager.getCourses()); // Refresh the course list
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Course List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.Id}>
                            <td>{course.Id}</td>
                            <td>
                                {editingCourseId === course.Id ? (
                                    <input
                                        type="text"
                                        name="CourseName"
                                        value={editFormData.CourseName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                ) : (
                                    course.CourseName
                                )}
                            </td>
                            <td>
                                {editingCourseId === course.Id ? (
                                    <input
                                        type="text"
                                        name="Duration"
                                        value={editFormData.Duration}
                                        onChange={handleInputChange}
                                        required
                                    />
                                ) : (
                                    course.Duration
                                )}
                            </td>
                            <td>
                                {editingCourseId === course.Id ? (
                                    <input
                                        type="date"
                                        name="StartDate"
                                        value={editFormData.StartDate}
                                        onChange={handleInputChange}
                                        required
                                    />
                                ) : (
                                    course.StartDate
                                )}
                            </td>
                            <td>
                                {editingCourseId === course.Id ? (
                                    <input
                                        type="date"
                                        name="EndDate"
                                        value={editFormData.EndDate}
                                        onChange={handleInputChange}
                                        required
                                    />
                                ) : (
                                    course.EndDate
                                )}
                            </td>
                            <td>
                                {editingCourseId === course.Id ? (
                                    <button className="btn btn-success btn-sm" onClick={handleUpdateSubmit}>
                                        Save
                                    </button>
                                ) : (
                                    <>
                                        <button className="btn btn-warning btn-sm mx-1" onClick={() => handleEditClick(course)}>Edit</button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(course.Id)}>Delete</button>
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

export default CourseTable;
