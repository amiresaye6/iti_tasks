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
        console.log("Submitting:", formData);

        courseManager.addCourse({
            Id: formData.Id,
            CourseName: formData.CourseName,
            Duration: formData.Duration,
            StartDate: formData.StartDate,
            EndDate: formData.EndDate,
            TeachingInstrList: formData.TeachingInstrList,
        });

        onCourseAdded();
        setFormData({ Id: '', CourseName: '', Duration: '', StartDate: '', EndDate: '', TeachingInstrList: [] });
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add New Course</h2>

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row mb-3">
                    <div className="col">
                        <input
                            type="text"
                            name="Id"
                            placeholder="Course ID"
                            value={formData.Id}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input
                            type="text"
                            name="CourseName"
                            placeholder="Course Name"
                            value={formData.CourseName}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            name="Duration"
                            placeholder="Duration"
                            value={formData.Duration}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input
                            type="date"
                            name="StartDate"
                            value={formData.StartDate}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="date"
                            name="EndDate"
                            value={formData.EndDate}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add Course</button>
            </form>
        </div>
    );
};

export default AddCourse;
