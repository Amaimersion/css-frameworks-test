const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveFilesWebpackPlugin = require('remove-files-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        // libs.
        'libs/normalize': './src/build/libs/normalize.js',
        // pages.
        'index': './src/build/pages/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
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
    plugins: [
        new RemoveFilesWebpackPlugin({
            before: {
                root: __dirname,
                include: ['dist']
            }
        }),
        new CopyWebpackPlugin([{
            from: './src/assets',
            to: 'assets'
        }]),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/pug/index/index.pug',
            inject: false
        }),
        new HTMLWebpackPlugin({
            filename: 'normalize.html',
            template: './src/pug/normalize/normalize.pug',
            inject: false
        }),
    ],
    resolve: {
        alias: {
            '@pug': path.resolve(__dirname, 'src', 'pug'),
            '@scss': path.resolve(__dirname, 'src', 'scss'),
            '@ts': path.resolve(__dirname, 'src', 'ts')
        }
    }
};
