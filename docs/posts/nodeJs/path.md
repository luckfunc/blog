### path方法

```js
const path = require('path');
const filePath = '/Users/xxx/xxx/path.md';
// basename: 返回文件名
console.log(path.basename(filePath));// path.md 会返回文件名
// dirname: 返回文件所在的目录
console.log(path.dirname(filePath));// /Users/xxx/xxx 会返回文件所在的目录
// extname: 返回文件的扩展名, 返回值是包含符号.的字符串 如果是多个.则只返回最后一个
console.log(path.extname(filePath));// .md 会返回文件的扩展名
// path.join: 拼接路径
console.log(path.join(__dirname, 'path.md'));// /Users/xxx/xxx/path.md
// 支持操作符
console.log(path.join(__dirname, 'path.md', '../'));// /Users/xxx/xxx
// path.resolve: 将路径或路径片段的序列解析为绝对路径
// 如果都是绝对路径 返回最后一个
console.log(path.resolve('/foo/bar', '/tmp/file/'));// /tmp/file
// 如果有相对路径 返回最后一个
console.log(path.resolve('/foo/bar', './baz'));// /foo/bar/baz
console.log(path.resolve(__dirname, 'index.js')); // /Users/xxx/xxx/index.js
// path.parse: 返回一个对象，对象的属性表示路径的各部分, path.format的逆操作
console.log(path.parse(filePath));// { root: '/', dir: '/Users/xxx/xxx', base: 'path.md', ext: '.md', name: 'path' }
// path.format: 从对象返回路径字符串
console.log(path.format({ root: '/', dir: '/Users/xxx/xxx', base: 'path.md', ext: '.md', name: 'path' }));// /Users/xxx/xxx/path.md
// path.sep: 提供平台特定的路径片段分隔符
console.log(path.sep);// / 在Unix上是/ 在Windows上是\
```
