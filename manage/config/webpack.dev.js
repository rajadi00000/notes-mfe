const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJSON = require('../package.json');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3001,
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
      name: 'manage',
      filename: 'remoteEntry.js',
      library: { type: 'var', name: 'manage' },
      exposes: {
        './AddNote': './src/components/AddNote.js',
        './handleDelete': './src/components/handleDelete.js',
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
