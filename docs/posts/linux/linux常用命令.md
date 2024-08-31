---
layout: doc
title: 'Linux常用命令记录'
---

# Linux常用命令

## 1. 文件和目录操作命令
- `ls`: 列出目录内容
```bash
ls         # 列出当前目录的文件和文件夹
ls -l      # 详细列表，包括权限、所有者、大小等
ls -a      # 列出包括隐藏文件（以.开头的文件）
```
- `mkdir`: 创建目录
```bash
mkdir dir1  # 创建目录
mkdir -p dir1/dir2  # 递归创建目录
```
- `cd`: 更改当前目录
```bash
cd /path/to/directory  # 切换到指定目录
cd ..                  # 返回上一级目录
cd ~                   # 切换到当前用户的主目录
```
- `pwd`: 显示当前工作目录
```bash
pwd  # 显示当前目录的完整路径
```
- `cp`: 复制文件或目录
```bash
cp file1 file2  # 复制文件
cp dir1 dir2  # 复制目录
cp -r dir1 dir2  # 递归复制目录
cp /path/to/source/file /path/to/destination/directory/  # 复制文件到指定目录
```
- `mv`: 移动或重命名文件或目录
```bash
mv file1 file2              # 重命名文件 file1 为 file2
mv file1 /path/to/directory  # 移动文件到指定目录
mv /path/to/source/file /path/to/destination/directory/  # 移动文件到指定目录
mv dir1 dir2  # 重命名目录
```
- `rm`: 删除文件或目录
```bash
rm file1  # 删除文件
rm -r dir1  # 递归删除目录
rm -rf /path/to/directory  # 强制删除目录及其内容
rm -rf /path/to/directory/*  # 删除目录下的所有文件 非常的危险
```
## 2. 权限
- `chmod`: 修改文件或目录的权限
```bash
chmod 644 file1       # 设置文件权限为 rw-r--r--
chmod +x script.sh    # 使脚本可执行
```
## 3. 查看和搜索命令
- `cat`: 查看文件内容
```bash
cat file1  # 查看文件内容
```
- `grep`: 搜索文件内容
```bash
grep "search_term" file1  # 在 file1 中搜索 "search_term"
```
- `find`: 在目录中搜索文件
```bash
find /path/to/search -name "filename"  # 按名称搜索文件
find /path/to/search -type d -name "dirname"  # 搜索目录
find /path/to/search -type f -size +100M  # 查找大于 100MB 的文件
find /path/to/search -mtime -7  # 查找最近 7 天内修改的文件

```
## 4. 系统信息命令
- `top`: 显示系统资源使用情况
```bash
top  # 显示系统资源使用情况
```
- `ps`: 显示当前进程信息
```bash
ps  # 显示当前进程信息
```
- `df`: 显示磁盘空间使用情况
```bash
df -h  # 以人类可读的格式显示磁盘空间使用情况
```
- `free`: 显示内存使用情况
```bash
free  # 显示内存使用情况
```
- `uname`: 显示系统信息
```bash
uname -a  # 显示系统信息
```
## 5. 网络命令
- `ping`: 测试网络连接
```bash
ping www.baidu.com  # 测试网络连接
```
- `ifconfig`: 显示网络接口信息
```bash
ifconfig  # 显示网络接口信息
```
- `netstat`: 显示网络连接状态
```bash
netstat -an  # 显示所有网络连接状态
```
- `curl`: 发送HTTP请求
```bash
curl http://www.baidu.com  # 发送HTTP请求
```
- `wget`: 下载文件
```bash
wget http://www.baidu.com  # 下载文件
```
## 6. 压缩和解压命令
- `tar`: 压缩和解压文件
```bash
tar -cvf file.tar file1  # 创建压缩包
tar -xvf file.tar  # 解压压缩包
```
- `zip`: 压缩文件
```bash
zip file.zip file1  # 压缩文件
```
- `unzip`: 解压文件
```bash
unzip file.zip  # 解压文件
```
## 7. 系统管理命令
- `sudo`: 以超级用户权限执行命令
```bash
sudo command  # 以管理员权限执行命令
```
- `systemctl`: 管理系统服务
```bash
systemctl status nginx   # 检查 nginx 服务状态
systemctl start nginx    # 启动 nginx 服务
```
## 8. 包管理命令
- `yum`: centos/RHEL
```bash
sudo yum install package_name  # 安装软件包
sudo yum update                # 更新所有软件包
```
- `apt`: ubuntu/debian
```bash
sudo apt update                # 更新软件包列表
sudo apt install package_name  # 安装软件包
sudo apt upgrade               # 升级所有软件包
```
- `brew`: macos
```bash
brew install package_name  # 安装软件包
brew update                # 更新软件包列表
```
