import React, { useEffect, useState } from 'react';
import CourseManager from './CourseManager';
import { TableRow } from './TableCourseRow';

const CourseTable = () => {
    const courseManager = new CourseManager();
    const [courses, setCourses] = useState([]);
    const [editingCourseId, setEditingCourseId] = useState(null);
    const [editFormData, setEditFormData] = useState({});
    const [newCourseData, setNewCourseData] = useState({
        Id: '',
        CourseName: '',
        Duration: '',
        StartDate: '',
        EndDate: ''
    });
    
    // State for sorting
    const [sortCriteria, setSortCriteria] = useState('none'); // 'start' or 'end'
    
    // State for filtering by duration
    const [durationFilter, setDurationFilter] = useState('');

    const fetchCourses = () => {
        setCourses(courseManager.getCourses());
    };

    useEffect(() => {
        fetchCourses();

        const handleStorageChange = () => {
            if (localStorage.getItem("loadCondition") === "true") {
                fetchCourses();
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    const handleDelete = (id) => {
        const res = prompt("Type 'sure' if you want to continue.");
        if (res === 'sure') {
            courseManager.removeCourse(id);
            fetchCourses();
        }
    };

    const handleEditClick = (course) => {
        setEditingCourseId(course.Id);
        setEditFormData(course);
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
        setEditingCourseId(null);
        fetchCourses();
    };

    const handleNewInputChange = (e) => {
        const { name, value } = e.target;
        setNewCourseData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddCourse = (e) => {
        e.preventDefault();
        if (newCourseData.CourseName && newCourseData.Duration && newCourseData.StartDate && newCourseData.EndDate) {
            courseManager.addCourse(newCourseData); // Add course using CourseManager
            fetchCourses();
            setNewCourseData({
                Id: '',
                CourseName: '',
                Duration: '',
                StartDate: '',
                EndDate: ''
            }); // Reset the form
        } else {
            alert("Please fill all fields.");
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

    // Get sorted courses based on current sort criteria
    const sortedCourses = sortCriteria === 'none' ? courses : sortCourses(sortCriteria);

    // Filter courses by duration (smaller than or equal to durationFilter)
    const filteredCourses = sortedCourses.filter(course => {
        const courseDuration = parseFloat(course.Duration); // Convert course duration to number
        const filterDuration = parseFloat(durationFilter); // Convert filter duration to number
        return durationFilter ? courseDuration <= filterDuration : true; // Check if course duration is less than or equal to filter duration
    });

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Course List</h2>

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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCourses.map(course => (
                        <TableRow
                            key={course.Id}
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
