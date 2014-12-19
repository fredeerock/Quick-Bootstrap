module.exports = function(grunt) {
    //project configuration
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
                ].join('&&')
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');

    //Default Tasks
    grunt.registerTask('default', ['shell']);

    //production Tasks
    //grunt.registerTask('dist',[..]);

    //test tasks
};
