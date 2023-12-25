import{_ as r,r as a,o as p,c as B,d as n,w as o,b as l,a as s,e as y}from"./app-Pv5VR2ZK.js";const d={},m=y('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>最近在做SEO，因为链接没有做同步，需要清除之前旧站的链接，重新提交，让搜索引擎尽快索引，google search console的已经基本做差不多了</p><p>bing最近因为 <em>New Bing</em> 的原因也用的比较多，所以做了一些工作，很方便的是，它可以直接同步GSC的站点数据，不过就只是域数据，URL还是要自己提交</p><p>为了尽快索引，只提交sitemap是不够的，还需要调用API手动提交URL</p></div><h3 id="官方示例" tabindex="-1"><a class="header-anchor" href="#官方示例" aria-hidden="true">#</a> 官方示例</h3><figure><img src="https://s3.bmp.ovh/imgs/2023/03/24/25889c6c306381f8.png" alt="bing example" tabindex="0" loading="lazy"><figcaption>bing example</figcaption></figure><h3 id="python代码" tabindex="-1"><a class="header-anchor" href="#python代码" aria-hidden="true">#</a> python代码</h3>',4),u=s("div",{class:"language-python line-numbers-mode","data-ext":"py"},[s("pre",{class:"shiki one-dark-pro",style:{"background-color":"#282c34"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"#!/usr/bin/python3")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# -*- coding: UTF-8 -*-")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," requests")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"import"),s("span",{style:{color:"#ABB2BF"}}," xml.etree.ElementTree "),s("span",{style:{color:"#C678DD"}},"as"),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"ET")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 指定Sitemap的URL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"sitemap_url "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"https://example.com/sitemap.xml"')]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 提取Sitemap中的URL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"response "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," requests."),s("span",{style:{color:"#61AFEF"}},"get"),s("span",{style:{color:"#ABB2BF"}},"(sitemap_url)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"sitemap_xml "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," response.content")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"sitemap_root "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"ET"),s("span",{style:{color:"#ABB2BF"}},"."),s("span",{style:{color:"#61AFEF"}},"fromstring"),s("span",{style:{color:"#ABB2BF"}},"(sitemap_xml)")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"urls "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," []")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"for"),s("span",{style:{color:"#ABB2BF"}}," child "),s("span",{style:{color:"#C678DD"}},"in"),s("span",{style:{color:"#ABB2BF"}}," sitemap_root:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    url "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," child["),s("span",{style:{color:"#D19A66"}},"0"),s("span",{style:{color:"#ABB2BF"}},"].text")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    urls."),s("span",{style:{color:"#61AFEF"}},"append"),s("span",{style:{color:"#ABB2BF"}},"(url)")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#7F848E","font-style":"italic"}},"# 调用Bing API提交URL")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"bing_api_key "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},`"your's API Key"`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"bing_api_url "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#98C379"}},'"https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey="'),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#56B6C2"}},"+"),s("span",{style:{color:"#ABB2BF"}}," bing_api_key")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"headers "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," {"),s("span",{style:{color:"#98C379"}},'"Content-Type"'),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"application/json"'),s("span",{style:{color:"#ABB2BF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"data "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#98C379"}},'"siteUrl"'),s("span",{style:{color:"#ABB2BF"}},": "),s("span",{style:{color:"#98C379"}},'"https://example.me"'),s("span",{style:{color:"#ABB2BF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#98C379"}},'"urlList"'),s("span",{style:{color:"#ABB2BF"}},": urls")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"response "),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}}," requests."),s("span",{style:{color:"#61AFEF"}},"post"),s("span",{style:{color:"#ABB2BF"}},"(bing_api_url, "),s("span",{style:{color:"#E06C75","font-style":"italic"}},"json"),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}},"data, "),s("span",{style:{color:"#E06C75","font-style":"italic"}},"headers"),s("span",{style:{color:"#56B6C2"}},"="),s("span",{style:{color:"#ABB2BF"}},"headers)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"if"),s("span",{style:{color:"#ABB2BF"}}," response.status_code "),s("span",{style:{color:"#56B6C2"}},"=="),s("span",{style:{color:"#ABB2BF"}}," "),s("span",{style:{color:"#D19A66"}},"200"),s("span",{style:{color:"#ABB2BF"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#56B6C2"}},"print"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#98C379"}},'"URLs submitted successfully!"'),s("span",{style:{color:"#ABB2BF"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C678DD"}},"else"),s("span",{style:{color:"#ABB2BF"}},":")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ABB2BF"}},"    "),s("span",{style:{color:"#56B6C2"}},"print"),s("span",{style:{color:"#ABB2BF"}},"("),s("span",{style:{color:"#98C379"}},'"Error submitting URLs: "'),s("span",{style:{color:"#ABB2BF"}},", response.content)")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),A=s("h3",{id:"解读",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#解读","aria-hidden":"true"},"#"),l(" 解读")],-1),b=s("p",null,"在上面的脚本中，我们首先指定了Sitemap的URL。然后，我们使用Python中的requests库获取Sitemap的内容，并使用Python中的xml.etree.ElementTree库解析Sitemap中的URL。",-1),F=s("p",null,"接下来，我们使用Bing API提交URL。我们首先指定Bing API的密钥和API URL，并设置请求头。然后，我们将Sitemap中提取的URL列表作为数据，将其作为JSON格式发送到Bing API。最后，我们检查响应的状态码，以确保URL已成功提交。",-1),h={href:"https://example.com",target:"_blank",rel:"noopener noreferrer"},_=s("p",null,"API密钥生成↘️",-1),v={href:"https://www.bing.com/webmasters/",target:"_blank",rel:"noopener noreferrer"},g=s("li",null,"右上角设置",-1),C=s("figure",null,[s("img",{src:"https://s3.bmp.ovh/imgs/2023/03/24/6fb703876007f6b6.png",alt:"API密钥生成",width:"500",tabindex:"0",loading:"lazy"}),s("figcaption",null,"API密钥生成")],-1);function f(x,E){const t=a("CodeTabs"),e=a("ExternalLinkIcon");return p(),B("div",null,[m,n(t,{id:"20",data:[{id:"python"}]},{title0:o(({value:c,isActive:i})=>[l("python")]),tab0:o(({value:c,isActive:i})=>[u]),_:1}),A,b,F,s("p",null,[l('注意：在使用Bing API提交URL之前，需要先注册Bing Webmaster工具，并获取Bing API密钥。还需要将"'),s("a",h,[l("https://example.com"),n(e)]),l('"替换为自己的站点URL。')]),_,s("ol",null,[s("li",null,[l("访问"),s("a",v,[l("Bing Webmaster Tools"),n(e)])]),g]),C])}const L=r(d,[["render",f],["__file","submit-bing.html.vue"]]);export{L as default};
