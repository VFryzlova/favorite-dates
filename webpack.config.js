const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: ["./src/index.js", "./src/styles/main.scss"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "style.css"
        }),
    ],
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [ 
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader', 
                    'sass-loader' 
                ]
            },
            {
              test: /\.(png|jpe?g|svg|gif)$/,
              type: 'asset/resource'
            }
        ]
    },
}