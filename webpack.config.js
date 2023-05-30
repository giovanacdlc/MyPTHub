const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
// import MiniCssExtractPlugin from "mini-css-extract-plugin";


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/', 
        filename: 'bundle.js'
    }, 

    plugins: [
        new HTMLWebpackPlugin ({
            template: './src/index.html'
        }), 
        // new MiniCssExtractPlugin({
        //     filename: "[name].[contenthash].css"
        // })
    ],

    module: {
        rules: [
            {
                test: /.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                // exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
                // use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    }, 
    devServer: {
        historyApiFallback: true,
        static: {
            publicPath: '/build',

            directory: path.resolve(__dirname, '/build'),
            // directory: path.join(__dirname, "client", "index.js"),
            // directory: path.resolve(__dirname, "./client/index.js")
            // directory: path.resolve(__dirname, "client/index.js")

        },
        // compress: true,
        port: 8080,
        proxy: {
            '/api': 'http://localhost:3000/',
            // '/signup': 'http://localhost:3000',
            // '/login': 'http://localhost:3000',

        }
        
    }
    // devServer: {
    //     host: 'localhost',
    //     port: 8080,
    //     // enable HMR on the devServer
    //     hot: true,
    //     // fallback to root for other urls
    //     historyApiFallback: true,
    
    //     static: {
    //       // match the output path
    //       directory: path.resolve(__dirname, 'dist'),
    //       // match the output 'publicPath'
    //       publicPath: '/',
    //     },
    //     // proxy: {
    //     //     '/api/**': {
    //     //       target: 'http://localhost:3000/',
    //     //       secure: false,
    //     //     },
    //     //     '/assets/**': {
    //     //       target: 'http://localhost:3000/',
    //     //       secure: false,
    //     //     },
    //     //   },
    //     // },
    // // targert: 'web', 
    // // devServer: {
    // //     static: {
    // //         publicPath: '/build',
    // //         directory: path.resolve(__dirname, 'build')
    // //     },
    //     proxy: {
    //         '/api': 'http://localhost:3000'
    //     }
    // }
}

// "start": "webpack-dev-server --mode development --open --hot",
// "build": "webpack --mode production",
// "server": "nodemon backend/server.js"