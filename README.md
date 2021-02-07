# weather-dashboard

   * List of technologies used
   * 1-2 sentences explaining what the app is
   * 2-3 Screenshots / gifs of the app
   * License (usually MIT)
   * Contact information for you and any collaborators

## Table of Contents 
* [Overview](#overview)
* [Technologies](#technologies)
* [Installation](#installation)
* [User Story](#story)
* [Acceptance Criteria](#criteria)
* [Usage](#usage)
* [Deployed Link](#deployed)
* [License](#license)
* [Contact](#contact)

## Overview 
The Weather Dashboard is an application that allows the user to serach for their current weather conditions anywhere across the world. The current search will display in a card on the right side of the page containing: city name, description icon, temperature, humidity, wind speed and UV index. Their searches are then stored on the page in the form of a button, when they want to revisit a previous search they just have to click the button on the left hand side. At the bottom of the page there is a 5-day upcoming forecast. 

## Technologies 
* Open weeather map API: https://openweathermap.org/api
* 5-Day Forecast API: https://openweathermap.org/forecast5
* UV Index API: https://openweathermap.org/api/uvi
* Moment JS: https://momentjs.com/
* jQuery: https://jquery.com/
* Bootstrap: https://getbootstrap.com/docs/5.0/getting-started/introduction/
* JavaScript
* HTML 
* CSS 

## Installation
* Develop and design index.html page using a CSS framework 
* In index.html include javascript and jQuery tags and link to style.css and javascript files
* In javascript file use generated API key and call API key to get relative data
* Select elements from the index.html and manipulate the DOM using a combination of jQuery and javascript
* Input API information into elements by mapping their relative path 
* Store information collected into the local storage. Information is based on user input. 
* Get the information from local storage and display information from when page is loaded
* When the search history is clicked on the left hand side of the page, call cityInput function to grab information again for respective city 

## Story
```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Criteria
```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```
## Usage
Deployed link: 
![alt text](assets/deployed-link.png)
Current Weather Description: 
![alt text](assets/current-weather-description.png)
Search history buttons:
![alt text](assets/search-history.png)
5 Day Forecast: 
![alt text](assets/5-day-forecast.png)

## Deployed
 https://sfinck.github.io/weather-dashboard/

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

 ## Contact 
sarahfinck95@gmail.com

