const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "main.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: false,
        host: 'localhost',
        port: 8080
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist']
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    {
                        from: path.join(__dirname, '../src/modules/handle-title.js'),
                        to: path.resolve(__dirname, '../dist')
                    }

                ]
            }
        )
    ]
}
