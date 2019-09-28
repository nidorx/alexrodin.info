/* global require, module */

var CONTEXT = '/srv';

module.exports = {
    options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
    },
    livereload: {
        options: {
            open: true,
            base: [
                '.tmp/',
                'src/'
            ],
            middleware: function (connect, options) {
                if (!Array.isArray(options.base)) {
                    options.base = [options.base];
                }
                return [
                    require('grunt-connect-proxy/lib/utils').proxyRequest,
                    require('serve-static')(options.base[0]),
                    require('serve-static')(options.base[1]),
                    function (req, res, next) {
                        var isProxyRequest = req.url.lastIndexOf(CONTEXT, 0) === 0;
                        if (isProxyRequest) {
                            // we intercept the writeHead function, so that we can exchange headers just before they are written
                            var oldWriteHead = res.writeHead;
                            res.writeHead = function () {
                                var cookie = res.getHeader('Set-Cookie');
                                if (cookie) {
                                    res.setHeader('Set-Cookie', cookie.map(function (item) {
                                        return item;
                                    }));
                                }
                                oldWriteHead.apply(res, arguments);
                            };
                        }
                        next();
                    }
                ];
            }
        }
    }
};
