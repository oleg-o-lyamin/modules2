
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'media/images/',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                        }
                    }
                ],

            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media/audio/',
                }
            },
            {
                test: /\.mp4$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media/videos/',
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, './src/index.html') }),
        new MiniCssExtractPlugin()
    ],
};