/* global module */

module.exports = {
    templates: {
        files: [
            'src/views/templates/*.html'
        ],
        tasks: [
            'dot',
            'concat',
            'uglify',
            'ultra-compact'
        ]
    },
    js: {
        files: [
            'src/**/*.js'
        ],
        tasks: [
            'concat',
            'uglify',
            'ultra-compact'
        ]
    },
    html: {
        files: [
            'src/*.html'
        ],
        tasks: [
            'processhtml',
            'ultra-compact',
            'htmlmin'
        ]
    },
    sass: {
        files: [
            'src/**/*.scss'
        ],
        tasks: [
            'sass',
            'cssmin',
            'processhtml',
            'ultra-compact',
            'htmlmin'
        ]
    },
    livereload: {
        files: [
            'www/**/*'
        ],
        options: {
            livereload: true
        }
    }
};