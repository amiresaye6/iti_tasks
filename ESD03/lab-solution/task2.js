const mainCountry = document.getElementById("mainCountry");
const secondCountry = document.getElementById("secondCountry");
const mainC = 'Libya'
// const mainC = 'Sudan'
// const mainC = 'Egypt'
// const secondC = 'Libya'


window.onload = async () => {
    const res = await fetch(`https://restcountries.com/v2/name/${mainC}`);
    if (res.ok) {
        const data = await res.json();
        console.log(data);

        const population = data[0].population / 1000000.0;

        mainCountry.innerHTML = `
                <img class="mainImg" src="${data[0].flag}" alt="${data[0].name}">
                <h1>${data[0].name}</h1>
                <h3>${data[0].region}</h3>
                <h4> 👫 ${population.toFixed(2)} M people</h4>
                <h4>🗣 ${data[0].languages[0].name}</h4>
                <h4> 💰 ${data[0].currencies[0].name}</h4>
        `
        // console.log(data[0].borders)

        const res2 = await fetch(`https://restcountries.com/v2/alpha/${data[0].borders[1]}`);
        if (res2.ok) {
            const data2 = await res2.json();
            console.log(data2);
            const population2 = data2.population / 1000000.0;

            secondCountry.innerHTML = `
                <img class="mainImg" src="${data2.flag}" alt="${data2.name}">
                <h1>${data2.name}</h1>
                <h3>${data2.region}</h3>
                <h4> 👫 ${population2.toFixed(2)} M people</h4>
                <h4>🗣 ${data2.languages[0].name}</h4>
                <h4> 💰 ${data2.currencies[0].name}</h4>
        `
        }
    } else {
        console.log("error, can't fetch data correctry");
    }
}