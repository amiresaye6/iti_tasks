import React, { useEffect, useState } from 'react';
import DeptsManager from './DeptsManager';
import { TableRow } from './DeptTableRow';

const DeptsTable = () => {
    const deptsManager = new DeptsManager();
    const [depts, setDepts] = useState([]);
    const [editingDeptId, setEditingDeptId] = useState(null);
    const [editFormData, setEditFormData] = useState({});

    const fetchDepts = async () => {
        try {
            const fetchedDepts = await deptsManager.getDepts();
            setDepts(fetchedDepts);
        } catch (error) {
            console.error('Error fetching departments:', error);
        }
    };

    useEffect(() => {
        fetchDepts();
        
        // Local storage related part can be removed as we're using a JSON server now
    }, []);

    const handleDelete = async (id) => {
        const res = prompt("Type 'sure' if you want to continue.");
        if (res === 'sure') {
            try {
                await deptsManager.removeDept(id);
                console.log(id)
                fetchDepts();  // Refresh the list after deletion
            } catch (error) {
                console.error('Error deleting department:', error);
            }
        }
    };

    const handleEditClick = (dept) => {
        setEditingDeptId(dept.id);
        // console.log(dept.id)
        // console.log(editingDeptId)
        setEditFormData(dept);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            await deptsManager.updateDept(editingDeptId, editFormData);
            setEditingDeptId(null);
            fetchDepts();  // Refresh the list after update
        } catch (error) {
            console.error('Error updating department:', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Department List</h2>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Branches</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {depts.map(dept => (
                        <TableRow
                            key={dept.id}
                            dept={dept}
                            editingDeptId={editingDeptId}
                            editFormData={editFormData}
                            handleInputChange={handleInputChange}
                            handleUpdateSubmit={handleUpdateSubmit}
                            handleEditClick={handleEditClick}
                            handleDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeptsTable;