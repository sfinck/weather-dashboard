// search for a city 

var weather = '';
var api = 'api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=3fbaec1ab0dd5f5d8247be45d836ab90';
var units = '&units=imperial';
var input = '';

function setup() {
    var button = $('#search');
    button.onclick(cityInput);
    
    input = $('#city')
}
function cityInput(){
    var url = api + input.value() + apiKey + units;
    loadJSON(url, gotData);
}
function gotData(data) {
    weather = data;
}

// add search to local 

// Current weather condition is displayed in current city card

// Name, date, icon rep of weather conditions (temp, humidity, wind speed, UV index

// uv index - changes color indicating favorable, moderate or severe

// view future weather conditions
// 5-day forecast date, icon weather representation of coniitons, temp and humidity 

// click on a city on the left in the search history 
// then i am presented with the conditions for that city again 

// when weather dashboard is open 
// presented with the last city searched 

