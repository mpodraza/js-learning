/*jshint camelcase:false*/

(function () {
  'use strict';

  module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    var config = {
      app: 'app'
    };

    grunt.initConfig({
      config: config,
      watch: {
        livereload: {
          options: {
            livereload: '<%= connect.options.livereload %>'
          },
          files: ['<%= config.app %>/**/*.html', '<%= config.app %>/**/*.js']
        }
      },

      connect: {
        options: {
          port: 9000,
          livereload: 35729,
          hostname: '127.0.0.1'
        },
        test: {
          options: {
            base: ['app'],
            port: 9001
          }
        },
        livereload: {
          options: {
            open: true,
            middleware: function (connect) {
              return [connect().use('/bower_components', connect.static('./bower_components')), connect.static(config.app)

              ];
            }
          }
        }
      },
      jshint: {
        default: {
          options: {
            jshintrc: true
          },
          files: {
            src: ['app/**/*.js', 'test/**/*.js']
          }
        },
        verify: {
          options: {
            jshintrc: true,
            reporter: 'checkstyle',
            reporterOutput: 'target/jshint.xml'
          },
          files: {src: ['app/**/*.js', 'test/**/*.js']}
        }
      }
    });

    grunt.registerTask('serve', ['connect:livereload', 'watch']);
    grunt.registerTask('verify', ['jshint:verify']);
  };
})();
