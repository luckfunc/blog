---
layout: doc
title: 数组
date: '2022-11-24 00:23:00'
---
## func
``` javascript
const func = () => {};
```
## Array.prototype.filter  
``` javascript
const arr = [1, 2, 3, 4, 5];
const newArr = arr.filter( (item) => {
  //如果没有找到符合条件的元素会返回一个空数组[];
  return item === 0;//result = [];
})
```
## Array.prototype.map 
``` javascript
const oldArr = [
  { key: 1, value: 'a'},
  { key: 2, value: 'b'},
  { key: 3, value: 'c'},
  { key: 4, value: 'd'},
  { key: 5, value: 'e'},
];
const newArr = oldArr.map (({ key, value}) => {
  return {
    [key]: value
  }
})
console.log(newArr); 
//result [{ "1": "a" },{ "2": "b" },{ "3": "c" },{ "4": "d" },{ "5": "e"}];
```
## Array.prototype.reduce
> 一个“reducer”函数，包含四个参数：
> > - previousValue：上一次调用 callbackFn 时的返回值。在第一次调用时，若指定了初始值 initialValue，其值则为 initialValue，否则为数组索引为 0 的元素 array[0]。
> > - currentValue：数组中正在处理的元素。在第一次调用时，若指定了初始值 initialValue，其值则为数组索引为 0 的元素 array[0]，否则为 array[1]。
> > - currentIndex：数组中正在处理的元素的索引。若指定了初始值 initialValue，则起始索引号为 0，否则从索引 1 起始。
> > - array：用于遍历的数组。

```js
# demo 
const arr = [1, 2];

// 0 + 1 + 2 
const initialValue = 0;
const sumWithInitial = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// 如果initialValue是1 则是 1+1+2 因为第一次进入的话 上一次的元素 也就是默认值是1 
// expected output: 3


```
### Array.prototype.some 

//匹配到对应的值结束，比filter更加节省效率
//前提是当想取到第一个符合条件的值的时候,filter没有some效率高
```js
const arr = [1, 2, 3];
//假设我要改变这个值
const result = arr.filter(item => item === 1)[0] = "changeValue";
//今天学习到的方法
const result = arr.some(item = {
  if(item === 1) {
    item = "changeValue"
    return true;
  }
})
```
