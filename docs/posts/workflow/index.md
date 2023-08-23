# Github Actions

## workflow配置

### 关键脚本
```shell
# This is a basic workflow to help you get started with Actions

name: deploy # 工作流的名称

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [ deploy ] # 当push到deploy的时候触发workflow操作
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest # 在ubuntu系统上运行
    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2
      - name: install Node.js
        uses: actions/setup-node@v3.8.1
        with:
          node-version: '16.X'

      - name: Setup pnpm
        # You may pin to the exact commit or the version.
        # uses: pnpm/action-setup@d882d12c64e032187b2edb46d3a0d003b7a43598
        uses: pnpm/action-setup@v2.4.0
        with:
          # Version of pnpm to install
          version: '7.X'

      - name: install deps
        run: pnpm i
      - name: build app
        run: pnpm run build

      - name: Deploy to the server.
      # 这里是通过Secure Copy Protocol (SCP) 发送到远程服务器上。可以在github编辑workflow下的yml文件,右侧会显示不同方式的用法。
        uses: cross-the-world/scp-pipeline@master
        with:
          # 这里是ip地址
          host: ${{ secrets.REMOTE_HOST }}
          # 这里是用户名(连接服务器的用户名)
          user: ${{ secrets.REMOTE_NAME }}
          # 这里是密码(连接服务器的密码)
          pass: ${{ secrets.REMOTE_PASS }}
          # 连接超时时长  不写默认是30s 
          connect_timeout: 10s
          # 要把那个文件部署到服务器上 这里我要部署的是dist下的所有文件。根据实际路径切换。如果是vitePress的话：docs/.vitepress/dist/*
          local: 'dist/*'
          # 这里要部署到服务器的那个路径 example: /www/wwwroot/${xxx目录下} 以服务器的为准
          remote: ${{ secrets.REMOTE_TARGET }}
```
