const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJSON = require('../package.json');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3003,
    historyApiFallback: {
      index: 'index.html',
    },
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'list',
      filename: 'remoteEntry.js',
      exposes: {
        './ListNotes': './src/bootstrap.js',
      },
      remotes: {
        manage: 'manage@http://localhost:3001/remoteEntry.js',
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
