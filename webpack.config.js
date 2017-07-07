const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [ './src/app.js', './src/main.scss'],
    output: {
        filename: 'out.js',
        path: path.join(__dirname, './dist/')
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.html$/,
                loaders: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css-loader'])
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader','resolve-url-loader', 'sass-loader'])
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.json$/,
                loaders: 'file-loader?name=i18n/[name].[ext]'
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};