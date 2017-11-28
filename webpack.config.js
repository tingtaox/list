var ExtractTextPlugin = require('extract-text-webpack-plugin');

// the parameter in ExtractTextPlugin specifies the output filename
var extractSass = new ExtractTextPlugin("bundle.css");

module.exports = {
    entry: ["./src/index.tsx", "./scss/main.scss"],
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        // wepack-dev-server watches changes and serve static files in the folder. modified bundle is served from memory at the relative path specified in publicPath
        publicPath: "/assets/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.scss$/,
                // *.scss | sass-loader | css-loader | style-loader -> output file
                use: extractSass.extract({
                    use: [
                        { loader: "css-loader", options: { sourceMap: true } },
                        { loader: "sass-loader", options: { sourceMap: true } }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },

    watch: true,

    devServer: {
        port: 9000,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                secure: false,
                pathRewrite: { "^/api": "" }
            }
        },
        inline: true
    },

    plugins: [
        extractSass
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};