var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jpg)$/,
        use: ['url-loader']
      },
      {
        test: /\.html$/,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.hbs$/,
        use: [{
          loader: 'handlebars-loader',
          options: {
            helperDirs: [
              path.resolve('src/templates/helpers')
            ]
          }
        }],
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json"],
    alias: {
      'handlebars': 'handlebars/runtime.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000
  },
  devtool: "cheap-eval-source-map"
};