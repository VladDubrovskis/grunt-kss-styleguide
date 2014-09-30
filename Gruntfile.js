module.exports = function (grunt) {

  'use strict';

  // configurable paths (all paths relative)
  var config = {
    src: 'src', // source folder
    assets: 'src/assets', // assets folder
    stylesheets: 'src/sass', // your sass files
    dist: 'dist', // distribution build directory
    release: 'public', // public release directory
    styleguide: 'styleguide', // styleguie directory
  };

  grunt.initConfig({
    // pickup the configuration
    config: config,
    // cleanup tasks
    clean: {
      // cleanup the build directory
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*'
          ]
        }]
      },
      // cleanup the release directory
      release: {
        files: [{
          dot: true,
          src: [
            '<%= config.release %>/*'
          ]
        }]
      },
      // cleanup the styleguide directory
      styleguide: {
        files: [{
          dot: true,
          src: [
            '<%= config.styleguide %>/*'
          ]
        }]
      },
      // cleanup single css files
      singlecssfiles: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*.css',
            '!<%= config.dist %>/style*.css'
          ]
        }]
      }
    },
    // configure Sass task, refer to "https://github.com/gruntjs/grunt-contrib-sass" for options
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        // you can add any number of files here if you wish to generate separate snippets of your framework
        files: {
          '<%= config.dist %>/main.css': '<%= config.stylesheets %>/main.scss',
          '<%= config.dist %>/navigation.css': '<%= config.stylesheets %>/navigation.scss',
        }
      }
    },
    // css minify task, refer to "https://github.com/gruntjs/grunt-contrib-cssmin" for options
    cssmin: {
      combine: {
        // files to minify
        files: {
          '<%= config.dist %>/style.min.css': ['<%= config.dist %>/style.css']
        },
        // remove all the comments from the code
        options: {
            keepSpecialComments: '0'
        }
      }
    },
    copy: {
      // copy asset files to the distribution directory
      assets: {
        files: [{
          expand: true,
          cwd: '<%= config.assets %>',
          dest: '<%= config.dist %>',
          src: '**'
        }]
      },
      // copy files accross from distribution build directory to release directory
      release: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          dest: '<%= config.release %>',
          src: '**'
        }]
      },
      styleguide: {
        files: [{
          expand: true,
          cwd: '<%= config.assets %>',
          dest: '<%= config.styleguide %>/public',
          src: '**'
        }]
      },
      styleguideIndex: {
        files: [{
          src: '<%= config.src %>/styleguide.md',
          dest: '<%= config.dist %>/styleguide.md',
        }]
      }
    },
    // put all files together to one big CSS files
    concat: {
      dist: {
        src: [
        '<%= config.dist %>/*.css',
        ],
        dest: '<%= config.dist %>/styles.css',
      },
    },
    // styleguide generation options
    kss: {
      // generated css file to be included in the styleguide
      options: {
        includeType: 'css',
        includePath: '<%= config.dist %>/mee-ui.css',
      },
      dist: {
        files: {
          '<%= config.styleguide %>': ['<%= config.dist %>']
        }
      }
    }
  });
  
  // register all the grunt tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-kss');

  grunt.registerTask('release', [
    'clean:styleguide', // cleanup styleguide
    'clean:dist', // cleanu build
    'clean:release', // cleanup release
    'sass', // parse sass files
    'concat', // merge all the files together to one big file
    'cssmin', // create a minified version
    'clean:singlecssfiles', // cleanup any single css files
    'copy:assets', // copy assets across
    'copy:release', // copy generated css and assets to public release directory
    'copy:styleguideIndex', // copy generated css and assets to public release directory
    'kss', // generate styleguide
    'copy:styleguide' // copy styleguide over to the correct location
    ]);


};
