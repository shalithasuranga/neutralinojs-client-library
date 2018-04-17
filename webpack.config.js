var path = require('path');

module.exports = {
  entry: {
            index : './src/index.js'
        },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Neutralino',
    libraryTarget: 'var'
  }
};