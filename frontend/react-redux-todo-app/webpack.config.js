module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle_todoapp.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(svg|png|jpe?g|gif|eot|otf|woff2?|ttf)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader?$!expose-loader?jQuery"
            }
        ]
    },
    devServer: {
        port: 3000
    }
};