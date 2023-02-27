const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口
    entry: './src/main.js',
    // 出口
    output: {
        // path: resolve(__dirname, 'dist'),
        filename: 'public/js/index.js',
        // clean: true
    },
    // 模块
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
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
        })
    ],
    // 模式
    mode: 'development',
    // 开发服务器
    devServer: {
        host: '127.0.0.1',
        port: '8008',
        open: true
    }
}