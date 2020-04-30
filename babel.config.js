module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            scenes: './src/scenes', 
            theme: './src/theme',
            utils: './src/utils',
            modules: './src/modules'
          },
        },
      ],
    ],
  };
};
