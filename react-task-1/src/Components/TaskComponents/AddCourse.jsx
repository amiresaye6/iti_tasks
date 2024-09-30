import React, { useState } from 'react';
import CourseManager from './CourseManager';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCourse = ({ onCourseAdded }) => {
    const courseManager = new CourseManager();
    const [formData, setFormData] = useState({
        Id: '',
        CourseName: '',
        Duration: '',
        StartDate: '',
        EndDate: '',
        TeachingInstrList: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting:", formData); // Debugging output

        courseManager.addCourse({
            Id: formData.Id,
            CourseName: formData.CourseName,
            Duration: formData.Duration,
            StartDate: formData.StartDate,
            EndDate: formData.EndDate,
            TeachingInstrList: formData.TeachingInstrList,
        });

        onCourseAdded(); // Call the callback to notify parent component
        // Reset the form data
        setFormData({ Id: '', CourseName: '', Duration: '', StartDate: '', EndDate: '', TeachingInstrList: [] });
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add New Course</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>ID</label>
                    <input
                        type="text"
                        name="Id"
                        className="form-control"
                        value={formData.Id}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Course Name</label>
                    <input
                        type="text"
                        name="CourseName"
                        className="form-control"
                        value={formData.CourseName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <input
                        type="text"
                        name="Duration"
                        className="form-control"
                        value={formData.Duration}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Start Date</label>
                    <input
                        type="date"
                        name="StartDate"
                        className="form-control"
                        value={formData.StartDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>End Date</label>
                    <input
                        type="date"
                        name="EndDate"
                        className="form-control"
                        value={formData.EndDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Course</button>
            </form>
        </div>
    );
};

export default AddCourse;
