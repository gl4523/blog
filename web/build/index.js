const webpack = require('webpack')
module.exports = isProd => {
    let rules
    let plugins 
    let publicPath
    if (isProd) {
        publicPath = 'https://gl4523.github.io/blog'
        rules = [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.s[c|a]ss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        }]
    } else {
        publicPath = '/'
        plugins = [
            new webpack.HotModuleReplacementPlugin()
        ]

        rules = [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.s[c|a]ss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        }]
    }

    return {rules, plugins, publicPath}
}