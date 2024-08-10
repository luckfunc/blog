```js
// 1. 和os一样 也可以获取cpu的架构
const process = require('node:process');
console.log(process.arch); // arm64
// 2. 操作系统名称
console.log(process.platform); // darwin
// 3. argv 属性返回一个数组，其中包含当启动 Node.js 进程时传入的命份行参数
console.log(process.argv); // 第一个参数 是使用什么去执行的node 第二个参数是执行的文件路径 第三个参数是传入的参数
// 4. cwd() 方法返回 Node.js 进程的当前工作目录 和__dirname相似 在esm模式中用不了 __dirname 但是可以用process.cwd()
console.log(process.cwd()); // /Users/xxx/Desktop/nodejs
// 5. memoryUsage 内存信息
console.log(process.memoryUsage());
// {
//   rss: 29982720, 常驻集大小，也就是物理内存的容量
//   heapTotal: 5881856, v8给我们分配的堆内存总大小，包括未使用的部分
//   heapUsed: 2987816, 已经使用的堆内存
//   external: 1072382, 外部的内存 比如v8管理的C++对象内存
//   arrayBuffers: 9898 二进制的总量
// }
// 6. exit() 方法终止 Node.js 进程
setTimeout(() => {
	console.log('setTimeout');
}, 5000);
setTimeout(() => {
	console.log('setTimeout2');
	process.exit();
}, 2000);
process.on('exit', () => {
	console.log('exit');
})
// 7. kill() 杀死进程 但是需要一个pid
// process.kill(process.pid);
// 8. env 属性返回用户环境信息, 获取操作系统的所有环境变量，比如node的版本，系统的路径等 支持修改，但是修改只在当前进程生效，不会真正的影响系统的环境变量。
// 可以区分开发环境和生产环境 配合cross-env使用
process.env.NVM_INC = 'NVM';
console.log('env', process.env.NVM_INC); // env NVM
// 在package.json中配置"dev": "cross-env NODE_ENV=development node server.js",后 npm run dev 输出NODE_ENV=development
console.log('NODE_ENV', process.env.NODE_ENV); // env development
// cross-env 跨平台的环境变量设置 如果是windows系统，使用set NODE_ENV=development，如果是mac系统，使用export NODE_ENV=development
```
