## Nginx学习

### Nginx全局配置模块

```shell
user  nginx;
## 全局配置模块
worker_processes  auto;

### 错误日志路径
error_log  /var/log/nginx/error.log notice;
### nginx允许的pid
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    ## 日志输出格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    ## 访问日志路径
    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;
    ## 默认配置下引用的所有.conf结尾的文件
    include /etc/nginx/conf.d/*.conf;
    ## 自定义配置, 一般在这里做一些拓展, 尽量不更改当前目录的其他配置项
    include /etc/nginx/vhosts/*.conf;
}
```

### 自定义配置文件
```shell
- 配置路径
    路径: /etc/nginx/vhosts/xxx.conf
- 配置项
    server {
    ## 表示当前服务允许的端口
    listen       80;

    ## ssl证书的相关配置
    listen 443 ssl;
    ## 当前站点对应的域名, 也可以填写IP
    server_name  luckfunc.com;
    # 证书pem文件及路径
    ssl_certificate      /ssl/luckfunc.com/luckfunc.com.pem;
    # 私钥key文件及路径
    ssl_certificate_key  /ssl/luckfunc.com/luckfunc.com.key;

    ssl_session_cache shared:SSL:1m;

    ssl_session_timeout 5m;

    #access_log  /var/log/nginx/host.access.log  main;
    ## 当前域名下对应的项目路径。比如访问luckfunc.com的时候 自动寻找/www/wwwroot/luckfunc.com下的index.html或index.htm文件
    location / {
        root   /www/wwwroot/luckfunc.com;
        index  index.html index.htm;
    }
    ## 404页面对应的路径
    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    ## 当服务器故障的时候 自动跳转到对应的错误页面
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}    
```
