## useState 最初版

如果只是想实现react里面的计数器演示demo，很简单，下面的代码可以直接满足。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>useState age</title>
</head>

<body>
  <div id="root"></div>
  <script>
    let memoizedState;

    function useState(initialState) {
      if (memoizedState === undefined) {
        memoizedState = initialState;
      }
      const setState = (action) => {
        memoizedState = typeof action === "function" ? action(memoizedState) : action;
        render()
      }
      return [memoizedState, setState]
    }
    function App() {
      const [age, setAge] = useState(0);
      window.setAge = setAge;

      return `
      <button onclick=" window.setAge((prev) => {
        return prev + 1
      });">${age}</button>
      `
    }
    const render = () => {
      document.getElementById('root').innerHTML = App();
    }
    render();

  </script>

</body>

</html>
```

现有的实现里面只有 `age` 状态，看起来没问题

如果我想给他加上name，点击name对应的容器 让Name变成Tom。 那么我是不是可以这么做,通过判断不同的初始值的类型 去决定不同状态的更新。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id="root"></div>
  <script>
    let numberMemoizedState;
    let stringMemoizedState;

    function useState(initialState) {
      const isNumber = typeof initialState ==="number"
      if (isNumber) {
        if (numberMemoizedState === undefined) {
          numberMemoizedState= initialState;
        } 
      } else {
        if (stringMemoizedState === undefined) {
          stringMemoizedState= initialState;
        } 
      }
      const setState = (action) => {
        if (isNumber) {
          numberMemoizedState = typeof action === "function" ? action(numberMemoizedState) : action;
        } else {
          stringMemoizedState = typeof action === "function" ? action(stringMemoizedState) : action;
        }
        render();
        
      }
      return [isNumber ? numberMemoizedState : stringMemoizedState, setState]
    }
    function App() {
      const [count, setCount] = useState(0);
      const [name, setName] = useState('jack');
      window.setCount = setCount;
      window.setName = setName;

      return 
      <div onclick="window.setName('tom')">
        name ${name}
        </div>
      <button onclick=" window.setCount((prev) => {
        return prev + 1
      });">${count}</button>
      
    }
    const render = () => {
      document.getElementById('root').innerHTML = App();
    }
    render();

  </script>

</body>

</html>
```
如果只是实现我上面的两种需求，这个useState我觉得已经满足要求了，但是 如果还要加上address字段呢? 现有的用类型判断的方法是不是失效了?
