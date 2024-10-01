import React from 'react';

export function TableRow(props) {
    return (
        <tr key={props.course.id}>
            <td>{props.course.id}</td>
            <td>
                {props.editingCourseId === props.course.id ? (
                    <input
                        type="text"
                        name="CourseName"
                        value={props.editFormData.CourseName}
                        onChange={props.handleInputChange}
                        required
                    />
                ) : (
                    props.course.CourseName
                )}
            </td>
            <td>
                {props.editingCourseId === props.course.id ? (
                    <input
                        type="text"
                        name="Duration"
                        value={props.editFormData.Duration}
                        onChange={props.handleInputChange}
                        required
                    />
                ) : (
                    props.course.Duration
                )}
            </td>
            <td>
                {props.editingCourseId === props.course.id ? (
                    <input
                        type="date"
                        name="StartDate"
                        value={props.editFormData.StartDate}
                        onChange={props.handleInputChange}
                        required
                    />
                ) : (
                    props.course.StartDate
                )}
            </td>
            <td>
                {props.editingCourseId === props.course.id ? (
                    <input
                        type="date"
                        name="EndDate"
                        value={props.editFormData.EndDate}
                        onChange={props.handleInputChange}
                        required
                    />
                ) : (
                    props.course.EndDate
                )}
            </td>
            <td>
                {props.editingCourseId === props.course.id ? (
                    <input
                        type="text"
                        name="TeachingInstrList"
                        value={props.editFormData.TeachingInstrList.join(', ')}
                        onChange={props.handleInputChange}
                        required
                    />
                ) : (
                    <div>
                        {Array.isArray(props.course.TeachingInstrList) && props.course.TeachingInstrList.length > 0 ? (
                            props.course.TeachingInstrList.map((emp, index) => (
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
                {props.editingCourseId === props.course.id ? (
                    <button className="btn btn-success btn-sm" onClick={props.handleUpdateSubmit}>
                        Save
                    </button>
                ) : (
                    <>
                        <button className="btn btn-warning btn-sm mx-1" onClick={() => props.handleEditClick(props.course)}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={() => props.handleDelete(props.course.id)}>Delete</button>
                    </>
                )}
            </td>
        </tr>
    );
}
