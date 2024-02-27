import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.Bk-UhgEh.js";const y=JSON.parse('{"title":"Github Actions","description":"","frontmatter":{},"headers":[],"relativePath":"posts/workflow/index.md","filePath":"posts/workflow/index.md","lastUpdated":1692805821000}'),l={name:"posts/workflow/index.md"},p=n(`<h1 id="github-actions" tabindex="-1">Github Actions <a class="header-anchor" href="#github-actions" aria-label="Permalink to &quot;Github Actions&quot;">​</a></h1><h2 id="workflow配置" tabindex="-1">workflow配置 <a class="header-anchor" href="#workflow配置" aria-label="Permalink to &quot;workflow配置&quot;">​</a></h2><h3 id="关键脚本" tabindex="-1">关键脚本 <a class="header-anchor" href="#关键脚本" aria-label="Permalink to &quot;关键脚本&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This is a basic workflow to help you get started with Actions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deploy</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 工作流的名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Controls when the workflow will run</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Triggers the workflow on push or pull request events but only for the main branch</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  push:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    branches:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deploy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ]</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 当push到deploy的时候触发workflow操作</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Allows you to run this workflow manually from the Actions tab</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  workflow_dispatch:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># A workflow run is made up of one or more jobs that can run sequentially or in parallel</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # This workflow contains a single job called &quot;build&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  build:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # The type of runner that the job will run on</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    runs-on:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ubuntu-latest</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在ubuntu系统上运行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Steps represent a sequence of tasks that will be executed as part of the job</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    steps:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> actions/checkout@v2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Node.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> actions/setup-node@v3.8.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        with:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          node-version:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;16.X&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Setup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # You may pin to the exact commit or the version.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # uses: pnpm/action-setup@d882d12c64e032187b2edb46d3a0d003b7a43598</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm/action-setup@v2.4.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        with:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # Version of pnpm to install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          version:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;7.X&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        run:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        run:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Deploy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 这里是通过Secure Copy Protocol (SCP) 发送到远程服务器上。可以在github编辑workflow下的yml文件,右侧会显示不同方式的用法。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cross-the-world/scp-pipeline@master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        with:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 这里是ip地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          host:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${{ secrets.REMOTE_HOST }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 这里是用户名(连接服务器的用户名)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          user:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${{ secrets.REMOTE_NAME }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 这里是密码(连接服务器的密码)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          pass:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${{ secrets.REMOTE_PASS }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 连接超时时长  不写默认是30s </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          connect_timeout:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">s</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 要把那个文件部署到服务器上 这里我要部署的是dist下的所有文件。根据实际路径切换。如果是vitePress的话：docs/.vitepress/dist/*</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          local:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dist/*&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # 这里要部署到服务器的那个路径 example: /www/wwwroot/\${xxx目录下} 以服务器的为准</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          remote:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${{ secrets.REMOTE_TARGET }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span></code></pre></div>`,4),h=[p];function t(e,k,r,F,d,o){return a(),i("div",null,h)}const g=s(l,[["render",t]]);export{y as __pageData,g as default};
