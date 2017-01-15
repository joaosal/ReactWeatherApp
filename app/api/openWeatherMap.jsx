var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8cb6ce1318627a20e2085b8179a03846&units=metric';

//8cb6ce1318627a20e2085b8179a03846

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(response){
      if (response.data.cod && response.data.message){
        throw new Error(response.data.cod)
      } else{
        return response.data.main.temp;
      }
    }, function(response){
      //console.log(response.data.cod);
      //console.log(response);
      throw new Error("ERROR: Cannot find city");
    });
  }
}
