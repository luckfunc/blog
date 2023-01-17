# JavaScript
## 导出方式
```js
  //导出组件
  export default function demo () {} //默认导出只能导出一个 还可能导出的东西重名
  //接口导出方式
  export const fetchDemo = () => {
  	return basicservice.get('url')
  }
```
