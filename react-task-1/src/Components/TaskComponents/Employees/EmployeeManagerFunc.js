const loadEmployees = () => {
    const storedEmployees = localStorage.getItem('employees');
    return storedEmployees ? JSON.parse(storedEmployees) : [];
};

const saveEmployees = (employees) => {
    localStorage.setItem('employees', JSON.stringify(employees));
};

const addEmployee = (employee) => {
    if (!employee.Id) {
        console.error('Employee must have an ID.');
        return;
    }

    const employees = loadEmployees();
    const exists = employees.some(existingEmployee => existingEmployee.Id === employee.Id);
    if (exists) {
        console.error(`Employee with ID ${employee.Id} already exists.`);
        return;
    }

    const updatedEmployees = [...employees, employee];
    saveEmployees(updatedEmployees);
};

const deleteEmployee = (id) => {
    const employees = loadEmployees();
    const updatedEmployees = employees.filter(employee => employee.Id !== id);
    saveEmployees(updatedEmployees);
};

const getEmployees = () => {
    return loadEmployees();
};

const updateEmployee = (id, updatedData) => {
    const employees = loadEmployees();
    const index = employees.findIndex(employee => employee.Id === id);
    if (index !== -1) {
        const updatedEmployees = employees.map((employee, i) =>
            i === index ? { ...employee, ...updatedData } : employee
        );
        saveEmployees(updatedEmployees);
    } else {
        console.error(`Employee with ID ${id} not found.`);
    }
};

export {
    loadEmployees,
    saveEmployees,
    addEmployee,
    deleteEmployee,
    getEmployees,
    updateEmployee
};
