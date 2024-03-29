
const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader',]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css'],
        fallback: {
            fs: false,
            child_process: false,
            readline: false,
            crypto: false,
        },
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: path.resolve(__dirname, 'public', 'index.html'),
    //         filename: 'index.html',
    //         inject: 'body',
    //     }),
    // ],
    // devServer: {
    //     hot: true,
    //     open: true,
    //     historyApiFallback: true,
    // },
};
