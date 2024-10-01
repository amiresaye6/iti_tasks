import React, { useState } from 'react'
import AddDept from '../TaskComponents/Depts/AddDept'
import DeptsTable from '../TaskComponents/Depts/DeptsTable'

function DeptsPage() {
    const [deptsRefresh, setDeptsRefresh] = useState(false);

    const handleDeptsAdded = () => {
        setDeptsRefresh(prev => !prev);
    };
    return (
        <>
            <AddDept onDeptAdded={handleDeptsAdded}/>
            <DeptsTable />
        </>
    )
}

export default DeptsPage;
