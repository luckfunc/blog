# .gitignore过滤规则 by chatGPT

忽略规则是 `.gitignore` 文件中的模式或规则，用于告诉 Git 哪些文件或目录应该被忽略，不纳入版本控制。`.gitignore` 文件使用简单的模式匹配规则来指定要忽略的文件或目录。
以下是一些常用的 `.gitignore` 规则示例：

1. 忽略特定文件：
   - file.txt # 忽略根目录下的 file.txt 文件
   - path/to/file.txt # 忽略指定路径下的 file.txt 文件
   - *.log # 忽略所有扩展名为 .log 的文件
2. 忽略特定目录：
   - dir/ # 忽略根目录下的 dir 目录及其内容
   - path/to/dir/ # 忽略指定路径下的 dir 目录及其内容
3. 忽略特定文件类型或扩展名：
   - .txt # 忽略所有扩展名为 .txt 的文件
   - /logs/.log # 忽略 logs 目录下的所有 .log 文件
4. 不忽略名为 .gitkeep 的文件：
   - .gitkeep # 不忽略空文件夹（通常在空文件夹中添加此文件来防止其被忽略）


注意，`.gitignore` 文件中的规则遵循以下约定：
- `#` 表示注释，从该字符到行尾的内容将被忽略。
- 每行一个规则，可以是文件、目录或模式。
- 使用斜杠 `/` 表示路径分隔符，可以指定文件的相对路径。
- 使用 `*` 表示通配符，匹配零个或多个字符。
- 使用 `!` 前缀来否定匹配，表示不忽略特定的文件或目录。

