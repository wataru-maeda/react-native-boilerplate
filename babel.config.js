module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@views': './src/views',
            '@hooks': './src/hooks',
            '@navigator': './src/navigator',
            '@utils': './src/utils',
            '@theme': './src/theme',
            '@modules': './src/modules',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
