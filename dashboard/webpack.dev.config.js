const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/dashboard.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: 'http://localhost:9000/'
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname,'./dist'),
        },
        devMiddleware: {
            index: 'dashboard.html',
            writeToDisk: true
        },
        historyApiFallback: {
            index: 'dashboard.html',
        }
    },
    module: {
        rules: [
            {   
                test: /\.txt/,
                type: 'asset/source',
            },
            {   
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', // will sjow by default. don't need to add this 
                // path.join(process.cwd(), 'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'dashboard.html',
            title : 'Dashboard',
        }),
        new ModuleFederationPlugin({
            name: 'App',
            filename: 'remoteEntry.js',
            remotes: {
                HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js',
                KiwiApp: 'KiwiApp@http://localhost:9002/remoteEntry.js'
            },
        })
    ]
}