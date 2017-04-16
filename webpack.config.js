var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/,
        use: ['url-loader']
      },
      {
        test: /\.html$/,
        use: ['file-loader?name=[name].[ext]']
      }
    ]
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000
  },
  devtool: "cheap-eval-source-map"
};