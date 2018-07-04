const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        'index': './src/build/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s(c|a)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HTMLWebpackPlugin({
            title: 'Index',
            filename: 'dist/index.html',
            template: './src/pug/index.pug'
        })
    ],
    resolve: {
        alias: {
            '@pug': path.resolve(__dirname, 'src', 'pug'),
            '@scss': path.resolve(__dirname, 'src', 'scss'),
            '@ts': path.resolve(__dirname, 'src', 'ts')
        }
    }
};