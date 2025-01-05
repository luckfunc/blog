```javascript
class MyPromise {
  // 创建promise的状态
  static PENDING = 'PENDING';
  static FULFILLED = 'FULFILLED';
  static REJECTED = 'REJECT';

  constructor(func) {
    // 初始化的时候 状态是PENDING
    this.status = MyPromise.PENDING;
    this.result = null;
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];
    try {
      func(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(result) {
    // 在执行resolve的时候 如果状态是PENDING，需要改为FULFILLED;
    setTimeout(() => {
      if (this.status === MyPromise.PENDING) {
        // 当在外部环境执行resolve的时候this不存在
        this.status = MyPromise.FULFILLED;
        this.result = result;
        this.resolveCallbacks.forEach(callback => {
          callback(result);
        })
      }
    })
  }
  reject(result) {
    setTimeout(() => {
      if (this.status === MyPromise.PENDING) {
        this.status = MyPromise.REJECTED;
        this.result = result;
        this.rejectCallbacks.forEach(callback => {
          callback(result);
        })
      }
    });
  }
  then(onFULFILLED, onREJECTED) {
    onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => {};
    onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => {};
    if (this.status === MyPromise.PENDING) {
     this.resolveCallbacks.push(onFULFILLED);
     this.rejectCallbacks.push(onREJECTED);
    }
   if (this.status === MyPromise.FULFILLED) {
     setTimeout(() => {
       onFULFILLED(this.result);
     });
   }
   if (this.status === MyPromise.REJECTED) {
     setTimeout(() => {
       onREJECTED(this.result);
     });
   }
   return this;
  }
}
console.log('第一步');
const promise = new MyPromise((resolve, reject) => {
  console.log('第二步');
  setTimeout(() => {
    resolve('这次一定');
    reject('下次一定');
    console.log('第四步');
  })
});
promise.then(
  (res) => {console.log(res)},
  (err) => {console.log(err.message)},
).then(() => console.log('链式'))
console.log('第三步');

```