/*global module,grunt,require, console*/
var path = require('path');
var connect = require('connect');
// var connectAmd = require('tools/connectAmd');

module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        commonJsToAmd: {
            dev: {
                files: [
                    {
                        expand: true, // Enable dynamic expansion.
                        cwd: 'app', // Src matches are relative to this path.
                        src: ['**/*.js'], // Actual pattern(s) to match.
                    }
                ]
            }
        }

    });

    grunt.registerTask('commonJsToAmd', 'CommonJS to AMD style on the fly', function() {
        var done = this.async();

        grunt.log.writeln('CommonJS to AMD transformation running...');

        var app = connect()
            .use(connect.static('app'))
            // .use(connectAmd.process)
            .listen(8844);

        // var response = 'define(function(require, exports, module) {' + grunt.file.read(...) + '});';

    });

    // Default task(s).
    grunt.registerTask('default', ['commonJsToAmd']);

};