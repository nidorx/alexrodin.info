/* global module, require */

'use strict';

module.exports = function (grunt) {

    // Extra compact css classes
    require('./grunt/tasks/UltraCompact')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-config')(grunt, {
        //init: true
    });
};
