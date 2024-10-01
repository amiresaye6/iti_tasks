class EmployeeManager {
    constructor() {
        this.loadEmployees();
    }

    loadEmployees() {
        const storedEmployees = localStorage.getItem('employees');
        this.employees = storedEmployees ? JSON.parse(storedEmployees) : [];
    }

    saveEmployees() {
        localStorage.setItem('employees', JSON.stringify(this.employees));
    }

    addEmployee(employee) {
        if (!employee.Id) {
            console.error('Employee must have an ID.');
            return;
        }
        const exists = this.employees.some(existingEmployee => existingEmployee.Id === employee.Id);
        if (exists) {
            console.error(`Employee with ID ${employee.Id} already exists.`);
            return;
        }
        this.employees.push(employee);
        this.saveEmployees();
    }

    deleteEmployee(id) {
        this.employees = this.employees.filter(employee => employee.Id !== id);
        this.saveEmployees();
    }

    getEmployees() {
        return this.employees;
    }

    updateEmployee(id, updatedData) {
        const index = this.employees.findIndex(employee => employee.Id === id);
        if (index !== -1) {
            this.employees[index] = { ...this.employees[index], ...updatedData };
            this.saveEmployees();
        } else {
            console.error(`Employee with ID ${id} not found.`);
        }
    }
}

export default EmployeeManager;
