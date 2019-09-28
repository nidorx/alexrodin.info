/* global module */

module.exports = {
    options: {},
    images: {
        expand: true,
        cwd: 'src/img/',
        src: '**',
        dest: 'dist/img/'
    },
    js: {
        expand: true,
        src: '**',
        cwd: '.tmp/js/',
        dest: 'dist/js/'
    },
    css: {
        expand: true,
        src: '**',
        cwd: '.tmp/css/',
        dest: 'dist/css/'
    },
    html: {
        expand: true,
        src: '*.html',
        cwd: '.tmp/',
        dest: 'dist/'
    }
};