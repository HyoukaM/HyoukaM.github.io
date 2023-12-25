import{_ as l,r as e,o,c as p,a as s,b as n,d as c,e as r}from"./app-Pv5VR2ZK.js";const i={},t=s("blockquote",null,[s("p",null,"最近一直在忙，今天抽空写一下 H5 和 Native 的交互")],-1),B=s("h2",{id:"一、选择",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#一、选择","aria-hidden":"true"},"#"),n(" 一、选择")],-1),d=s("li",null,"项目本身 webview 使用的是 WKWebview，其实 WKWebview 自带的 messageHandle 也可以满足此需求",-1),y=s("li",null,[n("JSContext,源自于 JavaScriptCore 框架中的东西，最后不使用此方案源于一下几点 "),s("ul",null,[s("li",null,"但是其中繁杂的字符串使用，让我觉的可能会由于粗心出现不可预知的错误"),s("li",null,"加载时机的问题，当你重新 loadrequest 的时候，会导致 js 注入失败"),s("li",null,"回调方法略复杂")])],-1),F=s("li",null,"使用简单，注册完毕之后设置完代理，只需要负责注册方法和调用方法",-1),A=s("li",null,"回调简单，两端回调 responsecallback 包含在注册的方法中。使用 block",-1),u={href:"https://github.com/wendux/WebViewJavascriptBridge",target:"_blank",rel:"noopener noreferrer"},v=s("li",null,"Ps :关于 Android 版本库，其中很多是按照 iOS 版的 JavaScriptBridge 改写的。但是其中有很多问题，尤其是各种调用时机问题，上面的链接是经过我旁边的 Android 小哥试了四五个版本之后发现的，修复了各种改写版的问题",-1),b=r(`<h2 id="二、使用" tabindex="-1"><a class="header-anchor" href="#二、使用" aria-hidden="true">#</a> 二、使用</h2><ul><li>首先需要引入 WebViewJavascriptBridge 库</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;WebViewJavascriptBridge.h&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>初始化，此处为了方便子类使用，所以在基类中注册 bridge，并 return bridge 对象，方便子类调用</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#pragma mark</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">- 桥接</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)InitializeWebViewJavascriptBridge {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 注册桥接</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">bridge</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [SWHybridManager </span><span style="color:#61AFEF;">setJavaScriptBridgeWithWebView:</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.webView </span><span style="color:#61AFEF;">controller:</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[WKWebViewJavascriptBridge </span><span style="color:#61AFEF;">enableLogging</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">WKWebViewJavascriptBridge *bridge </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [WKWebViewJavascriptBridge </span><span style="color:#61AFEF;">bridgeForWebView:</span><span style="color:#ABB2BF;">webView];</span></span>
<span class="line"><span style="color:#ABB2BF;">[bridge </span><span style="color:#61AFEF;">setWebViewDelegate:</span><span style="color:#ABB2BF;">controller];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注册方法供 JavaScript 调用</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">__weak </span><span style="color:#61AFEF;">typeof</span><span style="color:#ABB2BF;">(controller)wController </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> controller;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/****************************公共方法注册-Start*********************/</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//MARK:打开窗体</span></span>
<span class="line"><span style="color:#ABB2BF;">    [bridge </span><span style="color:#61AFEF;">registerHandler:</span><span style="color:#ABB2BF;">HandlerFunctionNameOpenWindow </span><span style="color:#61AFEF;">handler:</span><span style="color:#ABB2BF;">^(</span><span style="color:#C678DD;">id</span><span style="color:#ABB2BF;"> data, WVJBResponseCallback responseCallback) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        __strong </span><span style="color:#61AFEF;">typeof</span><span style="color:#ABB2BF;">(wController)</span><span style="color:#E06C75;">sController</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> wController;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#56B6C2;">NSLog</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">@&quot;</span><span style="color:#56B6C2;">\\n</span><span style="color:#98C379;">调用了openWindow: </span><span style="color:#D19A66;">%@</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">, data);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">NSDictionary</span><span style="color:#ABB2BF;"> *dict </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">NSDictionary</span><span style="color:#ABB2BF;"> *)data;</span></span>
<span class="line"><span style="color:#ABB2BF;">        SWOpenWindowModel *model </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [SWOpenWindowModel </span><span style="color:#61AFEF;">yy_modelWithDictionary:</span><span style="color:#ABB2BF;">dict];</span></span>
<span class="line"><span style="color:#ABB2BF;">        [</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">pushViewController:</span><span style="color:#E06C75;">sController</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">data:</span><span style="color:#ABB2BF;">model </span><span style="color:#61AFEF;">responseCallback:</span><span style="color:#ABB2BF;">responseCallback];</span></span>
<span class="line"><span style="color:#ABB2BF;">    }];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>调用 JavaScript 方法</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.bridge </span><span style="color:#61AFEF;">callHandler:</span><span style="color:#ABB2BF;">callFunctionNameGetSearchKeyWord </span><span style="color:#61AFEF;">data:</span><span style="color:#ABB2BF;">json];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、方法名定义" tabindex="-1"><a class="header-anchor" href="#三、方法名定义" aria-hidden="true">#</a> 三、方法名定义</h2><ul><li>因为方法名的定义是字符串，所以建议采用常量字符串，防止拼写错误</li><li>其次不建议采用宏定义</li><li>我采用以下方法</li><li>桥接管理类的.h</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**打开窗体 */</span></span>
<span class="line"><span style="color:#ABB2BF;">FOUNDATION_EXPORT  </span><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> *</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> HandlerFunctionNameOpenWindow;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/** 关闭窗口*/</span></span>
<span class="line"><span style="color:#ABB2BF;">FOUNDATION_EXPORT  </span><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> *</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> HandlerFunctionNameCloseWindow;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>桥接管理类的.m</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**打开窗体 */</span></span>
<span class="line"><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> *</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> HandlerFunctionNameOpenWindow </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">@&quot;openWindow&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">/** 关闭窗口*/</span></span>
<span class="line"><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> *</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> HandlerFunctionNameCloseWindow </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">@&quot;closeWindow&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用时直接使用常量字符串即可</li><li>注意点：如类似我使用在基类传入控制器和 webview 到管理类中，在类中使用 controller 要注意循环引用，否则会导致控制器无法释放</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">+ (WKWebViewJavascriptBridge *)setJavaScriptBridgeWithWebView:(WKWebView *)webView controller:(__kindof SWBaseWebViewController *)controller;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">__weak </span><span style="color:#61AFEF;">typeof</span><span style="color:#ABB2BF;">(controller)wController </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> controller; </span><span style="color:#7F848E;font-style:italic;">// 弱引用传入控制器</span></span>
<span class="line"><span style="color:#ABB2BF;">__strong </span><span style="color:#61AFEF;">typeof</span><span style="color:#ABB2BF;">(wController)</span><span style="color:#E06C75;">sController</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> wController; </span><span style="color:#7F848E;font-style:italic;">// 在block内部强引用</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、数据传输" tabindex="-1"><a class="header-anchor" href="#四、数据传输" aria-hidden="true">#</a> 四、数据传输</h2><ul><li>iOS 端直接返回字典即可</li><li>我代码中是返回 json 字符串，为了与 Android 统一，方便 H5 解析数据</li></ul><h2 id="五、javascript-代码" tabindex="-1"><a class="header-anchor" href="#五、javascript-代码" aria-hidden="true">#</a> 五、JavaScript 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">setupWebViewJavascriptBridge</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">callback</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">WebViewJavascriptBridge</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">callback</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">WebViewJavascriptBridge</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">WVJBCallbacks</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">WVJBCallbacks</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">callback</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">window</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">WVJBCallbacks</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#E06C75;">callback</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">WVJBIframe</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;iframe&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">WVJBIframe</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">style</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">display</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;none&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">WVJBIframe</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">src</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;https://__bridge_loaded__&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">documentElement</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">appendChild</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">WVJBIframe</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">setTimeout</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">documentElement</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">removeChild</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">WVJBIframe</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">setupWebViewJavascriptBridge</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">bridge</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/* Initialize your app here */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">bridge</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">registerHandler</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;JS Echo&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">responseCallback</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;JS Echo called with:&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">responseCallback</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">bridge</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">callHandler</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&quot;ObjC Echo&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    { </span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;value&quot;</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">responseCallback</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">responseData</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;JS received response:&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">responseData</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  );</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、注意事项" tabindex="-1"><a class="header-anchor" href="#六、注意事项" aria-hidden="true">#</a> 六、注意事项</h2><ul><li>如果产生调用不通的问题，多为 JavaScript 调用时机问题</li><li>注意桥接的代理</li></ul>`,23);function m(C,E){const a=e("ExternalLinkIcon");return o(),p("div",null,[t,B,s("ul",null,[d,y,s("li",null,[n("JavaScriptBridge，最后选择此库源于以下几点 "),s("ul",null,[F,A,s("li",null,[n("三端通用，JavaScript 和 iOS、Android 都可以（"),s("a",u,[n("Android 版本库"),c(a)]),n("）")]),v])])]),b])}const g=l(i,[["render",m],["__file","JavaScriptBridge.html.vue"]]);export{g as default};
