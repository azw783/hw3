let updateWidget = function(data) {

  console.log("Got weather data: ", data)

  let temperature = data.main.temp
  console.log("the temp is: ", temperature)
  jQuery(".card-text").text("It is " + temperature + " degrees outside.")

  let location = data.name
  console.log("the location is: ", location)
  $(".card-title").text(location)

  let icontype = data.weather[0].icon
  console.log(icontype)
  $("#iconpic").attr("src", "http://openweathermap.org/img/w/" + icontype + ".png")

  // YOUR CODE GOES HERE

  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.
}


let getWeather = function(info) {
  console.log(info)
  let latitude = info.coords.latitude.toFixed(4)
  let longitude = info.coords.longitude.toFixed(4)
  // let latitude = '48.8566';
  // let longitude = '2.3522';
  let apiKey = '9806186a433dcb0443e013c6fa81e665'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);

}

// $("#get_forecast").on("click", getWeather)

let handlePosition = function(event) {
  console.log("Starting handlePosition...")
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather);
  console.log("Ending handlePosition...")
}

let link = jQuery("#get_forecast")
link.on("click", handlePosition);

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
