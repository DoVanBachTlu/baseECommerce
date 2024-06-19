module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json',
        ],
        // NOTE:
        // re-build app when config new aliases path
        // new aliases path inside here and tsconfig.json
        // root: ['./'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@theme': './src/theme',
          '@helper': './src/helper',
          '@modules': './src/modules',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screen': './src/screen',
          '@utils': './src/utils',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
