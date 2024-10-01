import React from 'react';

export function TableRow(props) {
    return (
        <tr key={props.course.Id}>
            <td>{props.course.Id}</td>
            <td>
                {props.editingCourseId === props.course.Id ? (
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
                {props.editingCourseId === props.course.Id ? (
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
                {props.editingCourseId === props.course.Id ? (
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
                {props.editingCourseId === props.course.Id ? (
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
                {props.editingCourseId === props.course.Id ? (
                    <button className="btn btn-success btn-sm" onClick={props.handleUpdateSubmit}>
                        Save
                    </button>
                ) : (
                    <>
                        <button className="btn btn-warning btn-sm mx-1" onClick={() => props.handleEditClick(props.course)}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={() => props.handleDelete(props.course.Id)}>Delete</button>
                    </>
                )}
            </td>
        </tr>
    );
}
