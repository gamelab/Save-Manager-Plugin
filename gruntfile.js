module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    BASE_PATH: '',
    DEVELOPMENT_PATH: '',

    yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    extension: '.js',                               
                    paths: '<%= DEVELOPMENT_PATH %>' + 'src/',
                    outdir: '<%= BASE_PATH %>' + 'docs/'
                }
            }
        },

    uglify: {
            build: {
                files: {
                'src/saveManager-<%= pkg.version %>.min.js': ['src/saveManager-<%= pkg.version %>.js']
            }
        }
    }
 

 });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-copy');

  
  
  
  grunt.registerTask("default", ["uglify:build"]);
  grunt.registerTask("full", ["uglify:build","yuidoc:compile"]);
  
  

};