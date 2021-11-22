const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const HtmlWebackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: { directory: path.resolve(__dirname, 'dist') },
        port: 8080,
        open: true,
        hot: true,
        liveReload: true,
        historyApiFallback: true

    },
    resolve: {
        fallback: {
            "http": require.resolve("stream-http")
        }
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(svg|png|ico|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
            {
                test: /\.js$/, exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ["@babel/plugin-transform-runtime",
                                {
                                    "regenerator": true
                                }
                            ]
                        ]
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebackPlugin({
            title: 'webpack-dev-server',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html')
        }),
        new NodePolyfillPlugin()
    ],
}