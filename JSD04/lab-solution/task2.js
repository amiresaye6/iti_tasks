function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const tableBody = document.querySelector('#taskTable tbody');
    const newRow = tableBody.insertRow();

    const doneCell = newRow.insertCell(0);
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function () {
        if (checkbox.checked) {
            taskCell.classList.add('crossed');
        } else {
            taskCell.classList.remove('crossed');
        }
    };
    doneCell.appendChild(checkbox);

    const taskCell = newRow.insertCell(1);
    taskCell.textContent = taskInput;

    const deleteCell = newRow.insertCell(2);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function () {
        const confirmation = confirm('Are you sure you want to delete this task?');
        if (confirmation) {
            tableBody.removeChild(newRow);
        }
    };
    deleteCell.appendChild(deleteButton);

    // Clear the input field after adding the task
    document.getElementById('taskInput').value = '';
}
