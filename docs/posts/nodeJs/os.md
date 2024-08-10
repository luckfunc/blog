### os模块
```js
    const os = require('node:os');
    const { exec } = require('node:child_process');
// exec可以执行shell命令
// 1. 获取操作系统的信息，windows返回win32, mac返回darwin, linux返回linux, android返回android
console.log(os.platform());
//   type Platform =
    // | "aix"
    // | "android"
    // | "darwin"
    // | "freebsd"
    // | "haiku"
    // | "linux"
    // | "openbsd"
    // | "sunos"
    // | "win32"
    // | "cygwin"
    // | "netbsd";
// 2. 获取操作系统的版本
console.log('release', os.release());
console.log('type', os.type()); // windows_NT darwin linux
console.log('version', os.version());

// webpack vite rollup open=true
// 判断不同的操作系统，打开浏览器
const platform = os.platform();
const open = (url)  => {
    if (platform === 'win32') {
        exec(`start ${url}`);
    }
    if (platform === 'darwin') {
        exec(`open ${url}`);
    }
    if (platform === 'linux') {
        exec(`xdg-open ${url}`);
    }
}
// 打开浏览器
open('https://github.com');

// 3. 获取用户user目录
// homeDir 读取用户目录 windows: %UserProfile%, mac: $HOME, linux: $HOME
console.log(os.homedir());
// 4. 获取cpu架构
console.log(os.arch());
// 5. 获取cpu信息
console.log(os.cpus());
// 常用于计算cpu利用率
// {
//     model: 'Apple M1 Pro',
//     speed: 24,
//     times: { user: 80686900, nice: 0, sys: 53759010, idle: 545946190, irq: 0 }
//   },
console.log(os.cpus().length); // 读取的是cpu的核数
// 6. 网络信息
/*
{
      address: '127.0.0.1', ip地址
      netmask: '255.0.0.0', 子网掩码
      family: 'IPv4', 协议
      mac: 'xx:0x:x0:00:00:00', mac地址
      internal: true, 是否是内网
      cidr: '127.0.0.1/8' 网络地址
    },
*/
console.log(os.networkInterfaces());
```
