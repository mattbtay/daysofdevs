const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/app.js",
    output: {
        filename:"bundle.js",
        path: path.join(__dirname, "dist")
    },
    mode:"development",
    module: {
        rules: [
        {
            test: /\.js$/,
            use: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        template: './src/index.html',
        filename: 'index.html' //relative to root of the application
    })
  ]
}
