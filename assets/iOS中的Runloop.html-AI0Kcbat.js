const o=JSON.parse('{"key":"v-77cf1fd8","path":"/posts/iOS/system/iOS%E4%B8%AD%E7%9A%84Runloop.html","title":"Runloop","lang":"zh-CN","frontmatter":{"date":"2016-12-26T13:39:59.000Z","category":["iOS"],"tag":["iOS"],"description":"Runloop Runloop 是什么 Runloop 是事件接收和分发机制的一个实现。 Runloop 提供了一种异步执行代码的机制，不能并行执行任务。 在主队列中，Main RunLoop 直接配合任务的执行，负责处理 UI 事件、定时器以及其他内核相关事件。 ###Runloop 的主要目的 保证执行程序的线程不会被终止 ###什么时候使用 Runloop 当需要和该线程进行交互的时候才会使用 Runloop 每一个线程都有其对应的 RunLoop，但是默认非主线程的 RunLoop 是没有运行的，需要为 RunLoop 添加至少一个事件源，然后去 run 它。 一般情况下我们是没有必要去启用线程的 RunLoop 的，除非你在一个单独的线程中需要长久的检测某个事件。 主线程 默认有 Runloop。当自己启动一个线程，如果只是用于处理单一的事件，则该线程在执行完之后就退出了。所以当我们需要让该线程监听某项事务时，就得让线程一直不退出，runloop 就是这么一个循环，没有事件的时候，一直卡着，有事件来临了，执行其对应的函数。","head":[["meta",{"property":"og:url","content":"https://hyouka.link/posts/iOS/system/iOS%E4%B8%AD%E7%9A%84Runloop.html"}],["meta",{"property":"og:site_name","content":"hyouka"}],["meta",{"property":"og:title","content":"Runloop"}],["meta",{"property":"og:description","content":"Runloop Runloop 是什么 Runloop 是事件接收和分发机制的一个实现。 Runloop 提供了一种异步执行代码的机制，不能并行执行任务。 在主队列中，Main RunLoop 直接配合任务的执行，负责处理 UI 事件、定时器以及其他内核相关事件。 ###Runloop 的主要目的 保证执行程序的线程不会被终止 ###什么时候使用 Runloop 当需要和该线程进行交互的时候才会使用 Runloop 每一个线程都有其对应的 RunLoop，但是默认非主线程的 RunLoop 是没有运行的，需要为 RunLoop 添加至少一个事件源，然后去 run 它。 一般情况下我们是没有必要去启用线程的 RunLoop 的，除非你在一个单独的线程中需要长久的检测某个事件。 主线程 默认有 Runloop。当自己启动一个线程，如果只是用于处理单一的事件，则该线程在执行完之后就退出了。所以当我们需要让该线程监听某项事务时，就得让线程一直不退出，runloop 就是这么一个循环，没有事件的时候，一直卡着，有事件来临了，执行其对应的函数。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-18T09:34:59.000Z"}],["meta",{"property":"article:author","content":"Hyouka"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:published_time","content":"2016-12-26T13:39:59.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-18T09:34:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Runloop\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2016-12-26T13:39:59.000Z\\",\\"dateModified\\":\\"2023-12-18T09:34:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hyouka\\",\\"url\\":\\"https://hyouka.link\\"}]}"]]},"headers":[{"level":3,"title":"Runloop 是什么","slug":"runloop-是什么","link":"#runloop-是什么","children":[]}],"git":{"createdTime":1702892099000,"updatedTime":1702892099000,"contributors":[{"name":"hyouka","email":"838611931@qq.com","commits":1}]},"readingTime":{"minutes":3.16,"words":948},"filePathRelative":"posts/iOS/system/iOS中的Runloop.md","localizedDate":"2016年12月26日","excerpt":"<h1> Runloop</h1>\\n<h3> Runloop 是什么</h3>\\n<ul>\\n<li>Runloop 是事件接收和分发机制的一个实现。\\n<ul>\\n<li>Runloop 提供了一种异步执行代码的机制，不能并行执行任务。</li>\\n<li>在主队列中，Main RunLoop 直接配合任务的执行，负责处理 UI 事件、定时器以及其他内核相关事件。</li>\\n</ul>\\n</li>\\n</ul>\\n<p>###Runloop 的主要目的</p>\\n<ul>\\n<li>保证执行程序的线程不会被终止</li>\\n</ul>\\n<p>###什么时候使用 Runloop</p>\\n<ul>\\n<li>\\n<p>当需要和该线程进行交互的时候才会使用 Runloop</p>\\n</li>\\n<li>\\n<p>每一个线程都有其对应的 RunLoop，但是默认非主线程的 RunLoop 是没有运行的，需要为 RunLoop 添加至少一个事件源，然后去 run 它。</p>\\n</li>\\n<li>\\n<p>一般情况下我们是没有必要去启用线程的 RunLoop 的，除非你在一个单独的线程中需要长久的检测某个事件。</p>\\n</li>\\n<li>\\n<p>主线程 默认有 Runloop。当自己启动一个线程，如果只是用于处理单一的事件，则该线程在执行完之后就退出了。所以当我们需要让该线程监听某项事务时，就得让线程一直不退出，runloop 就是这么一个循环，没有事件的时候，一直卡着，有事件来临了，执行其对应的函数。</p>\\n</li>\\n</ul>","copyright":{"author":"Oragekk","license":"CC BY-NC-SA 4.0"},"autoDesc":true}');export{o as data};
