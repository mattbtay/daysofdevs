const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
    entry: "./src/app.js",
    output: {
        filename:"bundle.js",
        path: path.join(__dirname, "docs")
    },
    //mode:"development",
    module: {
        rules: [
        {
            test: /\.js$/,
            use: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
              })
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        template: './src/index.html',
        filename: 'index.html' //relative to root of the application
    }),
    new ExtractTextPlugin("main.css"),
    new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['docs'] }
      })
  ]
}
