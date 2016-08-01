const webpack = require('webpack');
var path = require("path");
const vendors = [
    'react',
    'react-dom',
];

module.exports = {
    output: {
        path: path.resolve(__dirname + 'static/lib'),
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname + 'manifest.json'),
            name: '[name]',
            context: __dirname,
        }),
    ],
};