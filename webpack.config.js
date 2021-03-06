var path = require('path');

module.exports = {
    entry: {
        'send-sms': './src/send-sms/send-sms.plugin.ts'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: path.resolve(__dirname, "node_modules")
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].plugin.js',
        library: "publishActivities",
        libraryTarget: "umd"
    },
	devtool: 'source-map',
    externals: [
        "@sitecore/ma-core",
        "@angular/core",
        "@ngx-translate/core"
    ]
};