## import和export

### export
```js
const circleArea = r => 3.14 * (r ** r);
const squareArea = s => s * s;
export { circleArea, squareArea }
```
等同于以下代码
```js
export const circleArea = r => 3.14 * (r ** r);
export const squareArea = s => s * s;
```
### import
```js
import { circleArea, squareArea } from './'
```
导入后重新命名
```js
import { circleArea as circle, squareArea as square } from './'
```

### 默认导出
>假设模块中只有一个成员, 可以这么写
```ts
export default function getName(name: string) {
    return name
}
```
>默认导出后的导入
```ts
import getName from './index';
```
