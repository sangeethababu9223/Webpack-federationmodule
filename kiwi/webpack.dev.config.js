const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/kiwi.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: '/static/'
    },
    mode: 'development',
    devServer: {
        port: 9002,
        static: {
            directory: path.resolve(__dirname,'./dist'),
        },
        devMiddleware: {
            index: 'kiwi.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {   
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                }
            },
            {   
                test: /\.txt/,
                type: 'asset/source',
            },
            {   
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader' 
                ]
            },
            {   
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
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
            filename: 'kiwi.html',
            title : 'Kiwi',
            template: 'src/page-template.hbs',
            description: 'Kiwi',
            minify: false
        }),
        new ModuleFederationPlugin({
            name: 'KiwiApp',
            remotes: {
                HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js'
            }
        })
    ]
}