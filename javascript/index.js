// Function to update time for different cities
function updateTime() {
    // Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles");

        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
    }

    // Sydney
    let sydneyElement = document.querySelector("#sydney");
    if (sydneyElement) {
        let sydneyDateElement = sydneyElement.querySelector(".date");
        let sydneyTimeElement = sydneyElement.querySelector(".time");
        let sydneyTime = moment().tz("Australia/Sydney");

        sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
        sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
    }

    // Tokyo
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
        let tokyoDateElement = tokyoElement.querySelector(".date");
        let tokyoTimeElement = tokyoElement.querySelector(".time");
        let tokyoTime = moment().tz("Asia/Tokyo");

        tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
        tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
    }

    // Paris
    let parisElement = document.querySelector("#paris");
    if (parisElement) {
        let parisDateElement = parisElement.querySelector(".date");
        let parisTimeElement = parisElement.querySelector(".time");
        let parisTime = moment().tz("Europe/Paris");

        parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
        parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
    }
}

// Function for dropdown
function showSelectedCityTime() {
    // Get the selected city value from the dropdown
    let selectedCity = document.getElementById("city").value;
    
    // If no city is selected, do nothing
    if (!selectedCity) return;

    // Initialize cityName variable
    let cityName;

    // Check if "My Current City" is selected
    if (selectedCity === "current") {
        // Get the timezone based on the user's current location
        selectedCity = moment.tz.guess();
        // Split the timezone to get the city name
        cityName = selectedCity.split("/")[1].replace("_", " ");
    } else {
        // Split the selected city value to get the timezone
        cityName = selectedCity.split("/")[1];
    }
    
    // Current time in the selected city
    let cityTime = moment().tz(selectedCity);
    
    // Format the city time and date
    let formattedTime = cityTime.format("h:mm:ss A");
    let formattedDate = cityTime.format("MMMM Do YYYY");
    
    // Display the city time and date with the city name
    alert(`Current time in ${cityName}: ${formattedTime}\nDate: ${formattedDate}`);
}

// Function to update current city/time
function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
        let cityName = "Your City"; 
        let cityTime = moment().tz(cityTimeZone);
        
        // Create a new city element
        let cityElement = document.createElement("div");
        cityElement.classList.add("city");
        cityElement.innerHTML = `
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        `;
        
        // Append the city element to the container
        document.querySelector(".container").appendChild(cityElement);
    }
}

// Initial call to updateTime function to display the initial time
updateTime();

// Call updateTime function every second to update the time
setInterval(updateTime, 1000);

// Add an event listener to the dropdown to trigger the showSelectedCityTime function when a city is selected
let citiesSelectElement = document.getElementById("city");
citiesSelectElement.addEventListener("change", showSelectedCityTime);
