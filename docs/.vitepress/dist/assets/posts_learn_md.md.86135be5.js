import{_ as s,c as l,o as a,b as n}from"./app.009acc7b.js";const D=JSON.parse('{"title":"md文档学习","description":"","frontmatter":{"layout":"doc","title":"md文档学习"},"headers":[{"level":2,"title":"无序列表","slug":"无序列表","link":"#无序列表","children":[]},{"level":2,"title":"有序列表","slug":"有序列表","link":"#有序列表","children":[]},{"level":2,"title":"区块引用","slug":"区块引用","link":"#区块引用","children":[]},{"level":2,"title":"超链接","slug":"超链接","link":"#超链接","children":[]},{"level":2,"title":"表格","slug":"表格","link":"#表格","children":[]},{"level":2,"title":"引用图片","slug":"引用图片","link":"#引用图片","children":[{"level":3,"title":"Roll Github Start","slug":"roll-github-start","link":"#roll-github-start","children":[]}]},{"level":2,"title":"区块","slug":"区块","link":"#区块","children":[]},{"level":2,"title":"分割线","slug":"分割线","link":"#分割线","children":[]},{"level":2,"title":"任务块","slug":"任务块","link":"#任务块","children":[]},{"level":2,"title":"折叠区域","slug":"折叠区域","link":"#折叠区域","children":[]}],"relativePath":"posts/learn/md.md","lastUpdated":1677318093000}'),e={name:"posts/learn/md.md"},t=n(`<h1 id="md学习记录" tabindex="-1">Md学习记录 <a class="header-anchor" href="#md学习记录" aria-hidden="true">#</a></h1><h2 id="无序列表" tabindex="-1">无序列表 <a class="header-anchor" href="#无序列表" aria-hidden="true">#</a></h2><ul><li>helloWorld</li><li>helloWorld</li></ul><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">无序列表 (源码)</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> helloWorld!</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> helloWorld!</span></span>
<span class="line"></span></code></pre></div><h2 id="有序列表" tabindex="-1">有序列表 <a class="header-anchor" href="#有序列表" aria-hidden="true">#</a></h2><ol><li>helloWorld!</li><li>helloWorld!</li></ol><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">有序列表</span></span>
<span class="line"><span style="color:#89DDFF;">1.</span><span style="color:#A6ACCD;"> helloWorld //数字.空格   1.(这是一个空格)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    helloWorld // 子项前面是四个空格</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    helloWorld</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    helloWorld</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    helloWorld</span></span>
<span class="line"></span></code></pre></div><h2 id="区块引用" tabindex="-1">区块引用 <a class="header-anchor" href="#区块引用" aria-hidden="true">#</a></h2><blockquote><p>区块引用</p><blockquote><p>123</p><blockquote><p>123</p><blockquote><p>123 <code>console.log(&#39;HelloWorld&#39;)</code></p></blockquote></blockquote></blockquote></blockquote><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">区块引用</span></span>
<span class="line"><span style="color:#FF9CAC;font-style:italic;">&gt;</span><span style="color:#89DDFF;font-style:italic;"> 区块引用</span></span>
<span class="line"><span style="color:#FF9CAC;font-style:italic;">&gt;</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#FF9CAC;font-style:italic;">&gt;</span><span style="color:#89DDFF;font-style:italic;"> 123</span></span>
<span class="line"><span style="color:#FF9CAC;font-style:italic;">&gt;</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#FF9CAC;font-style:italic;">&gt;</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#FF9CAC;font-style:italic;">&gt;</span><span style="color:#89DDFF;font-style:italic;"> 123</span></span>
<span class="line"><span style="color:#FF9CAC;font-style:italic;">&gt;</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#FF9CAC;font-style:italic;">&gt;</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#FF9CAC;font-style:italic;">&gt;</span><span style="color:#89DDFF;font-style:italic;"> </span><span style="color:#FF9CAC;font-style:italic;">&gt;</span><span style="color:#89DDFF;font-style:italic;"> 123</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`console.log(&#39;HelloWorld&#39;)\`</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="超链接" tabindex="-1">超链接 <a class="header-anchor" href="#超链接" aria-hidden="true">#</a></h2><p>这是我的<a href="https://gogogo7.com" target="_blank" rel="noreferrer">博客</a></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">这是我的</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">超链接名称</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">url</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th style="text-align:center;">表头</th><th style="text-align:center;">表头</th></tr></thead><tbody><tr><td style="text-align:center;">HelloWorld</td><td style="text-align:center;">HelloWorld</td></tr><tr><td style="text-align:center;">HelloWorld</td><td style="text-align:center;">HelloWorld</td></tr><tr><td style="text-align:center;">HelloWorld</td><td style="text-align:center;">HelloWorld</td></tr><tr><td style="text-align:center;">HelloWorld</td><td style="text-align:center;">HelloWorld</td></tr></tbody></table><h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-hidden="true">#</a></h2><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">表格</span></span>
<span class="line"><span style="color:#A6ACCD;">| 表头 | 表头 | 表头 | </span></span>
<span class="line"><span style="color:#A6ACCD;">| --- | --- | --- |</span></span>
<span class="line"><span style="color:#A6ACCD;">| HelloWorld | HelloWorld | HelloWorld |</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">居中对齐</span></span>
<span class="line"><span style="color:#A6ACCD;">| :----: | </span></span>
<span class="line"><span style="color:#A6ACCD;">向左对齐</span></span>
<span class="line"><span style="color:#A6ACCD;">| :---- |</span></span>
<span class="line"><span style="color:#A6ACCD;">向右对齐</span></span>
<span class="line"><span style="color:#A6ACCD;">| ----: |</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="引用图片" tabindex="-1">引用图片 <a class="header-anchor" href="#引用图片" aria-hidden="true">#</a></h2><h3 id="roll-github-start" tabindex="-1">Roll Github Start <a class="header-anchor" href="#roll-github-start" aria-hidden="true">#</a></h3><p><img src="https://ghchart.rshah.org/ddkkkk11" alt="Roll&#39;s Github chart"></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">![</span><span style="color:#C3E88D;">Roll&#39;s Github chart</span><span style="color:#89DDFF;">](</span><span style="color:#A6ACCD;text-decoration:underline;">https://ghchart.rshah.org/ddkkkk11</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div><p><a href="https://gogogo7.com/" target="_blank" rel="noreferrer">博客地址</a></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">图片引用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">博客地址</span><span style="color:#89DDFF;">][</span><span style="color:#F07178;">变量名</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#F07178;">变量名</span><span style="color:#89DDFF;">]:</span><span style="color:#F07178;"> </span><span style="color:#F07178;text-decoration:underline;">https://gogogo7.com/</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="区块" tabindex="-1">区块 <a class="header-anchor" href="#区块" aria-hidden="true">#</a></h2><pre><code>这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域
</code></pre><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">title</span></span>
<span class="line"><span style="color:#A6ACCD;">    //前面有四个空格。这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域</span></span>
<span class="line"><span style="color:#A6ACCD;">    ,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是区域,这里是</span></span>
<span class="line"><span style="color:#A6ACCD;">    区域,这里是区域,这里是区域</span></span>
<span class="line"></span></code></pre></div><h2 id="分割线" tabindex="-1">分割线 <a class="header-anchor" href="#分割线" aria-hidden="true">#</a></h2><hr><p>语法: ---</p><h2 id="任务块" tabindex="-1">任务块 <a class="header-anchor" href="#任务块" aria-hidden="true">#</a></h2><ul><li>[x] 未完成</li><li>[ ] 已完成</li></ul><hr><h2 id="折叠区域" tabindex="-1">折叠区域 <a class="header-anchor" href="#折叠区域" aria-hidden="true">#</a></h2><details><summary>小工具</summary><ul><li><a href="https://tucdn.wpon.cn/" target="_blank" rel="noreferrer">免费快速的图床</a></li></ul></details><div class="language-MD"><button title="Copy Code" class="copy"></button><span class="lang">MD</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;details&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;summary&gt;小工具&lt;/summary&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">//这里必须空行 不然下面的排序会消失</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">免费快速的图床</span><span style="color:#89DDFF;">](</span><span style="color:#F07178;text-decoration:underline;">https://tucdn.wpon.cn/</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/details&gt;</span></span>
<span class="line"></span></code></pre></div>`,34),o=[t];function p(c,r,i,d,h,y){return a(),l("div",null,o)}const g=s(e,[["render",p]]);export{D as __pageData,g as default};
