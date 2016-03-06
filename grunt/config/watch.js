// https://github.com/gruntjs/grunt-contrib-watch
var config = require('../config');


module.exports = {
	grunt: {
		options: {
			reload: true,
		},
		files: 'Gruntfile.js',
		tasks: 'build'
	},
	js: {
		files: [config.sourcedir+'js/**/*.js', './grunt/config.js'],
		tasks: ['concat','newer:concat','babel','uglify','newer:uglify']       
	},    

	compass: {
		files: config.sourcedir+'scss/**/*.scss',
		tasks: ['compass:dist','newer:compass:dist']

	},
	postcss: {
		files: config.destinationdir+'Css/*.css',
		tasks: ['postcss:dist','newer:postcss:dist']

	}	

};