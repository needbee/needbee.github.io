module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      sass: ['css/app.css'],
      requirejs: ['js/main-built.js']
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    requirejs: {
      dist: {
        options: {
          mainConfigFile: 'js/main.js',
          name: '../js/main',
          include: 'requireLib',
          out: 'js/main-built.js'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      requirejs: {
        files: 'js/main.js',
        tasks: ['requirejs']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean','sass','requirejs']);
  grunt.registerTask('default', ['build','watch']);
}