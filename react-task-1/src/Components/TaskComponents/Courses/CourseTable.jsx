import React, { useEffect, useState } from 'react';
// import CourseManager from './CourseManager';
import { TableRow } from './TableCourseRow';
import CourseManagerAPI from './CourseManagerLocalServer';
import { Link } from 'react-router-dom';

const CourseTable = () => {
    const courseManager = new CourseManagerAPI();
    const [courses, setCourses] = useState([]);
    const [editingCourseId, setEditingCourseId] = useState(null);
    const [editFormData, setEditFormData] = useState({});

    const fetchCourses = async () => {
        try {
            const fetcheCourse = await courseManager.getCourses();
            setCourses(fetcheCourse);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const [sortCriteria, setSortCriteria] = useState('none');
    const [durationFilter, setDurationFilter] = useState('');


    useEffect(() => {
        fetchCourses();
    }, []);

    const handleDelete = async (id) => {
        const res = prompt("Type 'sure' if you want to continue.");
        if (res === 'sure') {
            try {
                await courseManager.removeCourse(id);
                console.log(id)
                fetchCourses();
            } catch (error) {
                console.error('Error deleting courses:', error);
            }
        }
    };

    const handleEditClick = (data) => {
        setEditingCourseId(data.id);
        // console.log(data.id)
        // console.log(data)
        setEditFormData(data);
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
            await courseManager.updateCourse(editingCourseId, editFormData);
            setEditingCourseId(null);
            fetchCourses();
        } catch (error) {
            console.error('Error updating department:', error);
        }
    };

    // Sorting function
    const sortCourses = (criteria) => {
        const sortedCourses = [...courses].sort((a, b) => {
            const dateA = criteria === 'start' ? new Date(a.StartDate) : new Date(a.EndDate);
            const dateB = criteria === 'start' ? new Date(b.StartDate) : new Date(b.EndDate);
            return dateA - dateB; // Ascending order
        });
        return sortedCourses;
    };

 
    const sortedCourses = sortCriteria === 'none' ? courses : sortCourses(sortCriteria);

    // Filter courses by duration (smaller than or equal to durationFilter)
    const filteredCourses = sortedCourses.filter(course => {
        const courseDuration = parseFloat(course.Duration);
        const filterDuration = parseFloat(durationFilter);
        return durationFilter ? courseDuration <= filterDuration : true;
    });

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Course List</h2>
            <Link className='btn btn-success' to='/courses/add'>add</Link>

            {/* Filter by Duration */}
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Filter by Duration (<=)"
                    value={durationFilter}
                    onChange={(e) => setDurationFilter(e.target.value)}
                    className="form-control"
                />
            </div>

            {/* Sorting options */}
            <div className="mb-3">
                <button onClick={() => setSortCriteria('start')} className="btn btn-primary mr-2">Sort by Start Date</button>
                <button onClick={() => setSortCriteria('end')} className="btn btn-primary">Sort by End Date</button>
                <button onClick={() => setSortCriteria('none')} className="btn btn-secondary ml-2">Clear Sort</button>
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Teaching Instructors</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCourses.map(course => (
                        <TableRow
                            key={course.id}
                            course={course}
                            editingCourseId={editingCourseId}
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

export default CourseTable;
