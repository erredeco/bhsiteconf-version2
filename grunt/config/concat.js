// https://github.com/gruntjs/grunt-contrib-concat
var config = require('../config');

module.exports = {                     
  	js: {
    	files:[{ 
      		src: [config.foundationjs], dest: config.destinationdir+'Js/Vendor/foundation.min.js'

      	},{
      		src: [config.appjs], dest: config.destinationdir+'Js/app.min.js'	
      	}] 
	}
};