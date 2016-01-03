// https://github.com/gruntjs/grunt-contrib-copy


var config = require('../config');

module.exports = {
	//use this the 1st time to copy everything from your "Local Source" folder to the correct "source" folder
	local: {
		files: [{
			expand:true, 
			cwd: config.foundationdir+'scss/settings/', 
			src: ['_settings.scss'], 
			dest:config.sourcedir+'scss/'
			},{
			expand:true, 
			cwd: config.mydir, 
			src: ['scss/**/*.scss'], 
			dest:config.sourcedir
			},{
			expand:true, 
			cwd: config.mydir, 
			src: ['js/**/*.js'], 
			dest:config.sourcedir
			}]
	},
	//use this to backup scss and  javascript  files into another folder
	//please take note that you must do a diff after the update
	backup: { 
		files: [{
			expand:true, 
			cwd: config.sourcedir, 
			src: ['./**/*.*'], 
			dest: config.bckdir+'<%= date%>-version<%= pkg.version%>'
		}]
	}

};