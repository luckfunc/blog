# JavaScript
## 导出方式
```js
  //导出组件
  export default function demo () {} //默认导出只能导出一个 还可能导出的东西重名
  //接口导出方式
  export const fetchDemo = (params: undefined) => {
  	return basicservice.get('url', { params: params})// 默认第二个参数是axios的config配置项，如果想传参,使用左边的方式,和delete请求一样以字符串的形式拼接到url后面
  }
```
