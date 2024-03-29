const { path } = require('@vuepress/utils')

module.exports = {
  base: '/',
  lang: 'zh-CN',
  title: '前端日常积累',
  description: '记录点滴',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },],
  ],
  themeConfig: {
    home: '/',
    repo: 'https://github.com/zehuichan',
    repoLabel: 'github',
    navbar: [
      { text: '首页', link: '/' },
      { text: '基础', link: '/base/' },
      { text: '关于我', link: '/about/' },
    ],
    sidebar: {
      '/base/': [
        { text: 'Html', link: '/base/html.md' },
        { text: 'Css', link: '/base/css.md' },
        { text: 'JavaScript', link: '/base/js.md' },
        { text: '计算机网络', link: '/base/计算机网络.md' },
      ],
    },
    sidebarDepth: 2,
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    contributors: true,
    contributorsText: '贡献者'
  },
  plugins: [
    ['@vuepress/plugin-search'],
    ['@vuepress/plugin-pwa'],
    ['@vuepress/plugin-pwa-popup'],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ]
  ]
}
