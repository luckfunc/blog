## 在运行nodejs的时候输出有颜色的console
```js
console.log('\x1b[38;2;0;115;128m%s\x1b[30m%s\x1b[0m\x1b[38;2;0;115;128m%s\x1b[0m', '\u2192', ' Local:  ', 'http://localhost:8080');
```
### 预览
![terminal](/icons/color-console.png)