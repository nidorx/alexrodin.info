const sass = require('node-sass');

module.exports = {
   options: {
      implementation: sass,
      sourceMap: true
   },
   all: {
      files: {
         '.tmp/css/style.css': 'src/sass/main.scss'
      }
   }
};
