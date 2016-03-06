// https://github.com/gruntjs/grunt-contrib-uglify

var config = require('../config');
module.exports = {
    options: {
        preserveComments: false,
        compress: true
    },                      
  	js: {
    	files:[{ 
      		src: config.sourcedir+'js/foundation.babelized.js', dest: config.destinationdir+'Js/Vendor/foundation.min.js'

      	},{
      		src: [config.appjs], dest: config.destinationdir+'Js/app.min.js'	

      	}] 
	}

};