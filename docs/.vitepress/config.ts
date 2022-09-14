const { demoBlockPlugin } = require('vitepress-theme-demoblock')

const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [
        { text: 'Button 按钮', link: '/components/button/' },
      ]
    }
  ]
}
const config = {
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  }
}
export default config