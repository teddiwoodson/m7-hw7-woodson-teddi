//creating a variable for a new API request
var xmlhttp = new XMLHttpRequest();

//adding statechange event handler to the API request
xmlhttp.onreadystatechange = function() {
  //if this state change is successful
    if (this.readyState == 4 && this.status == 200) {
      //storing our API object inside our apiResult
        var apiResult = JSON.parse(this.responseText);

        //add variables for the information
        var city = apiResult.name;
        var weather = apiResult.weather[0].description;

        //add the information to the screen

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33759,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
