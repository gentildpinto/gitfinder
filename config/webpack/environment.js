const { environment } = require('@rails/webpacker')
const webpack = require('webpack');

environment.plugins.append('Provide', new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
}));

function hotfixPostcssLoaderConfig(subloader) {
    const subloaderName = subloader.loader
    if (subloaderName === 'postcss-loader') {
        if (subloader.options.postcssOptions) {
            console.log(
                '\x1b&#91;31m%s\x1b&#91;0m',
                'Remove postcssOptions workaround in config/webpack/environment.js'
            )
        } else {
            subloader.options.postcssOptions = subloader.options.config;
            delete subloader.options.config;
        }
    }
}

environment.loaders.keys().forEach(loaderName => {
    const loader = environment.loaders.get(loaderName);
    loader.use.forEach(hotfixPostcssLoaderConfig);
});

module.exports = environment