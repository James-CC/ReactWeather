var utils = {
    checkInputStrings: function (value) {
        return (typeof value === 'string' && value.length > 0);
    }
};

module.exports = utils;
