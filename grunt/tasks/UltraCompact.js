/* global __dirname, module */

// Permite ignorar a alteração
var IGNORE = true;

var path = require('path');
var chalk = require('chalk');
var maxmin = require('maxmin');

module.exports = function (grunt) {
    grunt.registerMultiTask('ultra-compact', 'Faz a compactação extra dos arquivos css e js', function () {
        if (IGNORE) {
            return;
        }
        var config = this.options();


        var classNameReference = {};
        var jsOriginal = grunt.file.read(config.js);
        var cssOriginal = grunt.file.read(config.css);
        var htmlOriginal = grunt.file.read(config.html);

        var CSS_REGEX = /\.([a-z]+[a-z0-9-_]*)/gi;
        cssOriginal.match(CSS_REGEX).map(function (item) {
            return item.replace(/^\./, '');
        }).filter(function (classname) {
            // Ignora não classes
            return ['css', 'map', 'png', 'jpg', 'Microsoft', 'gradient'].indexOf(classname) < 0;
        }).filter(function (e, i, arr) {
            // unique
            return arr.lastIndexOf(e) === i;
        }).sort(function (a, b) {
            // Classes maiores primeiro
            return b.length - a.length;
        }).forEach(function (classname, i) {
            // Gera a reference
            classNameReference[classname] = (function n2s(n) {
                var s = '';
                if (!n) {
                    s = 'a';
                } else {
                    while (n) {
                        s = String.fromCharCode(97 + n % 26) + s;
                        n = Math.floor(n / 26);
                    }
                }
                return s;
            })(i);
        });

        // Gera o arquivo css compactado
        var cssNew = cssOriginal.replace(CSS_REGEX, function ($0, $1) {
            if (classNameReference[$1]) {
                return '.' + classNameReference[$1];
            }
            return '.' + $1;
        });


        // Gera informação sobre classes não usadas
        var usedClasses = [];
        var jsNew = jsOriginal.replace(/class="([^"]*?)"/gi, function ($0, $1) {
            // Html class=""

            var classesStr = '';

            $1.split(' ').forEach(function (classname) {
                if (classname === '') {
                    return;
                }
                if (classNameReference[classname]) {
                    usedClasses.push(classname);
                    classesStr += classNameReference[classname] + ' ';
                } else {
                    grunt.log.warn('Classe usada e não definida: ' + chalk.yellow(classname));
                    // Remove do arquivo final
                    //classesStr += classname + ' ';
                }
            });

            classesStr = classesStr.replace(/^\s*|\s*$/g, '');
            if (classesStr === '') {
                // Se não houver classe, remove a tag
                return '';
            }

            return 'class="' + classesStr + '"';
        }).replace(/(\$addClass|\$removeClass)\(([^,]*?),\s*(('|")([^'"]*)('|"))/gi, function ($0, $1, $2, $3, $4, $5) {
            // Dom.js, addClass e removeClass

            var classesStr = '';
            $5.split(' ').forEach(function (classname) {
                if (classname === '') {
                    return;
                }
                if (classNameReference[classname]) {
                    classesStr += classNameReference[classname] + ' ';
                } else {
                    grunt.log.warn('Classe usada e não definida: ' + chalk.yellow(classname));
                    classesStr += classname + ' ';
                }
            });

            classesStr = classesStr.replace(/^\s*|\s*$/g, '');
            return $1 + "(" + $2 + ", '" + classesStr + "'";
        }).replace(/\$each\(\s*(('|")([^'"]*)('|"))/gi, function ($0, $1, $2, $3, $4, $5) {
            // Dom.js, each

            var classesStr = $3.replace(CSS_REGEX, function ($0, $1) {
                if (classNameReference[$1]) {
                    return '.' + classNameReference[$1];
                }
                return '.' + $1;
            });

            return "$each('" + classesStr + "'";
        }).replace(/\$on\(([^,]+), ([^,]+), (('|")([^'"]*)('|"))/gi, function ($0, $1, $2, $3, $4, $5) {
            // Dom.js, $on

            var classesStr = $5.replace(CSS_REGEX, function ($0, $1) {
                if (classNameReference[$1]) {
                    return '.' + classNameReference[$1];
                }
                return '.' + $1;
            });

            return "$on(" + $1 + ',' + $2 + ", '" + classesStr + "'";
        }).replace(/('|")(([a-z]+\s+)([^'"]+))('|")\s*:/gi, function ($0, $1, $2, $3, $4, $5) {
            // View.js delegateEvents()

            var classesStr = $4.replace(CSS_REGEX, function ($0, $1) {
                if (classNameReference[$1]) {
                    return '.' + classNameReference[$1];
                }
                return '.' + $1;
            });

            return $1 + $3 + classesStr + $5 + ':';
        });


        var htmlNew = htmlOriginal.replace(/class="([^"]*?)"/gi, function ($0, $1) {
            // Html class=""

            var classesStr = '';

            $1.split(' ').forEach(function (classname) {
                if (classname === '') {
                    return;
                }
                if (classNameReference[classname]) {
                    usedClasses.push(classname);
                    classesStr += classNameReference[classname] + ' ';
                } else {
                    grunt.log.warn('Classe usada e não definida: ' + chalk.yellow(classname));
                    // Remove do arquivo final
                    //classesStr += classname + ' ';
                }
            });

            classesStr = classesStr.replace(/^\s*|\s*$/g, '');
            if (classesStr === '') {
                // Se não houver classe, remove a tag
                return '';
            }

            return 'class="' + classesStr + '"';
        });


        // Log de classes não usadas
        usedClasses.filter(function (e, i, arr) {
            // unique
            return arr.lastIndexOf(e) === i;
        });
        for (var classname in classNameReference) {
            if (usedClasses.indexOf(classname) < 0) {
                grunt.log.warn('Classe definida e não usada: ' + chalk.yellow(classname));
            }
        }


        // Gera cópia dos arquivos
        var pathJsOr = path.join(path.dirname(config.js), path.basename(config.js, '.js') + '.original.js');
        var pathCssOr = path.join(path.dirname(config.css), path.basename(config.css, '.css') + '.original.css');
        var pathHtmlOr = path.join(path.dirname(config.html), path.basename(config.html, '.html') + '.original.html');

        grunt.file.write(pathCssOr, cssOriginal);
        grunt.file.write(pathJsOr, jsOriginal);
        grunt.file.write(pathHtmlOr, htmlOriginal);

        // Cria os arquivos compactados
        grunt.file.write(config.css, cssNew);
        grunt.file.write(config.js, jsNew);
        grunt.file.write(config.html, htmlNew);

        // Detalhamento da compactação dos arquivos
        grunt.log.writeln('File ' + chalk.cyan(config.js) + ' updated: ' + maxmin(jsOriginal, jsNew));
        grunt.log.writeln('File ' + chalk.cyan(config.css) + ' updated: ' + maxmin(cssOriginal, cssNew));
        grunt.log.writeln('File ' + chalk.cyan(config.html) + ' updated: ' + maxmin(htmlOriginal, htmlNew));
    });
};


