//https://github.com/modernizr/grunt-modernizr

var config = require('../config');

module.exports = {
	dist: {
		"dest" : config.destinationdir+'Js/Vendor/modernizr-custom.min.js',
		"parseFiles": false,
		"customTests": [],
		"devFile": false,
		"tests": [
		    "css/boxsizing"
			],
		"options": [
			"html5shiv",
			"setClasses"
			],
		"uglify": false
	}
};
