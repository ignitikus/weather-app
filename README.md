# Welcome to WEATHER_APP project

Weather app built with DarkSky API. \
Endpoint: `https://api.darksky.net/forecast/[key]/[latitude],[longitude]` \
Since DarkSky API utilizes coordinates system for searching I've created `object` with only 6 cities for testing. 

Accessible routes:

* `/` - login route. Login validation allows to be auto redirected to `/weather` if user already 
logged in. 
   * `/register` - register route. Random home city will be assigned during registry.
* `/403` - auto-redirect if user tries to access certain pages without logging in.
* `/weather` - 8-day forecast for 'home city' by default. 6 cities available for search: New York City, Moscow, Istanbul, Sydney, Wuhan, Tokyo.
   * `/city` - 8-day forecast for searched city with city wallpaper.
* `/users/profile` - Current user's information. 