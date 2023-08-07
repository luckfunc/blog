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
