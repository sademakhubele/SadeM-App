function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML =response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);

}

function searchCity(city) {
    let apiKey = `b3246aecf7f467401t42442f8b6f3f8o`;
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(refreshWeather)

}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-bar-input");
    
    searchCity(searchInput.value);
}

let searchBarElement = document.querySelector("#search-bar");
searchBarElement.addEventListener("submit",handleSearchSubmit);