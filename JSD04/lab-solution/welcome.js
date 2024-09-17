function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

window.onload = function() {
    const name = getCookie('name');
    const age = getCookie('age');
    const gender = getCookie('gender');
    const color = getCookie('color');

    console.log(name, age, gender, color)

    // Determine the gender image URL
    const genderImage = gender === 'male'
        ? 'https://via.placeholder.com/50x50?text=M'
        : 'https://via.placeholder.com/50x50?text=F';

    if (name && age && gender && color) {
        document.querySelector('.name').textContent = name;
        document.querySelector('img').src = genderImage;
        document.querySelector('#age').textContent = 'Age: ' + age;
        document.querySelector('.name').style.color = color;
    } else {
        document.querySelector('body').innerHTML = '<h2>No data available</h2>';
    }
};
