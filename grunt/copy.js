/* global module */

module.exports = {
    options: {},
    images: {
        expand: true,
        cwd: 'src/img/',
        src: '**',
        dest: 'dist/public/img/'
    },
    js: {
        expand: true,
        src: '**',
        cwd: '.tmp/js/',
        dest: 'dist/public/js/'
    },
    css: {
        expand: true,
        src: '**',
        cwd: '.tmp/css/',
        dest: 'dist/public/css/'
    },
    html: {
        expand: true,
        src: '*.html',
        cwd: '.tmp/',
        dest: 'dist/public/'
    },
    server: {
        expand: true,
        src: 'server.js',
        cwd: '.',
        dest: 'dist/'
    }
};
