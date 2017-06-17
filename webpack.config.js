const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./src/main.scss', './src/app.js'],
    output: {
        filename: 'dist/out.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['style-loader', 'css-loader'])
            },
            {
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader','resolve-url-loader', 'sass-loader'])
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader?publicPath=../&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                loader: 'file-loader?publicPath=../&name=dist/images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'dist/style.css',
            allChunks: true
        })
    ]
};