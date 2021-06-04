module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@auth': './app/container/auth',
          '@home': './app/container/home',
          '@portal': './app/container/portal',
          '@components': './app/components',
          '@routes': './app/routes',
          '@utils': './app/utils',
          '@icons': './app/icons',
        },
      },
    ],
  ],
};
