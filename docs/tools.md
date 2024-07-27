---
layout: doc
title: 'Tools'
---
# 一些工具
## 博客相关
- [免费快速的图床](https://tucdn.wpon.cn/)
## 表格组件
- [gridmanager组件官网](https://gridmanager.lovejavascript.com/api/index.html)
## 插画图
- [插画图地址](https://undraw.co/illustrations)
## css布局小样式
- [地址](https://uiverse.io/)

## ip地址测试
- [地址](https://ip.skk.moe/)

## 生成树结构小工具
- [tree-node-cli](https://github.com/yangshun/tree-node-cli#readme)
![tree](https://tucdn.wpon.cn/2023/02/22/2e7d7cbb52fc3.png)

看起来目录是不是清晰很多?
```markdown
首先安装一下这个小工具
npm install -g tree-node-cli
或者
npm install --global tree-node-cli
```

```markdown
使用git bash打开命令行
tree -h 查看一些tree命令的参数
```
```markdown
tree -L n 显示项目的层级。n表示层级数。
如果你想显示两层的目录结构
tree -L 2即可
如果你过滤掉不想显示的目录,可以使用这个命令
tree -I pattern 
比如你想过滤掉node-modules和public这个目录
tree -I "node_modules|public"
```
```markdown
如果既想显示两层的目录结构,又想过滤掉如node_modules这样的文件
tree -L 2 -I "node_modules | public"
```
```markdown
最后想输出到readme.md上可以
tree -L 2 -I "node_modules" > readme.md
就可以得到上面图片显示的结果啦
```
## 常用字体
  - [Cascadia Code](https://github.com/microsoft/cascadia-code)
  - [MonoLisa](https://github.com/Eason0210/Monolisa/blob/master/MonoLisa-Regular.ttf)
  - [Input Mono](https://input.djr.com/)
  - 配合使用
    1. 先下载[FiraCode](https://github.com/tonsky/FiraCode)
    2. 在下载[Operator Mono](https://github.com/beichensky/Font) 非官网
    

## 前端官网参考
  - 国内
    - [Ant Design](https://landing.ant.design/index-cn)
  - 国外
    - [Wix](https://www.wix.com/)
    - [webflow](https://webflow.com/) 支持更多自定义
## Bento grid design设计风格网站
  - [Bento Grids](https://bentogrids.com/)
  ### 预览
  ![Bento Grids](./public/bento-design-preview.png)
