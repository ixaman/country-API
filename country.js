const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {
    countries.forEach(country => {
        const countryContainer = document.getElementById('country');
        const div = document.createElement('div');
        div.classList.add('countries')
        div.innerHTML = `
            <h3>Country: ${country.name} </h3>
            <h4>Capital: ${country.capital} </h4>
            <button onclick = "displayDetails('${country.name}')" >Details</button>

        `;
        countryContainer.appendChild(div);
    })
}
const displayDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then (data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country => {
    console.log(country)
    const detailsContainer = document.getElementById('country-details');
    detailsContainer.classList.add('country-detail')
    detailsContainer.innerHTML = `
    <img width = 200px src ="${country.flag}">
    <h3>Name: ${country.name} </h3>
    <h3>Capital: ${country.capital} </h3>
    <h3>Currency: ${country.currencies[0].symbol} ${country.currencies[0].name} </h3>
    <h3>Population: ${country.population} </h3>
    <h3>Language: ${country.languages[0].name}</h3>
    <h3>Region: ${country.region} </h3>


    `;
    
}

loadCountries();