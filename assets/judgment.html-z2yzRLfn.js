import{_ as s,o as n,c as a,e as l}from"./app-Pv5VR2ZK.js";const o={},p=l(`<blockquote><p>通过 js 判断 moblie 端和 pc 端进而加载不同的 css 或者 js</p></blockquote><h2 id="废话不多说-上代码" tabindex="-1"><a class="header-anchor" href="#废话不多说-上代码" aria-hidden="true">#</a> 废话不多说，上代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;font-style:italic;">type</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;text/javascript&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">function browserRedirect() </span><span style="color:#C678DD;">{</span></span>
<span class="line"><span style="color:#E06C75;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">sUserAgent</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">navigator</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">userAgent</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">toLowerCase</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#E06C75;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsIpad</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sUserAgent</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">match</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/ipad/</span><span style="color:#C678DD;">i</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;ipad&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsIphoneOs</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sUserAgent</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">match</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/iphone os/</span><span style="color:#C678DD;">i</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;iphone os&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsMidp</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sUserAgent</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">match</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/midp/</span><span style="color:#C678DD;">i</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;midp&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsUc7</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sUserAgent</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">match</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/rv:1.2.3.4/</span><span style="color:#C678DD;">i</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;rv:1.2.3.4&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsUc</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sUserAgent</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">match</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/ucweb/</span><span style="color:#C678DD;">i</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;ucweb&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsAndroid</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sUserAgent</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">match</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/android/</span><span style="color:#C678DD;">i</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;android&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsCE</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sUserAgent</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">match</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/windows ce/</span><span style="color:#C678DD;">i</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;windows ce&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E06C75;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsWM</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">sUserAgent</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">match</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">/windows mobile/</span><span style="color:#C678DD;">i</span><span style="color:#ABB2BF;">) </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;windows mobile&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// document.writeln(&quot;您的浏览设备为：&quot;);</span></span>
<span class="line"><span style="color:#61AFEF;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">bIsIpad</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsIphoneOs</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsMidp</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsUc7</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsUc</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsAndroid</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsCE</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">bIsWM</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// alert(&quot;手机浏览！&quot;);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">} </span><span style="color:#E06C75;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// alert(&quot;PC浏览！&quot;);</span></span>
<span class="line"><span style="color:#ABB2BF;">document.write(</span><span style="color:#98C379;">&quot;&lt;script type=&#39;text/javascript&#39; size=&#39;150&#39; alpha=&#39;0.8&#39; zIndex=&#39;-10&#39; src=&#39;../js/dist/ribbon.js&#39;&gt;&lt;</span><span style="color:#56B6C2;">\\/</span><span style="color:#98C379;">script&gt;&quot;</span><span style="color:#E06C75;">);</span></span>
<span class="line"><span style="color:#E06C75;">document.write(</span><span style="color:#98C379;">&quot;&lt;script type=&#39;text/javascript&#39; color=&#39;0,188,212&#39; opacity=&#39;0.7&#39; zIndex=&#39;-2&#39; count=&#39;99&#39; src=&#39;http://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js&#39;&gt;&lt;</span><span style="color:#56B6C2;">\\/</span><span style="color:#98C379;">script&gt;&quot;</span><span style="color:#E06C75;">);</span></span>
<span class="line"><span style="color:#E06C75;">	}</span></span>
<span class="line"><span style="color:#E06C75;">}</span></span>
<span class="line"><span style="color:#E06C75;">browserRedirect();</span></span>
<span class="line"><span style="color:#E06C75;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需要注意的是字符转义和引号嵌套的问题" tabindex="-1"><a class="header-anchor" href="#需要注意的是字符转义和引号嵌套的问题" aria-hidden="true">#</a> 需要注意的是字符转义和引号嵌套的问题</h3>`,4),e=[p];function t(c,r){return n(),a("div",null,e)}const y=s(o,[["render",t],["__file","judgment.html.vue"]]);export{y as default};
