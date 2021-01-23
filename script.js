// search for a city 

var weather = '';
var currentAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
var weekAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=';
// var uvAPI = 'http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}';
var apiKey = '&appid=3fbaec1ab0dd5f5d8247be45d836ab90';
var units = '&units=imperial';
var input = '';

//Local storage 
var cityArray = JSON.parse(window.localStorage.getItem("history")) || []; 

function setup() {
    var button = $('#search');
    button.on("click", cityInput);
}

// Name, date, icon rep of weather conditions (temp, humidity, wind speed, UV index
function cityInput(event) {
    event.preventDefault(cityInput);
    input = $('#city')
    console.log(input.val());
//Local Storage 
if (cityArray.indexOf(input.val()) === -1){
    cityArray.push(input.val());
    localStorage.setItem("history", JSON.stringify(cityArray))
    
    $("#recent").empty();

        for (let i = 0; i < cityArray.length; i++) {
            var recentSearch = $("#recent").addClass("list-group-item")
            recentSearch.append("<li>" + cityArray[i] + "</li>");
        }
}

//Current City 
    var currentURL = currentAPI + input.val() + apiKey + units;
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

        //icon 
        // var image = $('#icon')
        // if (res.weather[0].main = "Mist") {
        //     image.style.display = assets/mist.png
        // }
        // if (res.weather[0].main = "Clouds") {
        //     $('#icon').text(assets / cloud.png)
        // }
        // if (res.weather[0].main = "Rain") {
        //     $('#icon').display(assets / rain.png)
        // }
        // if (res.weather[0].main = "Clear") {
        //     $('#icon').display(assets / clear.png)
        // } else {
        //     $('#icon').display(assets / clear.png)
        // }
    })

    //UV index - changes color indicating favorable, moderate or severe
    // var uvURL = uvAPI + input.val() + apiKey;
    // $.ajax({
    //     url: uvURL,
    //     method: "GET"
    // }).then(function (res) {
    //     console.log(res)
    // })


    // View future weather conditions
    // 5-day forecast date, icon weather representation of conditions, temp and humidity 
    var weekURL = weekAPI + input.val() + apiKey + units;
    $.ajax({
        url: weekURL,
        method: "GET"
    }).then(function (res) {
        console.log(res)
        //date 
        // $('#mon').text(res.list[0].dt)
        // $('#tues').text(res.list[1].dt)
        // $('#weds').text(res.list[13].dt)
        // $('#thurs').text(res.list[17].dt)
        // $('#fri').text(res.list[27].dt)
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
    // cityInput();
}

function gotData(data) {
    weather = data;
}
setup();

// click on a city on the left in the search history 
// then i am presented with the conditions for that city again 
//put cities in an array and get from local then append to empty boxes on the left
// call city input function 

// when weather dashboard is open 
// presented with the last city searched 

