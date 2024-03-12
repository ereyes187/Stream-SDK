module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin', // Reanimated plugin has to be listed last.
    ],
    // plugins: [require.resolve('expo-router/babel'), 'react-native-reanimated/plugin'],
  };
};
