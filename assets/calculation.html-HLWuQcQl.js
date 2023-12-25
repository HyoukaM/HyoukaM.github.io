import{_ as p,r as i,o,c,a as s,b as n,d as e,e as a}from"./app-Pv5VR2ZK.js";const r={},t=a(`<h1 id="css-属性计算过程" tabindex="-1"><a class="header-anchor" href="#css-属性计算过程" aria-hidden="true">#</a> CSS 属性计算过程</h1><p>你是否了解 CSS 的属性计算过程呢？</p><p>有的同学可能会讲，CSS属性我倒是知道，例如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  color : </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的 CSS 代码中，p 是元素选择器，color 就是其中的一个 CSS 属性。</p><p>但是要说 CSS 属性的计算过程，还真的不是很清楚。</p><p>没关系，通过此篇文章，能够让你彻底明白什么是 CSS 属性的计算流程。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-13-060434.png" alt="image-20220813140434032" style="zoom:50%;"><p>首先，不知道你有没有考虑过这样的一个问题，假设在 HTML 中有这么一段代码：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;这是一个h1标题&lt;/</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码也非常简单，就是在 body 中有一个 h1 标题而已，该 h1 标题呈现出来的外观是如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-13-060724.png" alt="image-20220813140724136" style="zoom:50%;"><p>目前我们没有设置该 h1 的任何样式，但是却能看到该 h1 有一定的默认样式，例如有默认的字体大小、默认的颜色。</p><p>那么问题来了，我们这个 h1 元素上面除了有默认字体大小、默认颜色等属性以外，究竟还有哪些属性呢？</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-15-014216.png" alt="image-20220815094215982" style="zoom:30%;"><p>答案是**该元素上面会有 CSS 所有的属性。**你可以打开浏览器的开发者面板，选择【元素】，切换到【计算样式】，之后勾选【全部显示】，此时你就能看到在此 h1 上面所有 CSS 属性对应的值。</p><figure><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-13-061516.png" alt="image-20220813141516153" tabindex="0" loading="lazy"><figcaption>image-20220813141516153</figcaption></figure><p>换句话说，<strong>我们所书写的任何一个 HTML 元素，实际上都有完整的一整套 CSS 样式</strong>。这一点往往是让初学者比较意外的，因为我们平时在书写 CSS 样式时，往往只会书写必要的部分，例如前面的：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  color : </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这往往会给我们造成一种错觉，认为该 p 元素上面就只有 color 属性。而真实的情况确是，任何一个 HTML 元素，都有一套完整的 CSS 样式，只不过你没有书写的样式，<strong>大概率可能</strong>会使用其默认值。例如上图中 h1 一个样式都没有设置，全部都用的默认值。</p><p>但是注意，我这里强调的是“大概率可能”，难道还有我们“没有设置值，但是不使用默认值”的情况么？</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-15-014459.png" alt="image-20220815094458940" style="zoom:25%;"><p>嗯，确实有的，所以我才强调你要了解“CSS 属性的计算过程”。</p><p>总的来讲，属性值的计算过程，分为如下这么 <em>4</em> 个步骤：</p><ul><li>确定声明值</li><li>层叠冲突</li><li>使用继承</li><li>使用默认值</li></ul><h2 id="确定声明值" tabindex="-1"><a class="header-anchor" href="#确定声明值" aria-hidden="true">#</a> 确定声明值</h2><p>首先第一步，是确定声明值。所谓声明值就是作者自己所书写的 CSS 样式，例如前面的：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  color : </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们声明了 p 元素为红色，那么就会应用此属性设置。</p><p>当然，除了作者样式表，一般浏览器还会存在“用户代理样式表”，简单来讲就是浏览器内置了一套样式表。</p><figure><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-13-063500.png" alt="image-20220813143500066" tabindex="0" loading="lazy"><figcaption>image-20220813143500066</figcaption></figure><p>在上面的示例中，作者样式表中设置了 color 属性，而用户代理样式表（浏览器提供的样式表）中设置了诸如 display、margin-block-start、margin-block-end、margin-inline-start、margin-inline-end 等属性对应的值。</p><p>这些值目前来讲也没有什么冲突，因此最终就会应用这些属性值。</p><h2 id="层叠冲突" tabindex="-1"><a class="header-anchor" href="#层叠冲突" aria-hidden="true">#</a> 层叠冲突</h2><p>在确定声明值时，可能出现一种情况，那就是声明的样式规则发生了冲突。</p><p>此时会进入解决层叠冲突的流程。而这一步又可以细分为下面这三个步骤：</p><ul><li>比较源的重要性</li><li>比较优先级</li><li>比较次序</li></ul><p>来来来，我们一步一步来看。</p><h3 id="比较源的重要性" tabindex="-1"><a class="header-anchor" href="#比较源的重要性" aria-hidden="true">#</a> 比较源的重要性</h3><p>当不同的 CSS 样式来源拥有相同的声明时，此时就会根据样式表来源的重要性来确定应用哪一条样式规则。</p><p>那么问题来了，咱们的样式表的源究竟有几种呢？</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-23-100047.png" alt="image-20220823180047075" style="zoom:40%;"><p>整体来讲有三种来源：</p><ul><li>浏览器会有一个基本的样式表来给任何网页设置默认样式。这些样式统称<strong>用户代理样式</strong>。</li><li>网页的作者可以定义文档的样式，这是最常见的样式表，称之为<strong>页面作者样式</strong>。</li><li>浏览器的用户，可以使用自定义样式表定制使用体验，称之为<strong>用户样式</strong>。</li></ul><p>对应的重要性顺序依次为：页面作者样式 &gt; 用户样式 &gt; 用户代理样式</p>`,45),d=s("em",null,"MDN",-1),B={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Cascade",target:"_blank",rel:"noopener noreferrer"},y=a(`<p>我们来看一个示例。</p><p>例如现在有<strong>页面作者样式表</strong>和<strong>用户代理样式表</strong>中存在属性的冲突，那么会以作者样式表优先。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  color : </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  display: </span><span style="color:#D19A66;">inline-block</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-13-064222.png" alt="image-20220813144222152" tabindex="0" loading="lazy"><figcaption>image-20220813144222152</figcaption></figure><p>可以明显的看到，作者样式表和用户代理样式表中同时存在的 display 属性的设置，最终作者样式表干掉了用户代理样式表中冲突的属性。这就是第一步，根据不同源的重要性来决定应用哪一个源的样式。</p><h3 id="比较优先级" tabindex="-1"><a class="header-anchor" href="#比较优先级" aria-hidden="true">#</a> 比较优先级</h3><p>那么接下来，如果是在在同一个源中有样式声明冲突怎么办呢？此时就会进行样式声明的优先级比较。</p><p>例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;test&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;test&lt;/</span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#D19A66;">.test</span><span style="color:#C678DD;"> </span><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，同属于<strong>页面作者样式</strong>，源的重要性是相同的，此时会以选择器的权重来比较重要性。</p><p>很明显，上面的选择器的权重要大于下面的选择器，因此最终标题呈现为 <em>50px</em>。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-071546.png" alt="image-20210916151546500" style="zoom:40%;"><p>可以看到，落败的作者样式在 <em>Elements&gt;Styles</em> 中会被划掉。</p>`,14),g={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",target:"_blank",rel:"noopener noreferrer"},u=a(`<h3 id="比较次序" tabindex="-1"><a class="header-anchor" href="#比较次序" aria-hidden="true">#</a> 比较次序</h3><p>经历了上面两个步骤，大多数的样式声明能够被确定下来。但是还剩下最后一种情况，那就是样式声明既是同源，权重也相同。</p><p>此时就会进入第三个步骤，比较样式声明的次序。</p><p>举个例子：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">h1</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  font-size: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，同样都是<strong>页面作者样式</strong>，<strong>选择器的权重也相同</strong>，此时位于下面的样式声明会层叠掉上面的那一条样式声明，最终会应用 <em>20px</em> 这一条属性值。</p><figure><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-23-103928.png" alt="image-20220823183928330" tabindex="0" loading="lazy"><figcaption>image-20220823183928330</figcaption></figure><p>至此，样式声明中存在冲突的所有情况，就全部被解决了。</p><h2 id="使用继承" tabindex="-1"><a class="header-anchor" href="#使用继承" aria-hidden="true">#</a> 使用继承</h2><p>层叠冲突这一步完成后，解决了相同元素被声明了多条样式规则究竟应用哪一条样式规则的问题。</p><p>那么如果没有声明的属性呢？此时就使用默认值么？</p><p><em>No、No、No</em>，别急，此时还有第三个步骤，那就是使用继承而来的值。</p><p>例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;Lorem ipsum dolor sit amet.&lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们针对 div 设置了 color 属性值为红色，而针对 p 元素我们没有声明任何的属性，但是由于 color 是可以继承的，因此 p 元素从最近的 div 身上继承到了 color 属性的值。</p><figure><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-13-065102.png" alt="image-20220813145102293" tabindex="0" loading="lazy"><figcaption>image-20220813145102293</figcaption></figure><p>这里有两个点需要同学们注意一下。</p><p>首先第一个是我强调了是<strong>最近的</strong> div 元素，看下面的例子：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;test&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;Lorem ipsum dolor sit amet.&lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#D19A66;">.test</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">blue</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-13-065653.png" alt="image-20220813145652726" tabindex="0" loading="lazy"><figcaption>image-20220813145652726</figcaption></figure><p>因为这里并不涉及到选中 p 元素声明 color 值，而是从父元素上面继承到 color 对应的值，因此这里是<strong>谁近就听谁</strong>的，初学者往往会产生混淆，又去比较权重，但是这里根本不会涉及到权重比较，因为压根儿就没有选中到 p 元素。</p><p>第二个就是哪些属性能够继承？</p><p>关于这一点的话，大家可以在 MDN 上面很轻松的查阅到。例如我们以 text-align 为例，如下图所示：</p><figure><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-13-070148.png" alt="image-20220813150147885" tabindex="0" loading="lazy"><figcaption>image-20220813150147885</figcaption></figure><h2 id="使用默认值" tabindex="-1"><a class="header-anchor" href="#使用默认值" aria-hidden="true">#</a> 使用默认值</h2><p>好了，目前走到这一步，如果属性值都还不能确定下来，那么就只能是使用默认值了。</p><p>如下图所示：</p><figure><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-13-070825.png" alt="image-20220813150824752" tabindex="0" loading="lazy"><figcaption>image-20220813150824752</figcaption></figure><p>前面我们也说过，一个 HTML 元素要在浏览器中渲染出来，必须具备所有的 CSS 属性值，但是绝大部分我们是不会去设置的，用户代理样式表里面也不会去设置，也无法从继承拿到，因此最终都是用默认值。</p><p>好了，这就是关于 CSS 属性计算过程的所有知识了。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-14-154655.png" alt="image-20220814234654914" style="zoom:33%;"><h2 id="一道面试题" tabindex="-1"><a class="header-anchor" href="#一道面试题" aria-hidden="true">#</a> 一道面试题</h2><p>好了，学习了今天的内容，让我来用一道面试题测试测试大家的理解程度。</p><p>下面的代码，最终渲染出来的效果，a 元素是什么颜色？p 元素又是什么颜色？</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">href</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">&gt;test&lt;/</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;test&lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  color: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家能说出为什么会呈现这样的结果么？</p><p>解答如下：</p><figure><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-08-13-071941.png" alt="image-20220813151941113" tabindex="0" loading="lazy"><figcaption>image-20220813151941113</figcaption></figure><p>实际上原因很简单，因为 a 元素在用户代理样式表中已经设置了 color 属性对应的值，因此会应用此声明值。而在 p 元素中无论是作者样式表还是用户代理样式表，都没有对此属性进行声明，然而由于 color 属性是可以继承的，因此最终 p 元素的 color 属性值通过继承来自于父元素。</p><p>你答对了么？-）</p><hr><p>-<em>EOF</em>-</p>`,45);function m(v,h){const l=i("ExternalLinkIcon");return o(),c("div",null,[t,s("p",null,[n("更详细的来源重要性比较，可以参阅 "),d,n("："),s("em",null,[s("a",B,[n("https://developer.mozilla.org/zh-CN/docs/Web/CSS/Cascade"),e(l)])])]),y,s("p",null,[n("有关选择器权重的计算方式，不清楚的同学，可以进入此传送门："),s("em",null,[s("a",g,[n("https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"),e(l)])])]),u])}const A=p(r,[["render",m],["__file","calculation.html.vue"]]);export{A as default};
