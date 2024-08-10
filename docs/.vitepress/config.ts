export default {
  title: 'Blog',
  lastUpdated: true,
  themeConfig: {
    siteTitle: "幸运函数",
    logo: '/avatar.png',
    description: '白天是个演员,晚上是个程序员',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/luckfunc'
    }
    ],
    editLink: {
      pattern: 'https://github.com/luckfunc/vitepress/edit/main/docs/:path',
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
      link: 'https://github.com/luckfunc'
    }
  ]
}
//侧标栏配置
function sidebar() {
  return [
    {
      text: '2024TODO',
      items: [
        { text: '2024TODO', link: './posts/2024-todo/todo' },
      ]
    },
    {
      text: 'Notes',
      items: [
        { text: 'React', link: './posts/notes/React' },
        { text: 'TS', link: './posts/notes/ts' },
        { text: 'JS', link: './posts/notes/js' },
        { text: 'Array', link: './posts/notes/array' },
        { text: 'Npm ', link: './posts/notes/npm' },
        { text: 'How to Learn', link: './posts/notes/如何快速学习新技术' },
        { text: 'Git提交规范', link: './posts/notes/git提交规范' },
        { text: '切换IDE的终端为linux', link: './posts/notes/在windows中切换IDE的终端为linux.md' },
        { text: 'gitignore过滤规则', link: './posts/notes/gitignore的作用.md' },
      ]
    },
    {
      text: 'JavaScript',
      items: [
        { text: 'import和export', link: './posts/js/import' }
      ]
    },
    {
      text: 'TypeScript',
      items: [
        { text: 'TypeScript总结', link: './posts/ts/index' },
      ]
    },
    {
      text: 'nodeJs学习',
      items: [
        { text: 'Es Module和commonJs', link: './posts/nodeJs/esm和commonJs' },
        { text: '全局变量&全局API', link: './posts/nodeJs/全局变量和全局API' },
        { text: 'path方法', link: './posts/nodeJs/path' },
        { text: 'os模块', link: './posts/nodeJs/os' },
        { text: 'exec小实践', link: './posts/nodeJs/exec' },
      ]
    },
    {
      text: 'Nginx',
      items: [
        { text: 'Nginx学习', link: './posts/nginx/index' },
      ]
    },
    {
      text: 'WorkFlow',
      items: [
        { text: 'Github Action', link: './posts/workflow/index' }
      ]
    },
    {
      text: 'Markdown',
      items: [
        { text: 'Md Notes', link: './posts/learn/md' },
      ]
    },
  ]
}
