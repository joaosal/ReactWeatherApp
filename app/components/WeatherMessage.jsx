var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     return(
//       <h2>It's {this.props.temp} in {this.props.location}</h2>
//     )
//   }
// });

var WeatherMessage = (props) => {
  return (
    <h3 className="text-center">It's {props.temp} in {props.location}</h3>
  )
}

module.exports = WeatherMessage;
