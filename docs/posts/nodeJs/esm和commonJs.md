---
layout: doc
title: ESM和CommonJs    
---

### CommonJS 规范
#### 引入方式
```js
const fs = require('fs');
const http = require('http');
```
#### 导出方式
```js
module.exports = {
  success: true,
  name: 'commonJs'
}
```
### ESM规范
#### 引入方式
```js
import fs from 'fs';
import http from 'http';
```
#### 导出方式
```js
export default {
  success: true,
  name: 'esm'
}
export const name = 'esm';
```

### ESM和CommonJs的区别
1. CommonJs是动态(运行时)引入，ESM是静态(编译)引入
#### CommonJs
```js  
if (true) {
    const fs = require('fs');
}
```
#### ESM
```js
if (true) {
    import fs from 'fs';// 会报错，因为import是静态引入
}
// 如果非要在if中引入，可以使用import()方法
if (true) {
    import('fs').then(fs => {
        console.log(fs);
    });
}
```

