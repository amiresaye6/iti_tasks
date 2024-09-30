import Employees from '../Data/Employees';
import employeeArray from '../Data/EmployeesListData';

// Create (Add a new employee)
function addEmployee(id, name, age, salary, courseList) {
    const newEmployee = new Employees(id, name, age, salary, courseList);
    employeeArray.push(newEmployee);
    return newEmployee;
}

// Read (Get a single employee by ID)
function getEmployeeById(id) {
    return employeeArray.find(employee => employee.id === id);
}

// Read (Get all employees)
function getAllEmployees() {
    return employeeArray;
}

// Update (Modify an existing employee by ID)
function updateEmployee(id, updatedData) {
    const employeeIndex = employeeArray.findIndex(employee => employee.id === id);
    if (employeeIndex !== -1) {
        const employeeToUpdate = employeeArray[employeeIndex];
        
        // Merge existing employee data with updatedData
        employeeArray[employeeIndex] = { ...employeeToUpdate, ...updatedData };
        return employeeArray[employeeIndex];
    } else {
        return null;
    }
}

// Delete (Remove an employee by ID)
function deleteEmployee(id) {
    const employeeIndex = employeeArray.findIndex(employee => employee.id === id);
    if (employeeIndex !== -1) {
        return employeeArray.splice(employeeIndex, 1)[0]; // Removes and returns the deleted employee
    } else {
        return null;
    }
}

export {
    addEmployee,
    getEmployeeById,
    getAllEmployees,
    updateEmployee,
    deleteEmployee
};
