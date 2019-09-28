var express = require('express');
var compression = require('compression');

var app = express();

// Gzip
app.use(compression());

// Serve static files from `dist` dir.
app.use(express.static('public', {
    maxAge: '1y'
}));

var PORT = 3060;

app.listen(PORT, function () {
    console.log('Server listening on port ' + PORT);
});
