## 在终端使用`webstorm .`把当前目录用webstorm打开
在.zshrc中添加以下命令
```shell
alias webstorm='open -a /Applications/WebStorm.app'
```
重新加载 .zshrc 配置
```shell
source .zshrc
```
使用命令启动 WebStorm： 现在你可以在任何目录下，使用以下命令打开 WebStorm 并加载当前目录：
```shell
webstorm .
```