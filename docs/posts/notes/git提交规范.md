---
prev: 
  text: '如何学习'
  link: '/posts/notes/如何快速学习新技术'
next:
  text: '在windows中切换IDE的终端为linux'
  link: '/posts/notes/在windows中切换IDE的终端为linux'
---

# Git 提交规范

让ChatGpt给我生成了一份git的提交规范，以后提交代码的时候按照这个规范走，后续有遇到的问题在继续补充一下。

- `<type>`: 用于说明 commit 的类别，只允许使用下面7个标识符。
  - feat：新增 feature。
  - fix：修复 bug。
  - docs：修改文档。
  - style：修改代码格式，不影响代码逻辑。
  - refactor：重构代码，理论上不影响现有功能。
  - test：增加测试用例。
  - chore：修改工具相关（包括但不限于文档、代码生成等）
---
在别的地方看到还有这两个 
  - revert - 回退
  - build - 打包
- `<scope>(选填)`: 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等。
- `<subject>`: 是 commit 目的的简短描述，不超过50个字符。

例如：
```
git commit -m "feat(users): add login functionality"
```
表示新增了一个用户登录的功能。

当然，这只是一个示例，你可以根据实际情况进行相应的修改。
