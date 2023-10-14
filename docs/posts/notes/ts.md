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
const vm: WeakMap<{ name: string }, number> = new WeakMap();
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
// const button = document.getElementById('#root');
// if (button) {
  // button// 如果button存在则button为HTMLElement
  // button.addEventListener('click', () => {}, undefined);
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
Fn.call({name: 'qwe'}, 'Roll'); //如果使用this必须放到第一个 而且只能叫this
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
## 枚举错误用法
``` Ts
//枚举的错误用法
//number enum 1  string enum 0 other enum 0 
enum Fruit {
    apple = 'apple',
    banana = 'banana'
}
// const f: Fruit = 'apple'; // err Type ''apple'' is not assignable to type 'Fruit'.
const f: Fruit = Fruit.apple; 
console.log(f)
export {} 
```
## type
```Ts
const a: number = 1;
console.log(a);
//不用String Number Boolean 还有大写的Object(表示范围太大)
//如何在TS中描述数据类型
//用Class/constructor描述 比如Function Array<number>
//使用type和interface描述对象


type Person = {
  name: string; //后面可以写;或者,
  age: number;
}
const newPer: Person = {
  name: 'roll',
  age: 20
}
console.log('newPer', newPer)
type A = {
  [key: string]: number //表示对象的key必须是一个字符串  对象的val必须是数字 
  //这种写法是索引签名
}
type Test = {
  [key: string]: number
}
type A2 = Record<string, number>
// Text ==> 等价于A2 
const test: Test = {
  '123': 123
}
//可以对key进行类型的检查 但是最后还是会转为字符串
console.log(test[123])
const newA: A = {
  1: 1,
 // 2: '123' //这里会报错 不能把string类型赋值给number  实际上是 不能把'123'这个字符串赋值给 val为number类型的值
}
type B = {
  [key: symbol]: number
}
const bSon = Symbol();
const b: B = {
 // bSon: 123 //会报错
 [bSon]: 123 //如果key值是Symbol 对象key必须用[]括起来 //索引签名必须是string number Symbol
}
export {}
```
## type 和interface的区别
```Ts
//type 和interface 的区别是什么 
//1. interface只描述对象
//2. type则描述所有数据
//区别2
// 1. type只是别名 (给一个已有的类型声明一个别名)
// 2.interface 则是类型声明
//基本上type可以用于任何类型  type生成的是一个类型的别名 而不是一个新的类型
type Name = string;
type FalseLike = '' | null | undefined | 0 | false ;
type Point = { x: number, y: number };
type Points = Point[]; 
type line = [Point, Point];//二元组
type Fn = (a: number, b: number) => {}//正常函数
//带有属性的函数
type FnWithProp = {
  (a: number, b: number): void, //表示是一个函数
  prop: string //函数里面有属性是prop
}
const f: FnWithProp = (x, y) => {
  return x + y;
}
f.prop = 'helloWorld!';
console.log('f', f)
const zero: FalseLike = '';
const hi: Name = 'hi';
console.log('hi', hi);
//interface 描述对象的属性
 interface IUser {
  username: string,
  password: string
 }
 interface IUserAll {
  [k: string]: number
 }
 const userAll: IUserAll = {
  user0: 1,
  user1: 2
 }
 console.log(userAll);
 const user: IUser = {
  username: 'xdd',
  password: '123'
}
//interface 表示数组？
interface X {
  age: number
}
interface A extends Array<string>, X {
//A拥有数组类型 还拥有age类型
name: string //还有name属性
}
// ==> 
type A1 = Array<string> & {
  name: string
}& X
//interface描述函数
interface IFn {
  (a: number, b: number) : void
  // sayHello: (a: string, b: string) => number,
  miss: string
}
const Fn: IFn = () => {}
Fn.miss = 'I am Missing!'
//interface 日期属性
interface D extends Date {
  xxx: string,
  age: number
}
const date: D = new Date();
date.xxx = 'xxx';
date.age = 20; //err  Type 'Date' is missing the following properties from type 'D': xxx, agets(2739) 
// 
console.log(date);

---
type C = string; 
type B = C; //type B = string 好像C就不存在
//interface
interface D extends Date {}
type E = D; //type E = Dsh D是存在的
export {}

---
//type interface 区别
type A = number;
// A = string; //不可以重新赋值  //缺点就是不能扩展
const a: A = 123;
interface X {
    name: string
}
interface X {
    age: number
}
const x: X = {
    name: 'roll',
    age: 22,
}
console.log(x); //interface 可以把类型合并
console.log(a);
declare global {
    interface String {
        sayHi(x: string): void
    }
}
const str = 'String类型';
str.sayHi('helloWorld!');
//对外API尽量用Interface 方便扩展
type newA = {
    aaa: string
}
type newB = {
    bbb: string
} & newA
const b: newB = {
    aaa: 'sss',
    bbb: 'asd'
}
console.log('b', b);
export {}
```
## 泛型

```Ts
// 泛型generics 宽泛的类型
function dump<T>(args: T): T {
  return args;
}
let result = dump('123'); //result type === any
// let result = dump<string>('123'); //result type === any 这样result 就是一个string类型了  也可以不写  Ts类型推断 自动的把类型T推断处理啊
//简而言之 <T>就是类型的参数  和函数的参数相似 只不过传的是类型
let result1 = dump(true); // result1 type === boolean
export {}
```