'use strict';
var path = require('path');

module.exports = function(grunt) {
  grunt.file.setBase('../../')

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-istanbul');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-coverage');
  grunt.loadNpmTasks('grunt-open');

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  var yeomanConfig = {
    app: require('../../bower.json').appPath || 'src',
    dist: require('../../bower.json').distPath || 'dist,',
    e2e: 'coverage/e2e',
    static: 'static',
    instrumentedServer: 'coverage/server/instrument',
    instrumentedE2E: 'coverage/e2e/instrumented'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: yeomanConfig,
    connect: {
      options: {
        port: process.env.PORT || 9000,
        hostname: process.env.IP || '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '/src'
          ]
        }
      },
      coverageE2E: {
        options: {
          open: false,
          base: [
            '/src'
          ]
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      coverageE2E: {
        src: ['/']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      coverageE2E: {
        files: [{
          expand: true,
          dot: true,
          cwd: '',
          dest: '/instrumented/',
          src: [
            'config/**/*.js',
            '*.{ico,png,txt,html}',
            '.htaccess',
            'assets/**/*',
            'components/**/*.html',
            'dev/**/*.*',
            'states/**/*.html',
            'views/**/*.html',
            'styles/**/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp',
          dest: '/instrumented/',
          src: ['**/*']
        }, {
          expand:true,
          cwd: '.',
          dest: '/instrumented/',
          src: 'bower_components/**/*'
        } ]
      },
      static: {
        files: [{
          expand: true,
          dot: true,
          cwd: '/dev',
          dest: '/instrumented/',
          src: ['*.html']
        }]
      }

    },

    // start - code coverage settings
    instrument: {
      files: [
        '/dev/**/*.js',
        '/components/**/*.js',
        '/states/**/*.js',
        '/scripts/**/*.js'
      ],
      options: {
        lazy: true,
        basePath: '/'
      }
    },

    makeReport: {
      src: '/*.json',
      options: {
        type: 'html',
        dir: '/reports',
        print: 'detail'
        //        type: 'lcov',
        //        dir: 'reports',
        //        print: 'detail'
      }
    },

    protractor_coverage: {
      options: {
        configFile: 'protractor.conf.js', // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false, // If true, protractor will not use colors in its output.
        coverageDir: '',
        args: {}
      },
      phantom: {
        options: {
          args: {
            baseUrl: 'http://127.0.0.1:9000/',
            // Arguments passed to the command
            'browser': 'phantomjs'
          }
        }
      },
      chrome: {
        options: {
          args: {
            baseUrl: 'http://127.0.0.1:9000/',
            // Arguments passed to the command
            'browser': 'chrome'
          }
        }
      }
    },

    open : {
      coverage: {
        path: 'coverage/e2e/reports/index.html',
        app: 'Google Chrome'
      }
    }
  });

  grunt.registerTask('default', [
    'clean:coverageE2E',
    'copy:coverageE2E',
    'copy:static',
    'instrument',
    'connect:coverageE2E',
    'protractor_coverage:chrome',
    'makeReport',
    'open:coverage'
  ]);
};
