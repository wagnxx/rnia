module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@/utils': './src/utils',
          '@/styles': './src/styles',
          '@/actions': './src/actions',
          '@/components': './src/components',
          '@/services': './src/services',
        },
      },
    ],
  ],
};
