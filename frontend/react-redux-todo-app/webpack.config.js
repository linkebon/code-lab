const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

let outputConf = {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle_todoapp.js'
};
if (process.env.NODE_ENV === 'production') {
    outputConf.path = path.join(__dirname, '../../public')
}

const config = {
    entry: [
        './src/main.js',
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "less-loader", options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'

                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader", options: {
                        paths: [
                            path.resolve(__dirname, "node_modules")
                        ]
                    }
                }]
            },
            {
                test: /\.(svg|png|jpe?g|gif|eot|otf|woff2?|ttf)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader?$!expose-loader?jQuery"
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css'],
    },
    output: outputConf,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true,
        watchContentBase: true
    }
};
if (process.env.NODE_ENV === 'production') {
    config.devtool = "cheap-module-source-map"
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
        new ExtractTextPlugin({
            filename: 'stylesheets/bundle_todoapp.css',
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.AggressiveMergingPlugin({
            minSizeReduce: 1,
            moveToParents: true

        })
    )

} else {
    config.devtool = "cheap-module-eval-source-map"
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
        new ExtractTextPlugin({disable: true})
    )
}

module.exports = config;