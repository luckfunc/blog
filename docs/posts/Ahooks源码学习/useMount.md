## useMount
```typescript
// 正常写useMount
import { useEffect } from 'react';
const useMount = (fn: () => void) => {
    useEffect(() => {
        fn();
    }, [])
}
const useUnmount = (fn: () => void) => {
	useEffect(() => {
		return () => {
			fn();
		}
	}, []);
}
```
## ahooks工具库的严谨性
> 相比于上面的代码 ahooks的源码实现多了fn?.();，在typescript环境中我们发现这个fn这个参数是必填的，但是为什么ahooks源码里面会有这一段fn?.()，由于这个工具库是可以在Js环境下运行的
```typescript
import { useEffect } from 'react';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

const useMount = (fn: () => void) => {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(
        `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
      );
    }
  }

  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;

const useUnmount = (fn: () => void) => {
	useEffect(() => {
		return () => {
			fn?();
		}
	}, []);
}
```
- 如果在js环境下写这一行代码，编译器不会报任何错误，但是如果fn不加?.，那可能会直接报错。学到了作为一个Js工具库的严谨程度应该是什么样子的
```javascript
useMount('test');
```
