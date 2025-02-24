## useCallback

```tsx
import { memo, useState } from 'react'
import './App.css'

const Child = memo(() => {
  console.log('Child render')
  return <div>Child</div>
})

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      <Child />
    </>
  )
}

export default App
```
> meno允许我们将组件包裹起来，只要Props不变，就不会重新渲染

- 但是如果我们传递的是一个函数，那么每次父组件更新，都会重新渲染子组件，因为每次父组件更新，都会重新创建一个新的fn函数，这样就会导致子组件重新渲染
```tsx
import { memo, useState } from 'react'
import './App.css'

interface IProps {
  fn: () => void
}
const Child = memo((props: IProps) => {
  const { fn } = props
  console.log('Child render', fn)
  return <div>Child</div>
})

function App() {
  const [count, setCount] = useState(0);
  const fn = () => {
    console.log('fn')
  }

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      <Child fn={fn} />
    </>
  )
}

export default App
```
- 这个时候可以使用useCallback来解决这个问题

```tsx
import { memo, useState, useCallback } from 'react'
import './App.css'

interface IProps {
  fn: () => void
}

const Child = memo((props: IProps) => {
  const {fn} = props
  console.log('Child render', fn)
  return <div>Child</div>
})

function App() {
  const [count, setCount] = useState(0);
  const fn = useCallback(() => {
    console.log('fn')
  }, []);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      <Child fn={fn}/>
    </>
  )
}

export default App
```