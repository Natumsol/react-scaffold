/**
 * 参考资料：https://zhuanlan.zhihu.com/p/21748318?refer=starkwang 
 */
var webpack = require('webpack');
var path = require("path");
module.exports = {
    entry: './index.jsx',
    output: {
        path: path.resolve(__dirname + "/build/js"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'] // tell babel to use preset
                }
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.resolve(__dirname),
            manifest: require('./static/manifest.json'),
        })
    ]
}