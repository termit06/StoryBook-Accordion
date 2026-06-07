/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config: any) {
    config.base = '/osk-ui-rt-docs/';

    // ПОЛНОСТЬЮ ОТКЛЮЧАЕМ CSS MODULES
    config.css = {
      modules: false, // <-- ключевой момент! отключаем модули
      preprocessorOptions: {
        scss: {
          includePaths: ['src/styles'],
        },
      },
    };

    // Добавляем кастомный плагин, который принудительно компилирует .scss в .css
    config.plugins.push({
      name: 'force-scss-compile',
      transform(code: any, id: any) {
        if (id.endsWith('.module.scss')) {
          // Здесь можно логировать, если нужно
          console.log('🟢 Компилируем:', id);
        }
      },
    });

    // Убираем хеши, чтобы файлы назывались просто Button.css
    config.build = {
      ...config.build,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[ext]',
        },
      },
    };

    return config;
  },
};

export default config;