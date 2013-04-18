/*global module,grunt,require, console*/
var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    requirejs: {
        dir: 'build',
          appDir: 'src',
          baseUrl: 'js',
          paths: {
              jquery: '../vendor/jquery',
              ember: '../vendor/ember'
          },
          pragmas: {
              doExclude: true
          },
          skipModuleInsertion: false,
          optimizeAllPluginResources: true,
          findNestedDependencies: true
    }

  });

  grunt.loadNpmTasks('grunt-requirejs');

  // Default task(s).
  grunt.registerTask('default', ['requirejs']);

};