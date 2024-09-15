document.getElementById('personalInfoForm').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const color = document.getElementById('color').value;

    // Set cookies
    document.cookie = `name=${encodeURIComponent(name)}; path=/`;
    document.cookie = `age=${encodeURIComponent(age)}; path=/`;
    document.cookie = `gender=${encodeURIComponent(gender)}; path=/`;
    document.cookie = `color=${encodeURIComponent(color)}; path=/`;

    // Open new window
    window.open('welcome.html', '', 'width=300,height=300');
}


const creatcookie =  (name, value, dayesToLive) => {
    const date = new Date();
    date.setTime(date.getTime() + (dayesToLive * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

const updateCookie = (name, value) => {
    document.cookie = `${name}=${value}; path=/`;
}

const checkCookie = (name) => {
    return document.cookie.includes(name);
}

const getCookieValue = (name) => {
    return document.cookie.split(';').find(row => row.trim().startsWith(name + '=')).split('=')[1];
}

// creatcookie('name', 'ahmed', 1);

// console.log(getCookie('name'));

// deleteCookie('name');

// console.log(getCookie('name'));

// updateCookie('name', 'ahmed');

// console.log(getCookie('name'));

// console.log(checkCookie('name'));

// console.log(getCookieValue('name'));

// console.log(document.cookie);

// console.log(document.cookie.split(';').find(row => row.trim().startsWith('name' + '=')).split('=')[1]);

// console.log(document.cookie.split(';').find(row => row.trim().startsWith('name' + '=')).split('=')[1]);

// console.log(document.cookie.split(';').find(row => row.trim().startsWith('name' + '=')).split('=')[1]);

// console.log(document.cookie.split(';').find(row => row.trim().startsWith('name' + '=')).split('=')[1]);

// console.log(document.cookie.split(';').find(row => row.trim().startsWith('name' + '=')).split('=')[1]);

// console.log(document.cookie.split(';').find(row => row.trim().startsWith('name' + '=')).split('=')[1]);

// console.log(document.cookie.split(';').find(row => row.trim().startsWith('name' + '=')).split('=')[1]);

// console.log(document.cookie.split(';').find(row => row.trim().startsWith('name' + '=')).split('=')[1]);

// console.log(document.cookie.split(';').find(row => row.trim().startsWith('name' + '=')).split('=')[1]);

// console.log(document.cookie.split(';').find(row => row.trim().startsWith('name' + '=')).split('=')[1]);

// console.log(document.cookie.split(';').find(row => row.trim().startsWith('name' + '=')).split('=')[1]);

// console.log(document.cookie.split(';').find(row => row.trim().startsWith('name' + '=')).split('=')[1]);