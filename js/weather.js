const API_KEY = "43d1c9e9d4a17a4166da3b6606a7521d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in ", lat, lon);
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const div = document.querySelector("#weather");
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const icon = document.createElement("img");
      const iconURL = data.weather[0].icon;
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      icon.src = `https://openweathermap.org/img/wn/${iconURL}@2x.png`;
      div.appendChild(icon);
    });
}

function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
