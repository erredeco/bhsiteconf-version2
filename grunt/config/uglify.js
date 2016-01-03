// https://github.com/gruntjs/grunt-contrib-uglify

var config = require('../config');
var dest = config.destinationdir;

module.exports = {
    options: {
        preserveComments: false,
        compress: true
    },                      
  	js: {
    	files:[{ 
      		src: [config.foundationjs], dest: config.destinationdir+'Js/Vendor/foundation.min.js'

      	},{
      		src: [config.appjs], dest: config.destinationdir+'Js/app.min.js'	

      	}] 
	}

};