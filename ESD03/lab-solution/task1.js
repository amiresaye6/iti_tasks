const button = document.getElementById("fetchData");
const contaner = document.getElementById("contaner");
const userDataSection = document.getElementById("userData");

// button.addEventListener('click', () => {
//     const data = fetchData();
// })

window.onload = () => fetchData();


const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (res.ok) {
        const data = await res.json();
        if (data) {
            // console.log(data)
            data.forEach((user, index) => {
                contaner.innerHTML += `<button class="name" id="${index}" onclick="fetchUser(${index})">${user.name}</button>`
            });
            return data;
        }
    } else {
        console.log("failed to fetch data")
    }

}
const fetchUser = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId + 1}`);
    if (res.ok) {
        const data = await res.json();
        if (data) {
            console.log(data)
            userDataSection.innerHTML = `
            <ul>
            <li class="userData">Name: ${data.name}</li>
            <li class="userData">User Name: ${data.username}</li>
            <li class="userData">Email: ${data.email}</li>
            <li class="userData">Website: ${data.website}</li>
            <li class="userData">Phone Number: ${data.phone}</li>
            <li class="userData">Location</li>
            <ul class="userData">
                <li class="userData">Street: ${data.address.street}</li>
                <li class="userData">City: ${data.address.city}</li>
                <li class="userData">Suite: ${data.address.suite}</li>
            </ul>
            </ul>
            `
        }
    } else {
        console.log("failed to fetch data")
    }

}

/*
{
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
*/