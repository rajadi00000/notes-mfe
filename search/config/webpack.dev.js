const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJSON = require('../package.json');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3002,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'search',
      filename: 'remoteEntry.js',
      exposes: {
        './SearchBar': './src/bootstrap.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: packageJSON.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: packageJSON.dependencies['react-dom'],
        },
        '@emotion/react': {
          singleton: true,
          requiredVersion: packageJSON.dependencies['@emotion/react'],
        },
      },
    }),
  ],
};
