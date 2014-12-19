module.exports = function(grunt) {

	//Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		shell: {
			multiple: {
				command: [
					'bower install',
					'mkdir -p public/css',
					'mkdir -p public/js',
					'cp bower_components/bootstrap/dist/css/bootstrap.css public/css/',
					'cp bower_components/bootstrap/dist/js/bootstrap.js public/js/',
					'if [ -f index.html ]; then mv index.html public/; fi',
					'if [ -f style.css ]; then mv style.css public/css/; fi'
				].join('&&')
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell');

	//Default Tasks
	grunt.registerTask('default', ['shell']);
};
