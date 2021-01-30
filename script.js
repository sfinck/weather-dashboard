// search for a city
var weather = '';
var currentAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
var weekAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=';
var uvAPI = 'https://api.openweathermap.org/data/2.5/uvi?lat=&lon=';
var apiKey = '&appid=3fbaec1ab0dd5f5d8247be45d836ab90';
var units = '&units=imperial';
var input = '';
var lat = '';
var lon = '';

//Local storage
var cityArray = JSON.parse(window.localStorage.getItem("history")) || [];

createButtons(cityArray)

// when weather dashboard is open
// presented with the last city searched
//gives index of the last item in array 
if (cityArray.length != 0) {
    var lastCity = cityArray[cityArray.length - 1];
    weatherData(lastCity);
}

function setup() {
    var button = $('#search');
    button.on("click", cityInput);
}

// Name, date, icon rep of weather conditions (temp, humidity, wind speed, UV index
function cityInput(event) {
    event.preventDefault(cityInput);
    input = $('#city').val();

    //Local Storage
    //Put cities in an array and get from local then append to empty boxes on the left
    // Call city input function
    if (cityArray.indexOf(input) === -1) {
        cityArray.push(input);
        localStorage.setItem("history", JSON.stringify(cityArray))
        createButtons(cityArray);
    }
    weatherData(input);
}

function createButtons(array) {
    $("#recent").empty();

    for (let i = 0; i < array.length; i++) {
        var recentSearch = $("#recent").addClass("list-group-item")
        recentSearch.append("<button id='cityButton'>" + array[i] + "</button> <br>")
    }
}

function gotData(data) {
    weather = data;
}

function weatherData(city) {
    //Current City
    var currentURL = currentAPI + city + apiKey + units;
    $.ajax({
        url: currentURL,
        method: "GET" 
    }).then(function (res) {
        console.log(res)
        $('#input').text(res.name)
        $('#humidity').text(res.main.humidity)
        $('#speed').text(res.wind.speed)
        $('#temp').text(res.main.temp)
        $('#date').text(moment().format("MMM Do YY"));
        $('#icon').src(res.weather[0]);
        lat = res.coord.lat
        lon = res.coord.lon
        console.log(lat)
        console.log(lon)
 getUV(lat, lon);
    })
    // View future weather conditions
    // 5-day forecast date, icon weather representation of conditions, temp and humidity
    var weekURL = weekAPI + city + apiKey + units;
    $.ajax({
        url: weekURL,
        method: "GET"
    }).then(function (res) {
        console.log(res)
        //temp
        $('#mon-temp').text(res.list[0].main.temp)
        $('#tues-temp').text(res.list[1].main.temp)
        $('#weds-temp').text(res.list[13].main.temp)
        $('#thurs-temp').text(res.list[17].main.temp)
        $('#fri-temp').text(res.list[27].main.temp)
        //humidity
        $('#mon-humid').text(res.list[0].main.humidity)
        $('#tues-humid').text(res.list[1].main.humidity)
        $('#weds-humid').text(res.list[13].main.humidity)
        $('#thurs-humid').text(res.list[17].main.humidity)
        $('#fri-humid').text(res.list[27].main.humidity)
    })

}
function getUV (lat, lon){
       //UV index
       var uvURL = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}${apiKey}`
       console.log(uvURL)
       $.ajax({
           url: uvURL,
           method: "GET"
       }).then(function (res) {
           console.log(res)
           $('#uv').text()
       })
}
// click on a city on the left in the search history
// then i am presented with the conditions for that city again
$('#recent-card').on("click", "#cityButton", function (event) {
    event.preventDefault();
    input = $(this).text();
    weatherData(input);
})

setup();





