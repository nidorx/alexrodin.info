/* global module */

module.exports = {
    templates: {
        files: [
            'src/views/templates/*.html'
        ],
        tasks: [
            'dot',
            'concat',
            'uglify'
        ]
    },
    js: {
        files: [
            'src/**/*.js'
        ],
        tasks: [
            'concat',
            'uglify'
        ]
    },
    html: {
        files: [
            'src/*.html'
        ],
        tasks: [
            'processhtml',
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
            'htmlmin'
        ]
    },
    livereload: {
        files: [
            '.tmp/**/*'
        ],
        options: {
            livereload: true
        }
    }
};
