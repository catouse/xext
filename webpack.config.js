const path = require('path');
const pkg = require('./package.json');

module.exports = function(env, argv) {
    const isDevelopment = !env.production;
    return {
        mode: env.production ? 'production' : 'development',

        entry: {
            index: './src/index.ts',
            debug: './src/debug.ts',
            lang: './src/lang.ts',
            'node-modules': './src/node-modules.ts',
            react: './src/react.ts',
            components: './src/components.ts',
            utils: './src/utils.ts',
            platform: './src/platform.ts',
            app: './src/app.ts',
            views: './src/views.ts',
        },
        output: {
            path: path.resolve(__dirname, 'lib'),
            filename: '[name].js',
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
