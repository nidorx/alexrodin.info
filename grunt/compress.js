module.exports = {
    dist: {
        options: {
            archive: './dist/alexrodin.info.tar.gz',
            mode: 'tgz'
        },
        files: [
            {
                expand: true,
                cwd: 'dist',
                src: ['**/*'],
                dest: '.'
            }
        ]
    }
};
