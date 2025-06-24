## 证书自动续签（使用 acme.sh）

### ✅ 1. 安装 acme.sh

```bash
# 推荐（海外服务器）
curl https://get.acme.sh | sh -s email=your@email.com

# 或者使用 wget
wget -O - https://get.acme.sh | sh -s email=your@email.com
```

安装完成后，acme.sh 的脚本的路径会在：

```bash
/root/.acme.sh/acme.sh
```

> 可以通过别名的方式快速访问到acme.sh脚本
>
> ```bash
> alias acme.sh='/root/.acme.sh/acme.sh'
> ```
>
> 这样可以全局直接使用 `acme.sh` 命令。

---

### ✅ 2. 当前使用泛域名证书的域名

| 域名                | 类型   | 使用证书路径                           |
| ----------------- | ---- | -------------------------------- |
| const.site        | 泛域证书 | `/ssl/const.site/const.site.pem` |
| json.const.site   | 泛域证书 | `/ssl/const.site/const.site.pem` |
| base64.const.site | 泛域证书 | `/ssl/const.site/const.site.pem` |

---

### ✅ 3. 申请 const.site 泛域名证书流程

#### 方式一：自动 DNS 验证,
> ✅推荐使用自动 DNS 验证，操作流程如下：
> 1. 登录[RAM访问控制面板](https://ram.console.aliyun.com/users)为自己创建一个子账号并生成 AccessKey。
> 2. 不用修改任何配置文件，只需在终端里执行：
>```bash
> export Ali_Key="你的Aliyun AccessKeyId"
> export Ali_Secret="你的Aliyun AccessKeySecret"
>```
> 3. 然后执行以下命令申请证书：
> ```bash
> acme.sh --issue --dns dns_ali -d *.const.site -d const.site
> ```

#### 方式二：手动 DNS 验证
> 被迫使用“手动 DNS 验证”方式。虽然我的域名是从阿里云购买的，但实际使用的 DNS 是万网默认的：
>
> ```bash
> dig NS const.site +short
> dns18.hichina.com.
> dns17.hichina.com.
> ```
>
> 而不是阿里云云解析常见的：`ns1.alidns.com` 和 `ns2.alidns.com`。 所以 `dns_ali` 方式无法用，只能手动添加 TXT 记录 🌚

```bash
acme.sh --issue -d *.const.site -d const.site \
  --dns --yes-I-know-dns-manual-mode-enough-go-ahead-please
```

> 📌 根据提示添加 2 条 TXT 记录到 `_acme-challenge.const.site`，**添加完之后确定txt记录已经生效：**
>
> ```bash
> dig TXT _acme-challenge.const.site +short
> ```
>
> 如果能看到刚才添加的值再执行下面的命令，否则建议稍等 1～2 分钟再试。

```bash
acme.sh --renew -d *.const.site \
  --yes-I-know-dns-manual-mode-enough-go-ahead-please
```

---

### ✅ 4. 安装证书到指定目录

```bash
# 新建路径保存当前域名的证书文件
mkdir -p /ssl/const.site

# 将证书拷贝到刚才保存的证书目录，方便管理
acme.sh --install-cert -d *.const.site \
  --key-file /ssl/const.site/const.site.key \
  --fullchain-file /ssl/const.site/const.site.pem \
  --reloadcmd "nginx -s reload"
```

---

### ✅ 5. 配置 Nginx 并重启使证书生效

所有子域名配置中以下路径：

```nginx
ssl_certificate     /ssl/const.site/const.site.pem;
ssl_certificate_key /ssl/const.site/const.site.key;
```

示例：`json.const.site`

```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name json.const.site;

    ssl_certificate     /ssl/const.site/const.site.pem;
    ssl_certificate_key /ssl/const.site/const.site.key;

    location / {
        root /www/wwwroot/json.const.site;
        index index.html index.htm;
    }
}
```

配置完成后，执行命令重载 Nginx 

```bash
nginx -t && nginx -s reload
```
---

### ✅ 6. 自动续签说明（acme.sh 定时任务机制）
acme.sh 安装时会自动将定时任务写入 crontab，每天检查是否需要续签证书。

```bash
crontab -e
```

添加如下行（如果安装时未自动加上）：

```bash
0 3 * * * "/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null
```
手动触发续签检查：(手动dns记录验证才需要做)

```bash
acme.sh --cron --home /root/.acme.sh
```

> ⚠️ 注意：虽然 acme.sh 自动添加了定时任务，但**仅适用于支持自动 DNS 验证的场景**。

### ✅ 7. 如后续添加新的子域

1. DNS 添加 A 记录指向服务器；
2. 创建目录 `/www/wwwroot/xxx.const.site`；
3. 拷贝一份 `.conf` 文件，修改 `server_name` 和 `root`；
4. 重载 nginx：

```bash
nginx -t && nginx -s reload
```

---
