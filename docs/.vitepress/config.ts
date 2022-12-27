export default {
  title: 'Blog',
  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  themeConfig: {
    siteTitle: "Roll's blog",
    logo: '/logo.jpg',
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
      ]
    },
    {
      text: 'Markdown',
      items: [
        { text: 'Md Notes', link: './posts/learn/md' },
      ]
    }
  ]
}
