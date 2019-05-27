const htmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('path')
const isProd = process.env.NODE_ENV === 'production'
const {rules = [], plugins = []} = require('./build')(isProd)
module.exports = {
    entry: {
        main: './src/main.tsx'
    },
    output: {
        path: resolve(__dirname, '..', 'docs'),
        publicPath: '/',
        filename: 'js/[name]_[hash:6].js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'babel-loader'
        }, ...rules]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        ...plugins
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devtool: !isProd && 'inline-source-map',
    devServer: {
        hot: true,
        open: true,
        contentBase: resolve(__dirname, '..', 'docs'),
        port: 8089,
        compress: true,
        overlay: true,
        inline: true
    },
    mode: process.env.NODE_ENV
}