const path =require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    entry:"./src/main.ts",
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:'bundle.js'
    },
    resolve: {
        extensions:[".ts",".js",".cjs",".json"]
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                loader:'ts-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}