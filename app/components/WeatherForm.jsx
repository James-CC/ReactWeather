var React = require('react');
var utils = require('utils');

var WeatherForm = React.createClass({
    onFormSubmit: function (event) {
        event.preventDefault();

        var location = this.refs.location.value;
        if (utils.checkInputStrings(location)) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type='text' placeholder='Enter city location' ref='location' />
                    <button>View Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
