function searchCity(city) {
    let appiKey = "b3246aecf7f467401t42442f8b6f3f8o";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key={apiKey}&units=metric`;

}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-bar-input");
    
    let cityElement = document.querySelector("#app-city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);

}

let searchBarElement = document.querySelector("#search-bar");
searchBarElement.addEventListener("submit",handleSearchSubmit);