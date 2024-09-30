// Importing the Employees and CourseList classes
import Employees from './Employees';
import CourseList from './CourseList';

let employeeArray = [
    new Employees(1, "Amir Alsayed", 22, 80000, new CourseList(101, "JavaScript", "3 months", "2024-10-01", "2025-01-01", ["Prof. Ali", "Dr. Sara"])),
    new Employees(2, "Mohamed Salah", 22, 55000, new CourseList(102, "Biology", "2 months", "2024-09-01", "2024-11-01", ["Prof. Ahmed"])),
    new Employees(3, "Amr Waheed", 22, 55000, new CourseList(103, "Physics", "4 months", "2024-08-01", "2024-12-01", ["Dr. Samir"])),
    new Employees(4, "Hossam Mostafa", 28, 50000, new CourseList(104, "History", "6 months", "2024-07-01", "2024-12-01", ["Prof. Mona"])),
    new Employees(5, "Abdullah Abdulrahman", 35, 60000, new CourseList(105, "English", "3 months", "2024-06-01", "2024-09-01", ["Dr. Omar"]))
]

export default employeeArray;
