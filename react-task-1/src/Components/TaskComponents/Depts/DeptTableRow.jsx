import React from 'react';

export function TableRow(props) {
    console.log(props.dept.id)
    console.log(props.editingDeptId)
    console.log(props.dept.EmpList)

    return (
        <tr key={props.dept.id}>
            <td>{props.dept.id}</td>
            <td>
                {props.editingDeptId === props.dept.id ? (
                    <input
                        type="text"
                        name="Name"
                        value={props.editFormData.Name}
                        onChange={props.handleInputChange}
                        required
                    />
                ) : (
                    props.dept.Name
                )}
            </td>
            <td>
                {props.editingDeptId === props.dept.id ? (
                    <input
                        type="text"
                        name="Location"
                        value={props.editFormData.Location}
                        onChange={props.handleInputChange}
                        required
                    />
                ) : (
                    props.dept.Location
                )}
            </td>
            <td>
                {props.editingDeptId === props.dept.id ? (
                    <input
                        type="text"
                        name="Branches"
                        value={props.editFormData.Branches}
                        onChange={props.handleInputChange}
                        required
                    />
                ) : (
                    props.dept.Branches
                )}
            </td>
            <td>
    {props.editingDeptId === props.dept.Id ? (
        <input
            type="text"
            name="EmpList"
            value={props.editFormData.EmpList.join(', ')}
            onChange={props.handleInputChange}
            required
        />
    ) : (
        <div>
            {Array.isArray(props.dept.EmpList) && props.dept.EmpList.length > 0 ? (
                props.dept.EmpList.map((emp, index) => (
                    <span key={index} className="badge bg-secondary mx-1" style={{ fontSize: '0.9em' }}>
                        {emp}
                    </span>
                ))
            ) : (
                <span>No employees assigned</span>
            )}
        </div>
    )}
</td>

            <td>
                {props.editingDeptId === props.dept.id ? (
                    <button className="btn btn-success btn-sm" onClick={props.handleUpdateSubmit}>
                        Save
                    </button>
                ) : (
                    <>
                        <button className="btn btn-warning btn-sm mx-1" onClick={() => props.handleEditClick(props.dept)}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={() => props.handleDelete(props.dept.id)}>Delete</button>
                    </>
                )}
            </td>
        </tr>
    );
}