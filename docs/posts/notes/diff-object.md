---
layout: doc
title: Diff Object
date: '2024-12-12-23:16'
---
## Diff Object
```javascript
function deepEqual(obj1, obj2) {
	// 如果obj1和obj2不是对象,就直接进行值比较
	if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
		return obj1 === obj2;
	}
	// 如果obj1和obj2的key数量不同,那么就可以确定他们不相等
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
	}
	// 遍历obj1的每一个key
	for (let key in obj1) {
		// 如果obj2中没有这个key,那么obj1和obj2不相等
		if (!obj2.hasOwnProperty(key)) {
			return false;
		}
		// 如果obj1[key]和obj2[key]都是函数,那么将他们的代码字符串进行比较
		if (typeof obj1[key] === 'function' && typeof obj2[key] === 'function') {
			return obj1[key].toString() === obj2[key].toString();
		}
		// 如果obj1[key]和obj2[key]不是函数,那么递归调用deepEqual函数
		if (!deepEqual(obj1[key], obj2[key])) {
			return false;
		}
	}
	// 如果obj1和obj2的每一个key都相等,那么obj1和obj2相等
	return true;
}

```
