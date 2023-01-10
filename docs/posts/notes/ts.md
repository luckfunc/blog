# TypeScript
## 箭头函数对象
``` Ts
// 函数对象怎么描述
type FunA = (arg1: number, arg2: string) => string
const funa: FunA = (x, y) => {
  //参数没有类型 却编译通过了 ?? 
  return 'HelloWorld'
}

funa(1, '2'); //调用需要遵守类型
type FnReturnVoid = (args1: number) => void;
const funVoid: FnReturnVoid = () => {
  console.log('123');
  return '123'  
}
type FnReturnUndefined = (args: 1) => undefined;
const fnUndefined: FnReturnUndefined = () => {
  // console.log('undefined');
  return undefined;
}
export {}
```
## 普通函数
```TS
// 普通函数  普通函数类型声明得时候 必须使用箭头函数
type Person = {
  name: string,
  age: number,
  gender: string,
  sayHi: FunWithThis
}
type FunWithThis = (this: Person, name: string) => void;
const func: FunWithThis = function (this, name1) {
  console.log('hi' + this.name);
}
const x: Person = {
  name: 'xdd',
  age: 22,
  gender: 'address',
  sayHi: func
}
x.sayHi('jack');// this指得就是x  
func.call(x, 'Roll');
export {}
```
## 其他对象类型表示
```Ts
//其他对象一般用 构造函数描述
const d: Date = new Date();

const r: RegExp = /ab+c/
const r2: RegExp = new RegExp('ab+c');
console.log('r', r);
const m: Map<string, number> = new Map();
m.set('1', 2);
const vm: WeakMap<{ name: string}, number> = new WeakMap();
console.log('vm', vm)
//小写Object什么意思
type A = object;
const a: A = {}; //小写object是非大写对象和基本得类型 {} [] () => 1 
const s: Set<number> = new Set();
s.add(1);
console.log(s, 's');
const weak: WeakSet<string[]> = new WeakSet();
const weakResult = weak.add(['1', '2', '3']);
export {}

```
## 数组对象
```Ts
//数组对象怎么描述
const arr: Array<number> = [1, 2, 3];
type A = string[];
const a: A = ['1', '2'];
console.log('a', a);
// ==> type A = Array<string>'
type Three = [string, string, string];
const d: Three = ['1', '2', '3'];// 三个string类型组成的数组
type E = [string, number];
const e: E = ['1', 2];
//思考题
type Think = [1, 2, 3];
const think: Think = [1, 2, 3];
export {}
```
## any和unknow
```Ts
//any unknow ？？？
const a: unknown = 1;
a.fixed();//声明了一个变量 类型是unknow 值是1但是无法调用.fixed() 因为类型是unknow 不知道
//unknow 适合 从外部获取的 但是这个值我无法知道
const b:unknown = ajax.get('url');
//从远处获取到的值 先把他盖住 然后get得到的值被改在下面 需要使用的时候断言
const c = (b as number);
// never一个不包含任何元素的集合叫空集
type A = number & string; //A的类型是number且是string
const newA: A = '' //new A的类型就是never
//never是做类型推断的
type nev = string | number | boolean;
const obj: nev = 'asd' as any;
if (typeof obj === 'string') {
  obj.toLocaleUpperCase()
}else if(typeof obj === 'number') {
  obj.toFixed();
}else if (typeof obj === 'boolean') {
  obj.valueOf();
}else {
  obj
}
export {}
```
## dom表示
```Ts
// const button = document.getElementById("#root");
// if (button) {
  // button// 如果button存在则button为HTMLElement
  // button.addEventListener("click", () => {}, undefined);
// }
type A = null;
const a: A = null;//声明一个集合为空
const s: symbol = Symbol('s');
console.log('s', s);
//this
type Person = {
  name: string
}
type F = (this: Person, name: string) => void;
const Fn: F = function(name) {
  console.log(this.name);
}
Fn.call({name: "qwe"}, "Roll"); //如果使用this必须放到第一个 而且只能叫this
const x = {};
export {}

```
## enum枚举
```Ts
//枚举
//什么时候用enum 映射？
enum A {
  todo = 0, 
  done,//不写的话默认是++
  archived,
  deleted 
}
//可以把后端返回的数据1234对应成 A.todo , A.done
let status: A = A.todo;
console.log(status, 'status');

//权限控制
enum Permission {
  None = 0, //0
  Read = 1 << 0, //值1   1*2的0次方 0001
  Write = 1 << 1,//值2 1*2的1次方   0010
  Delete = 1 << 2,//值4 1*2的2次方  0100
  Manager = Read | Write | Delete //js的或  0111
}
//远程获取User
type User = {
  permission: Permission
}
const user: User = {
  permission: 0b0101
}
//进行与操作 与运算 1&1 才为1 任何数字与上一个值还为这个值 则 这个数字拥有这个值的所有1 example: a&b === b 则a有b的所有1
if ((user.permission & Permission.Write) === Permission.Write) {
  console.log('拥有写权限');
}

export {}
```
