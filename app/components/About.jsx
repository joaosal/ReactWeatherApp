var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return(
//       <h3>About Component</h3>
//     )
//   }
// });

//Stateless Component

// var About = function(props) {
//   return(
//     <h3>About Component</h3>
//   )
// }

//Arrow function

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is Weather application built using React</p>
    </div>
  )
}

module.exports = About;
