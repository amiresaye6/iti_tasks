import React, { useState } from 'react';
import AddDept from '../TaskComponents/Depts/AddDept';
import DeptsTable from '../TaskComponents/Depts/DeptsTable';
import LoginPage from './LoginPage';

function DeptsPage() {
    const [deptsRefresh, setDeptsRefresh] = useState(false);
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("loggedIn") === 'true');

    const handleDeptsAdded = () => {
        setDeptsRefresh(prev => !prev);
    };

    const handleLoginSuccess = () => {
        setLoggedIn(true);
    };

    return (
        <>
            {loggedIn ? (
                <>
                    {/* <AddDept onDeptAdded={handleDeptsAdded} /> */}
                    <DeptsTable refresh={deptsRefresh} />
                </>
            ) : (
                <LoginPage onLoginSuccess={handleLoginSuccess} />
            )}
        </>
    );
}

export default DeptsPage;
