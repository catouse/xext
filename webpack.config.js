const path = require('path');
const pkg = require('./package.json');

module.exports = function(env, argv) {
    const isDevelopment = env.production;
    return {
        mode: env.production ? 'production' : 'development',

        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            library: pkg.name,
            libraryTarget: "commonjs2"
        },

        target: 'electron-renderer',

        // Enable sourcemaps for debugging webpack's output.
        devtool: isDevelopment ? 'inline-source-map' : 'source-map',

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: ['.ts', '.tsx', '.js', '.json'],

            modules: [
                path.join(__dirname, './src'),
                'node_modules'
            ]
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'awesome-typescript-loader',
                    exclude: /node_modules/
                }
            ]
        }
    }
};
