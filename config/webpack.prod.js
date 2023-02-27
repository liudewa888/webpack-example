const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // 入口
    entry: './src/main.js',
    // 出口
    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'public/js/index.js',
        clean: true
    },
    // 模块
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: ['babel-loader']
            },
            {
                test: /\.ts$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {

                        }
                    },
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../public/index.html')
        }),
        // 提取css成单独文件
        new MiniCssExtractPlugin({
            filename: "public/css/index.css"
        })
    ],
    // 模式
    mode: 'production',
}