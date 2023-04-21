export default {
  title: 'Blog',
  lastUpdated: true,
  themeConfig: {
    siteTitle: "小薛的blog",
    logo: 'https://tucdn.wpon.cn/2023/02/25/8af8ac480bcd7.jpg',
    description: '白天是个演员,晚上是个程序员',
    head:[
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
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
        { text: 'React', link: './posts/notes/React' },
        { text: 'TS', link: './posts/notes/ts' },
        { text: 'JS', link: './posts/notes/js' },
        { text: 'Array', link: './posts/notes/array' },
        { text: 'Npm ', link: './posts/notes/npm' },
        { text: 'TodoList', link: './posts/notes/今年的目标' },
        { text: 'How to Learn', link: './posts/notes/如何快速学习新技术' },
        { text: 'Git提交规范', link: './posts/notes/git提交规范' },
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
