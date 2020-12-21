const axios = require('axios');
const cities = require('./cities').cities;
const API_KEY = 'bbf58873664deb1ed9ea11bf360d4807';

export default async function getDataFromAPI() {
    let allCities = [];
    for(let i=0; i<cities.length; i++) {
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i].name}&appid=${API_KEY}`)
            .then(data => {
                allCities.push(data.data)
            })
    }
    return allCities;
}

// console.log(getDataFromAPI())