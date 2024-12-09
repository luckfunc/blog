# Webpack打包踩坑：意外的CSS引入

## 问题描述

在进行C端项目优化时，我遇到了一个有趣的问题。在检查A页面的打包结果时，发现最终生成的CSS文件中包含了C组件的样式。这很奇怪，因为A页面并没有直接引入C组件，那么为什么会出现C组件的样式呢？

## 代码分析

让我们来看看相关的代码：

### A页面代码
```ts
import { B } from '@components'
export default function A() {
  return (
    <div>
      <h1>A页面</h1>
      <B />
    </div>
  )
}
```
### components/index.ts代码
```ts
import B from './B.tsx';
import C from './C.tsx';
export { B, C }
```
### 依赖关系导致的意外样式引入
Webpack会将C组件的代码引入到A页面，是因为B组件在其内部直接引用了C组件。Webpack通过静态分析代码依赖关系，发现A页面依赖B，而B又依赖C，因此它会将C的代码打包到最终生成的A页面中。这种依赖链的传递是Webpack模块系统的核心特性，确保了所有相关模块的正确加载和执行。
### 解决方法
将A页面的代码改造如下
```ts
import B from '@components/B'
export default function A() {
  return (
    <div>
      <h1>A页面</h1>
      <B />
    </div>
  )
}
```
这样B页面里面没有引用C组件，就不会将C组件的样式打包到A页面中。
