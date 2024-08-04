### exec实践
> 通过exec执行shell命令，查找指定端口的进程ID，然后杀死进程
```js
const { exec } = require('child_process');

// 指定端口号
const port = 3000;

// 查找占用指定端口的进程ID
exec(`lsof -i:${port} -t`, (err, stdout, stderr) => {
    if (err) {
        console.error(`Error finding process on port ${port}:`, err);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    const pid = stdout.trim();
    if (pid) {
        console.log(`Process on port ${port} has PID: ${pid}`);
        
        // 杀死进程
        exec(`kill -9 ${pid}`, (killErr, killStdout, killStderr) => {
            if (killErr) {
                console.error(`Error killing process ${pid}:`, killErr);
                return;
            }
            if (killStderr) {
                console.error(`stderr: ${killStderr}`);
                return;
            }
            console.log(`Process ${pid} killed successfully.`);
        });
    } else {
        console.log(`No process found on port ${port}`);
    }
});

```
