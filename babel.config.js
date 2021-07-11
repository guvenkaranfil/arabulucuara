module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@api': './app/api',
          '@auth': './app/container/auth',
          '@home': './app/container/home',
          '@search': './app/container/search',
          '@portal': './app/container/portal',
          '@profile': './app/container/profile',
          '@components': './app/components',
          '@routes': './app/routes',
          '@utils': './app/utils',
          '@helpers': './app/helpers',
          '@icons': './app/icons',
          '@selectors': './app/redux/selectors',
        },
      },
    ],
  ],
};
