let newsCount = 0;

function addNews() {
    const newsInput = document.getElementById('newsInput').value;
    if (newsInput.trim() === '') {
        alert('Please enter some news!');
        return;
    }

    newsCount++;

    const tableBody = document.querySelector('#newsTable tbody');
    const newRow = tableBody.insertRow();

    const noCell = newRow.insertCell(0);
    const newsCell = newRow.insertCell(1);

    noCell.textContent = newsCount;
    newsCell.textContent = newsInput;

    document.getElementById('newsInput').value = '';
}

function showRowCount() {
    const rowCount = document.querySelector('#newsTable tbody').rows.length;
    alert(`Number of rows: ${rowCount}`);
}
