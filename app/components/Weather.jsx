var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    // this.setState({
    //   location: location,
    //   temp: 23
    // });
    var that = this;

    //debugger;

    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage){
      that.setState({
        isLoading: false,
        temp: null,
        location: null});
      alert(errorMessage);
    });
  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      console.log(isLoading);
      if(isLoading) {
        return <h3>Fetching Weather...</h3>
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location}/>
      }
    }


    return(
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
