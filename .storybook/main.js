module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('babel-preset-react-app')],
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            shouldExtractLiteralValuesFromEnum: true, // 只列出用户自定义属性
            propFilter: (prop) => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }
              return true
            },
          },
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
}
