import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: '开发者文档',
    logo: 'https://cdn.jsdelivr.net/gh/ye-guo/Images/images/ygIcon512.png',
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/ye-guo/yeguo-api-docs',
    },
    lastUpdated: true,
    footer: 'Copyright © 2024 野果'
  },
  favicons: [
    'https://cdn.jsdelivr.net/gh/ye-guo/Images/images/ygIcon512.png',
  ],
  locales: [{ id: 'zh-CN', name: '中文' }],
  theme: { '@c-primary': '#fca92f' },
});
