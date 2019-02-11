const webpack = require('webpack');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const nodeExternals = require('webpack-node-externals');

const CLIENT_APP_DIR = path.resolve(__dirname, 'client/app');
const CLIENT_BUILD_DIR = path.resolve(__dirname, 'client/public');
const clientConfig = {
    entry: CLIENT_APP_DIR + '/app.jsx',
    mode: 'development',
    output: {
        path: CLIENT_BUILD_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        LiveReloadPlugin
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: CLIENT_APP_DIR,
                use:[{
                    loader: 'babel-loader',
                    options: {sourceMap: true}
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {sourceMap: true}
                }, {
                    loader: "resolve-url-loader",
                    options: {sourceMap: true}
                }, {
                    loader: "sass-loader",
                    options: {sourceMap: true}
                }]
            }
        ]
    }
};

const SERVER_APP_DIR = path.resolve(__dirname, 'server');
const SERVER_BUILD_DIR = __dirname;
const serverConfig = {
    target: 'node',
    mode: 'development',
    externals: [nodeExternals()],
    entry: SERVER_APP_DIR + '/app.ts',
    output: {
        path: SERVER_BUILD_DIR,
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: [/node_modules/, /client/],
            use: [{
                loader: 'ts-loader'
            }]
        }]
    }
};

module.exports = [clientConfig, serverConfig];