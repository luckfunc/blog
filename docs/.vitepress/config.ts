export default {
  title: 'Blog',
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Roll's blog",
    logo: 'https://tucdn.wpon.cn/2023/01/08/84a4b2ff52a8d.jpg',
    description: '白天是个演员,晚上是个程序员',
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/ddkkkk11'
    }
    ],
    editLink: {
      pattern: 'https://github.com/ddkkkk11/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }

  },
}
//导航栏配置
function nav() {
  return [
    {
      text: 'Page',
      link: '/page'
    },
    {
      text: 'Home',
      link: '/index'
    },
    {
      text: 'Github',
      link: 'https://github.com/ddkkkk11'
    }
  ]
}
//侧标栏配置
function sidebar() {
  return [
    {
      text: 'Notes',
      items: [
        { text: 'TS', link: './posts/notes/ts' },
        { text: 'JS', link: './posts/notes/js' },
        { text: 'Array', link: './posts/notes/array' },
        { text: 'TodoList', link: './posts/notes/今年的目标' },
        { text: 'How to Learn', link: './posts/notes/如何快速学习新技术' },
      ]
    },
    {
      text: 'Markdown',
      items: [
        { text: 'Md Notes', link: './posts/learn/md' },
      ]
    },
    {
      text: '学习中遇到的问题',
      items: [
        { text: '一些遇到的问题', link: './posts/studynotes/遇到的问题.md' },
      ]
    },

  ]
}
