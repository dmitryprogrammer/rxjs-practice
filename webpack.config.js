const webpack = require('webpack');

const config = {
    entry: ["babel-polyfill", "./src/js/app.js"],
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/bundles`
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
            {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'}
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        contentBase: `${__dirname}`,
        watchOptions: {
            poll: true
        },
        hot: true,
        inline: true,
        progress: true,
        publicPath: ""
    }
};

module.exports = config;