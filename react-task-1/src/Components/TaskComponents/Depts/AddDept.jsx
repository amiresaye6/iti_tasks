import React, { useState } from 'react';
import DeptsManager from './DeptsManager';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddDept = ({ onDeptAdded }) => {
    const deptsManager = new DeptsManager();
    const [formData, setFormData] = useState({
        Id: '',
        Name: '',
        Location: '',
        Branches: [],
        EmpList: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Check if the field is "Branches" or "EmpList" to allow array input
        if (name === 'Branches' || name === 'EmpList') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value.split(',').map(item => item.trim()), // Split input by commas into an array
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await deptsManager.addDept({
                Id: formData.Id,
                Name: formData.Name,
                Location: formData.Location,
                Branches: formData.Branches,
                EmpList: formData.EmpList,
            });

            onDeptAdded(); // Callback after dept is added successfully
            setFormData({ Id: '', Name: '', Location: '', Branches: [], EmpList: [] }); // Reset form
        } catch (error) {
            console.error('Error adding department:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add New Department</h2>

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row mb-3">
                    <div className="col">
                        <input
                            type="text"
                            name="Id"
                            placeholder="Department ID"
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
                            name="Name"
                            placeholder="Department Name"
                            value={formData.Name}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            name="Location"
                            placeholder="Location"
                            value={formData.Location}
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
                            name="Branches"
                            placeholder="Branches (comma separated)"
                            value={formData.Branches.join(', ')} // Join array for input display
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            name="EmpList"
                            placeholder="Employee List (comma separated)"
                            value={formData.EmpList.join(', ')} // Join array for input display
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add Department</button>
            </form>
        </div>
    );
};

export default AddDept;
