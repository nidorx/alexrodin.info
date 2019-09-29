module.exports = {
    // Limpeza dos diretórios de desenvolvimento
    dev: [
        '.tmp/*',
        './dist/*',
    ],
    // Faz a limpeza dos arquivos para o ambiente de distribuição
    dist: [
        'dist/css/*',
        '!dist/css/style.min.css',
        'dist/js/*',
        '!dist/js/main.min.js',
        'dist/*.html',
        '!dist/index.html'
    ]
};
