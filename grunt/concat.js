/* global module */

module.exports = {
    options: {
        sourceMap: true
    },
    /**
     * Scripts da aplicação
     *
     */
    js: {
        src: [
            'src/js/*.js',
            '!src/js/*.min.js'
        ],
        dest: '.tmp/js/main.js'
    }
};
