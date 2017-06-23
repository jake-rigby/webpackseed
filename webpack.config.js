
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'wp-test.bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false }]
                    ]
                }
            }],

        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]                
        }]
    }
}