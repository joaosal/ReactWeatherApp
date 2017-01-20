var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render: function(){
    return(
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example location to test out:</p>
        <ol>
          <li>
            <Link to='/?location=Bogota'>Bogota</Link>
          </li>
          <li>
            <Link to='/?location=Toronto'>Toronto</Link>
          </li>
        </ol>
      </div>
    )
  }
});

module.exports = Examples;
