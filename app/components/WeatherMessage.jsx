var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h3>{location}</h3>
            <p>The temperature is {temp}</p>
        </div>
    );
}

module.exports = WeatherMessage;
