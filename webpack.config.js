const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveFilesWebpackPlugin = require('remove-files-webpack-plugin');

module.exports = {
    entry: {
        'index': './src/build/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.s(c|a)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',

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
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
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