/* global module, require */

'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask('package', 'Copy package.json', function () {
        var packageJSON = require('./package');

        delete packageJSON.devDependencies;
        packageJSON.scripts = {
            "start": "npm install && node ./server.js"
        };

        grunt.file.write('dist/package.json', JSON.stringify(packageJSON, null, 4));
    });

    // Load grunt tasks automatically
    require('load-grunt-config')(grunt, {
        //init: true
    });
};
