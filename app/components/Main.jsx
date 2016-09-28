var React = require('react');
var Navigation = require('Navigation');
var Weather = require('Weather');

var Main = (props) => {
    return (
        <div>
            <Navigation />
            <h2>Main Page Component</h2>
            {props.children}
        </div>
    );
}

module.exports = Main;
