'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Changelog generator
    changelog: {
      options: {
        from: '8a791f393193f63ecf8aca07ed7cdd4f6bbeab71',
        dest: 'CHANGELOG.md',
        versionFile: 'package.json'
      }
    }
  });

  grunt.registerTask('default', [
    'changelog'
  ]);
};