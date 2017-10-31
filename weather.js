let getWeather = function() {
  let latitude = '41.8781';
  let longitude = '-87.6298';
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

  // The full API reads https://api.openweathermap.org/data/2.5/weather?lat=41.8781&lon=-87.6298&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial

  let convertToJSON = function(response) {
    return response.json();
  }

  let updateWeather = function (weatherdata){
      let span = document.getElementById('temperature');
        console.log('temperature')
      var temperature = weatherdata.main.temp
      span.innerHTML = temperature
  }

let updateTown = function (weatherdata){
  let span = document.getElementById('town');
  var town = weatherdata.name
  span.innerHTML = town
}

// let updateTown = function (townupdate){
//     let span =     $("#town").text(weatherdata.name);
// }

  // var city = weatherdata.name;
  // console.log(city)
  // $("#city").html(city);


  // let updateTown = function (towndata){
  //     let span = document.getElementById('town');
  //     console.log(span)
  //     var town = weatherdata.name
  //     console.log(town)
  //     span.innerHTML = town
  // }

  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).then(updateTown).catch(displayError);
}

let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}



function geolocation(pos) {
  var crd = pos.coords;

  console.log('Hello, your current position is:');
  console.log(`Lat: ${crd.latitude}`);
  console.log(`Long: ${crd.longitude}`);
};

  navigator.geolocation.getCurrentPosition(geolocation);







// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png  goes from 01 to 10
// The very last part ('10d.png') can change based on the current conditions.
