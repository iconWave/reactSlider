let path = require('path');
let HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: path.resolve('./src/index.js'),
    output:{
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ],
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader'
            }
        ]
    }
};