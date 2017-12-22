module.exports = {
    entry: './src/main.js',
    output: {
        filename: '../../public/bundle_tutorial1.js'
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