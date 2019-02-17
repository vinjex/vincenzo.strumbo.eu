const path = require('path');

module.exports = {
  entry: './app/assets/js/application.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};