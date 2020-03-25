require('@babel/register')({ presets: ['@babel/preset-env'] });

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const helpers = require('./helpers.js');

const nodeModules = helpers.root('node_modules');
const src = helpers.root('src');

module.exports = devMode => {
    return {
        entry: {
            main: './Entry/'
        },
        output: {
            filename: devMode ? '[name].js' : '[name]-[hash].js',
            publicPath: devMode ? 'http://localhost:8081/dist' : './',
        },
        resolve: {
            modules: [nodeModules],
            extensions: ['*', '.js', '.jsx', '.less']
        },
        module: {
            rules: [
                 {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-react', '@babel/preset-env'],
                                sourceMap: devMode
                            }
                        }
                    ],
                    include: [src]
                },
                {
                    test: /\.less$/,
                    include: [src],
                    exclude: /module\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        ...(devMode ? ['cache-loader'] : []),
                        {
                            loader: 'css-loader',
                            options: { modules: 'global' }
                        },
                        'less-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    include: /module\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        ...(devMode ? ['cache-loader'] : []),
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: devMode,
                                localsConvention: 'dashes',
                                modules: {
                                    localIdentName: devMode ? '[name]__[local]_[hash:base64:4]' : '[hash:base64]'
                                }
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                keepQuery: true
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    exclude: /\.less$/,
                    loader: 'file-loader'
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: devMode ? 'main.css' : '[name]-[hash].css',
                orderWarning: false
            }),
            new CaseSensitivePathsPlugin(),
            new HtmlWebpackPlugin({
                inject: true,
                template: './src/static/templates/index.html',
                filename: 'index.html',
                files: {
                    scripts: devMode ? 'http://localhost:8081/dist/main.js' : 'main-[hash].js',
                    styles: devMode ? 'http://localhost:8081/dist/main.css' : 'main-[hash].css'
                }
            })
        ]
    };
};
