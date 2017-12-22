module.exports = {
    entry: './src/main.js',
    output: {
        filename: '../../public/bundle_todoapp.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 3000
    }
};