const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.[tj]s[x]'],
    addons: ['@storybook/addon-knobs/register'],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.module\.scss$/,
            use: ['style-loader', 'css-loader?modules=true', 'sass-loader'],
            include: path.resolve(__dirname, '../src'),
        });

        return config;
    }
}