module.exports = {
  entry: __dirname + '/client/components/',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: 'node_modules',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
