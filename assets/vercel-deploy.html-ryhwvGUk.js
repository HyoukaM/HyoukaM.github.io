import{_ as p,r as o,o as c,c as i,a as s,d as n,w as t,b as e,f as r,e as d}from"./app-Pv5VR2ZK.js";const B={},u={class:"table-of-contents"},y=s("p",null,"一招教你解决Vercel deploy时总是任意分支都可以触发，如果你的项目有多个分支，可以指定某一个或几个有提交时触发deploy",-1),_=d(`<h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1. 前言</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这不是刚把博客部署从GitHub Pages转移到了Vercel上，稍微加快了一点国内的访问速度，然后发现了一个新问题~</p><p>原先是推送到<code>main</code>分之，通过Github Action 工作流进行部署到<code>gh-page</code> 分支上</p><p>转移到Vercel之后，工作流我并没有删掉，所以流程还是一样，就导致<code>main</code>提交了---&gt;Action----&gt;<code>gh-page</code>提交</p><p>会触发两次Vercel的部署，当然<code>gh-page</code>是存放静态页面的分支，buid肯定是失败的。下边来解决这个问题吧</p></div><h2 id="_2-步骤" tabindex="-1"><a class="header-anchor" href="#_2-步骤" aria-hidden="true">#</a> 2. 步骤</h2><p>如图所示，打开setting-Git-Ignored Build Step</p><p>启用“忽略构建步骤”字段。如果命令返回“0”，则将跳过构建。但是，如果返回代码“1”或更大，则将生成新的部署。</p><p>我是使用系统环境变量来做的，方式有很多，看自己方便吧，在Command处输入以下脚本表示只构建main分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> [ </span><span style="color:#98C379;">&quot;</span><span style="color:#E06C75;">$VERCEL_GIT_COMMIT_REF</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;main&quot;</span><span style="color:#ABB2BF;"> ]; </span><span style="color:#C678DD;">then</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">exit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">exit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">fi</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>系统环境变量默认是曝光的，如果不生效，在Environment Variables 中勾选</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Automatically expose System Environment Variables</label></li></ul><figure><img src="https://s3.bmp.ovh/imgs/2023/03/31/5ae4ba35bd181dcf.png" alt="setting-Git-Ignored Build Step" tabindex="0" loading="lazy"><figcaption>setting-Git-Ignored Build Step</figcaption></figure><h2 id="_3-使用脚本" tabindex="-1"><a class="header-anchor" href="#_3-使用脚本" aria-hidden="true">#</a> 3. 使用脚本</h2><p>要在“忽略构建步骤”中运行 bash 脚本，您需要在该字段中设置以下内容：请注意该文件应该存在于您的存储库中。 bash 脚本示例： bash script.shbash 脚本的示例：<code>bash script.sh</code></p><p><strong>注意</strong> 您也可以使用 Node 脚本（例如 ）。<code>node ignore-step.js</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;VERCEL_ENV: </span><span style="color:#E06C75;">$VERCEL_ENV</span><span style="color:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> [[ </span><span style="color:#98C379;">&quot;</span><span style="color:#E06C75;">$VERCEL_ENV</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;production&quot;</span><span style="color:#ABB2BF;"> ]] ; </span><span style="color:#C678DD;">then</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Proceed with the build</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;✅ - Build can proceed&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">exit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">else</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Don&#39;t build</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;🛑 - Build cancelled&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">exit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">fi</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个示例 Ignored Build Step 脚本，其中只允许部署对生产环境所做的提交。应将环境变量“VERCEL_ENV”添加到您的项目中。</p><p>通过使用此命令，Vercel 将仅在“VERCEL_ENV”的值为“production”时构建部署。该变量已添加到环境变量 UI，使其可用于项目。</p><h2 id="_4-使用环境变量" tabindex="-1"><a class="header-anchor" href="#_4-使用环境变量" aria-hidden="true">#</a> 4. <a href="#_7-%E7%B3%BB%E7%BB%9F%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E4%B8%80%E8%A7%88%E8%A1%A8">使用环境变量</a></h2><p>您可以直接在 Ignored Build Step 字段中创建引用系统环境变量的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> [ </span><span style="color:#98C379;">&quot;</span><span style="color:#E06C75;">$VERCEL_ENV</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;production&quot;</span><span style="color:#ABB2BF;"> ]; </span><span style="color:#C678DD;">then</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">exit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">exit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#C678DD;">fi</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个示例 Ignored Build Step 命令，其中只允许部署对生产环境所做的提交。</p><p>下面是一个示例脚本，它将有条件地构建某些分支：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;VERCEL_GIT_COMMIT_REF: </span><span style="color:#E06C75;">$VERCEL_GIT_COMMIT_REF</span><span style="color:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> [[ </span><span style="color:#98C379;">&quot;</span><span style="color:#E06C75;">$VERCEL_GIT_COMMIT_REF</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;staging&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;</span><span style="color:#E06C75;">$VERCEL_GIT_COMMIT_REF</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;main&quot;</span><span style="color:#ABB2BF;">  ]] ; </span><span style="color:#C678DD;">then</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Proceed with the build</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;✅ - Build can proceed&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">exit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">else</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Don&#39;t build</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">echo</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;🛑 - Build cancelled&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#56B6C2;">exit</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">fi</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个示例 Ignored Build Step 命令，其中只允许部署从分支“main”和“staging”进行的提交。</p><h2 id="_5-使用文件夹和工作区" tabindex="-1"><a class="header-anchor" href="#_5-使用文件夹和工作区" aria-hidden="true">#</a> 5. 使用文件夹和工作区</h2><p>在继续之前，请记住 Ignored Build Step 在您选择的“根目录”的同一文件夹中运行。因此，您可能需要稍微调整一下以适应您的需要。要构建仅考虑特定文件夹的新部署，您可以使用以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">diff</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">HEAD^</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">HEAD</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--quiet</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">./packages/frontend/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“忽略构建步骤”命令的示例。如果将更改提交给“./packages/frontend/”，该命令将产生一个非空响应，从而允许构建继续进行。<br> 通过使用此命令，Vercel 将仅在目录内进行更改时构建部署。如果该文件夹是您选择的“根目录”，则可以使用：<code>packages/frontend/\`\`./packages/frontend/</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">diff</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">HEAD^</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">HEAD</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--quiet</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“忽略的生成步骤”命令的示例。如果将更改提交到 “.”，则该命令将生成非空响应，从而允许继续生成。</p><p>您还可以访问部署中的其他文件夹以检查更改。如果您在构建前端时选择了“根目录”，并且您的应用程序必须仅在进行更改时部署，您可以使用： <code>packages/web</code> <code>../../packages/docs</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">git</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">diff</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">HEAD^</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">HEAD</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--quiet</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">../../packages/docs</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“忽略的生成步骤”命令的示例。如果将更改提交到“../../packages/docs“，该命令将产生一个非空响应，允许构建继续。</p><h2 id="_6-在本地调试命令" tabindex="-1"><a class="header-anchor" href="#_6-在本地调试命令" aria-hidden="true">#</a> 6. 在本地调试命令</h2><p>要在本地调试忽略的构建步骤命令，首先使用可以复制 Vercel 上可用设置的文件夹非常重要。为此，您可以应用以下步骤：</p><ol><li>使用 将存储库克隆到另一个文件夹。<code>git clone --depth=10 (...)</code></li><li>在终端中运行命令或脚本。</li><li>您可以使用 检查最后一个命令返回的退出代码。<code>echo $?</code></li></ol><h2 id="_7-系统环境变量一览表" tabindex="-1"><a class="header-anchor" href="#_7-系统环境变量一览表" aria-hidden="true">#</a> 7. 系统环境变量一览表</h2>`,36),h=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}},"名字"),s("th",{style:{"text-align":"left"}},"描述")])],-1),b=s("tr",null,[s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL")]),s("td",{style:{"text-align":"left"}},[e("指示应用已在 Vercel 上部署和运行的指示器。 例：。"),s("code",null,"1")])],-1),g=s("td",{style:{"text-align":"left"}},[s("code",null,"CI")],-1),v={style:{"text-align":"left"}},C={href:"https://en.wikipedia.org/wiki/Continuous_integration",target:"_blank",rel:"noopener noreferrer"},E=s("strong",null,"注意：",-1),f={href:"https://vercel.com/docs/concepts/deployments/configure-a-build",target:"_blank",rel:"noopener noreferrer"},A=s("code",null,"1",-1),m=s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_ENV")],-1),F={style:{"text-align":"left"}},x={href:"https://vercel.com/docs/concepts/projects/environment-variables#environments",target:"_blank",rel:"noopener noreferrer"},D=s("code",null,"production``preview``development",-1),k=s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_URL")],-1),V={style:{"text-align":"left"}},I={href:"https://vercel.com/docs/concepts/deployments/generated-urls",target:"_blank",rel:"noopener noreferrer"},R=s("code",null,"*.vercel.app``https://",-1),q=s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_REGION")],-1),L={style:{"text-align":"left"}},T={href:"https://vercel.com/docs/concepts/edge-network/regions",target:"_blank",rel:"noopener noreferrer"},G=s("strong",null,"注意：",-1),M={href:"https://vercel.com/docs/concepts/functions",target:"_blank",rel:"noopener noreferrer"},O=s("code",null,"cdg1",-1),S=s("tr",null,[s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_GIT_PROVIDER")]),s("td",{style:{"text-align":"left"}},[e("从中触发部署的 Git 提供程序。 例：。"),s("code",null,"github")])],-1),N=s("tr",null,[s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_GIT_REPO_SLUG")]),s("td",{style:{"text-align":"left"}},[e("从中触发部署的源存储库。 例：。"),s("code",null,"my-site")])],-1),H=s("tr",null,[s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_GIT_REPO_OWNER")]),s("td",{style:{"text-align":"left"}},[e("拥有从中触发部署的存储库的帐户。 例：。"),s("code",null,"acme")])],-1),w=s("tr",null,[s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_GIT_REPO_ID")]),s("td",{style:{"text-align":"left"}},[e("从中触发部署的存储库的 ID。 例：。"),s("code",null,"117716146")])],-1),U=s("tr",null,[s("td",{style:{"text-align":"left"}},[s("mark",null,[s("code",null,"VERCEL_GIT_COMMIT_REF")])]),s("td",{style:{"text-align":"left"}},[e("触发部署的提交的 git 分支。 例：。"),s("code",null,"improve-about-page")])],-1),P=s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_GIT_COMMIT_SHA")],-1),$={style:{"text-align":"left"}},j={href:"https://help.github.com/articles/github-glossary/#commit",target:"_blank",rel:"noopener noreferrer"},z=s("code",null,"fa1eade47b73733d6312d5abfad33ce9e4068081",-1),J=s("tr",null,[s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_GIT_COMMIT_MESSAGE")]),s("td",{style:{"text-align":"left"}},[e("附加到触发部署的提交的消息。 例：。"),s("code",null,"Update about page")])],-1),Q=s("tr",null,[s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_GIT_COMMIT_AUTHOR_LOGIN")]),s("td",{style:{"text-align":"left"}},[e("附加到部署项目的提交作者的用户名。 例：。"),s("code",null,"johndoe")])],-1),W=s("tr",null,[s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_GIT_COMMIT_AUTHOR_NAME")]),s("td",{style:{"text-align":"left"}},[e("附加到部署项目的提交的作者的名称。 例：。"),s("code",null,"John Doe")])],-1),K=s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_GIT_PREVIOUS_SHA")],-1),X={style:{"text-align":"left"}},Y={href:"https://help.github.com/articles/github-glossary/#commit",target:"_blank",rel:"noopener noreferrer"},Z=s("strong",null,"注意：",-1),ss={href:"https://vercel.com/docs/concepts/projects/overview#ignored-build-step",target:"_blank",rel:"noopener noreferrer"},es=s("code",null,"fa1eade47b73733d6312d5abfad33ce9e4068080",-1),ns=s("tr",null,[s("td",{style:{"text-align":"left"}},[s("code",null,"VERCEL_GIT_PULL_REQUEST_ID")]),s("td",{style:{"text-align":"left"}},[e("触发部署的拉取请求 ID。如果在发出拉取请求之前在分支上创建了部署，则此值将为空字符串。 例：。"),s("code",null,"23")])],-1);function ls(as,ts){const a=o("router-link"),l=o("ExternalLinkIcon");return c(),i("div",null,[s("nav",u,[s("ul",null,[s("li",null,[n(a,{to:"#_1-前言"},{default:t(()=>[e("1. 前言")]),_:1})]),s("li",null,[n(a,{to:"#_2-步骤"},{default:t(()=>[e("2. 步骤")]),_:1})]),s("li",null,[n(a,{to:"#_3-使用脚本"},{default:t(()=>[e("3. 使用脚本")]),_:1})]),s("li",null,[n(a,{to:"#_4-使用环境变量"},{default:t(()=>[e("4. 使用环境变量")]),_:1})]),s("li",null,[n(a,{to:"#_5-使用文件夹和工作区"},{default:t(()=>[e("5. 使用文件夹和工作区")]),_:1})]),s("li",null,[n(a,{to:"#_6-在本地调试命令"},{default:t(()=>[e("6. 在本地调试命令")]),_:1})]),s("li",null,[n(a,{to:"#_7-系统环境变量一览表"},{default:t(()=>[e("7. 系统环境变量一览表")]),_:1})])])]),y,r(" more "),_,s("table",null,[h,s("tbody",null,[b,s("tr",null,[g,s("td",v,[e("指示代码在"),s("a",C,[e("持续集成"),n(l)]),e("环境中运行的指示器。 例：。 "),E,e(" 此变量仅在"),s("a",f,[e("构建步骤"),n(l)]),e("期间公开。"),A])]),s("tr",null,[m,s("td",F,[e("部署和运行应用"),s("a",x,[e("的环境"),n(l)]),e("。该值可以是 、 或 。"),D])]),s("tr",null,[k,s("td",V,[s("a",I,[e("生成的部署 URL"),n(l)]),e(" 的域名。例：。该值不包括协议方案。"),R])]),s("tr",null,[q,s("td",L,[e("运行应用的"),s("a",T,[e("区域的"),n(l)]),e(" ID。 例：。 "),G,e(" 此变量仅在"),s("a",M,[e("无服务器函数"),n(l)]),e("的运行时公开。"),O])]),S,N,H,w,U,s("tr",null,[P,s("td",$,[e("触发部署的提交的 git "),s("a",j,[e("SHA"),n(l)]),e("。 例：。"),z])]),J,Q,W,s("tr",null,[K,s("td",X,[e("项目和分支的上次成功部署的 git "),s("a",Y,[e("SHA"),n(l)]),e("。 例：。 "),Z,e(" 仅当提供了"),s("a",ss,[e("忽略的生成步骤"),n(l)]),e("时，才会公开此变量。"),es])]),ns])])])}const ps=p(B,[["render",ls],["__file","vercel-deploy.html.vue"]]);export{ps as default};
