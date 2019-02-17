const path = require('path');

module.exports = {
  entry: './assets/js/application.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};