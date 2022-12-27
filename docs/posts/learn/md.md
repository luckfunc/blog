---
layout: doc
title: md文档学习
---
- helloWorld
- helloWorld
``` md
无序列表 (源码)
- helloWorld
- helloWorld
```
1. helloWorld

    helloWorld

    helloWorld
    
    helloWorld
    
    helloWorld
``` md
有序列表
1. helloWorld //数字.空格   1.(这是一个空格)

    helloWorld // 子项前面是四个空格

    helloWorld
    
    helloWorld
    
    helloWorld

```
> 区块引用
> > 123
> > > 123
> > > > 123
    `console.log('HelloWorld')`

``` md
区块引用
> 区块引用
> > 123
> > > 123
> > > > 123
    `console.log('HelloWorld')`

```

这是我的<a href='https://gogogo7.com' target="_blank" rel="noreferrer">博客</a>

``` md
这是我的[超链接名称](url) 
```

| 表头 | 表头 |
| :----: | :----: |
| HelloWorld| HelloWorld | 
| HelloWorld| HelloWorld | 
| HelloWorld| HelloWorld | 
| HelloWorld| HelloWorld | 

``` md
表格
| 表头 | 表头 | 表头 | 
| --- | --- | --- |
| HelloWorld | HelloWorld | HelloWorld |

居中对齐
| :----: | 
向左对齐
| :---- |
向右对齐
| ----: |

```
### Roll Github Start
![Roll's Github chart](https://ghchart.rshah.org/ddkkkk11)
``` md
![Roll's Github chart](https://ghchart.rshah.org/ddkkkk11)
```


[博客地址][RollBlog]

[RollBlog]: https://gogogo7.com/
``` md
图片引用

[博客地址][变量名]

[变量名]: https://gogogo7.com/

```
# 区块
    这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域
``` md
# title
    //前面有四个空格。这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域
    ,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是
    区域,这里是区域,这里是区域
```

# 分割线
---
语法: ---

# 任务块
- [x] 未完成
- [ ] 已完成
