const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images',
          publicPath: './images'
        },
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'assets/app.css',
    }),
  ]
};