---
layout: doc
title: md文档学习
---
# Md学习记录
## 无序列表
- helloWorld
- helloWorld
``` md
无序列表 (源码)
- helloWorld!
- helloWorld!
```
## 有序列表
1. helloWorld!
2. helloWorld!
``` md
有序列表
1. helloWorld //数字.空格   1.(这是一个空格)

    helloWorld // 子项前面是四个空格

    helloWorld
    
    helloWorld
    
    helloWorld
```
## 区块引用

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
## 超链接
这是我的<a href='https://luckfunc.com' target="_blank" rel="noreferrer">博客</a>

``` md
这是我的[超链接名称](url) 
```

| 表头 | 表头 |
| :----: | :----: |
| HelloWorld| HelloWorld | 
| HelloWorld| HelloWorld | 
| HelloWorld| HelloWorld | 
| HelloWorld| HelloWorld | 
## 表格
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
## 引用图片
### Roll Github Start
![Roll's Github chart](https://ghchart.rshah.org/luckfunc)
``` md
![Roll's Github chart](https://ghchart.rshah.org/luckfunc)
```


[博客地址][RollBlog]

[RollBlog]: https://luckfunc.com/
``` md
图片引用

[博客地址][变量名]

[变量名]: https://luckfunc.com/

```
## 区块
    这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域
``` md
# title
    //前面有四个空格。这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域
    ,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是
    区域,这里是区域,这里是区域
```

## 分割线
---
语法: ---

## 任务块
- [x] 未完成
- [ ] 已完成
---
## 折叠区域
<details> 
<summary>小工具</summary>

- [免费快速的图床](https://tucdn.wpon.cn/)
</details>

```MD
<details> 
<summary>小工具</summary>
//这里必须空行 不然下面的排序会消失
- [免费快速的图床](https://tucdn.wpon.cn/)
</details>
```
