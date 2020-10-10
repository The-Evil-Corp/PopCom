const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    resolve: {
      extensions:['.js']  
    },
    devtool: 'source-map',
    externals: [nodeExternals()],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: '',
        libraryTarget: 'commonjs'
    },
    plugins: [new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { 
                test: /\.module\.scss$/,
                use: [
                    'style-loader', 
                    'css-loader?modules=true', 
                    'sass-loader',
                ],
                include: path.resolve(__dirname, './src')
            }
        ],
    }
}