import graphql from 'vite-plugin-graphql-loader';

export default {
  // Replace your-framework with the framework you are using (e.g., react-vite, vue3-vite)
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.mdx', '../*/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...(config.plugins ?? []), graphql()],
    };
  },
};