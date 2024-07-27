---
layout: doc
---

## 全局变量
### global
global是Node.js的全局对象，类似于浏览器中的window对象。在任何地方都可以访问到global对象。
```js
// 在Node.js中 使用global生成全局变量
global.name = 'global';
console.log(global.name);// global
```
### globalThis
globalThis是ES11新增的全局对象，在浏览器和Node.js中都可以使用。在浏览器中，globalThis指向window对象；在Node.js中，globalThis指向global对象。
### node环境的内置API
#### dirname：当前文件所在的目录的路径
```js
console.log(__dirname);// /Users/xxx/xxx 执行脚本的目录
```
##### filename：当前文件的绝对路径
##### Buffer：用于处理二进制数据
##### process：进程对象

