import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.Cy5ZJKdt.js";const e="/linlei.github.io/assets/ws_img.CYYF9Q-_.png",p="/linlei.github.io/assets/ws_img02.Ddm_DOIN.png",h="/linlei.github.io/assets/big-file-upload.CdbzOrCO.png",l="/linlei.github.io/assets/webview-bridge.Cb_o7GA0.png",y=JSON.parse('{"title":"实践知识汇总","description":"","frontmatter":{},"headers":[],"relativePath":"interview/practice-skill.md","filePath":"interview/practice-skill.md"}'),r={name:"interview/practice-skill.md"};function k(o,s,g,d,c,E){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="实践知识汇总" tabindex="-1">实践知识汇总 <a class="header-anchor" href="#实践知识汇总" aria-label="Permalink to &quot;实践知识汇总&quot;">​</a></h1><p>实践知识汇总重要包括工作中经常需要使用的功能模块代码以及解决或优化问题的方案等等，包括防抖节流、懒加载处理等等。</p><h2 id="_1、前端如何一次性处理十万条数据" tabindex="-1">1、前端如何一次性处理十万条数据？ <a class="header-anchor" href="#_1、前端如何一次性处理十万条数据" aria-label="Permalink to &quot;1、前端如何一次性处理十万条数据？&quot;">​</a></h2><p><strong>(1) 分页加载</strong>：可以使用requestAnimationFrame 或者setTimeout时间动态分页加载数据；<br><strong>(2) 懒加载</strong>：可以监听用户下拉触底操作，动态加载数据，提高页面渲染速度和性能；<br><strong>(3) 虚拟列表加载</strong>：虚拟列表是一种在容器可见区域的动态渲染数据的技术，其优点是根据容器可视区域固定渲染的DOM节点，从而减少DOM操作，提高页面性能，如使用vue-virtual-scroller虚拟滚动方案；<br><strong>注意</strong>：需要解决的关键问题就是如何有效减少DOM节点的渲染</p><h3 id="_2、如何实现虚拟列表加载" tabindex="-1">2、如何实现虚拟列表加载? <a class="header-anchor" href="#_2、如何实现虚拟列表加载" aria-label="Permalink to &quot;2、如何实现虚拟列表加载?&quot;">​</a></h3><p><a href="https://juejin.cn/post/7389064690125832244" target="_blank" rel="noreferrer">虚拟列表实现参考</a></p><h3 id="_3、如何处理页面中大量图片加载" tabindex="-1">3、如何处理页面中大量图片加载？ <a class="header-anchor" href="#_3、如何处理页面中大量图片加载" aria-label="Permalink to &quot;3、如何处理页面中大量图片加载？&quot;">​</a></h3><p><strong>（1）图片懒加载</strong>：在容器不可视区域加一个滚动条事件，判断图片位置与浏览器顶端和页面的距离，如果前者小于后者，优先加载；</p><p><strong>（2）图片预加载</strong>：将当前展示图片的前一张和后一张优先</p><h3 id="_4、懒加载的原理是什么" tabindex="-1">4、懒加载的原理是什么 <a class="header-anchor" href="#_4、懒加载的原理是什么" aria-label="Permalink to &quot;4、懒加载的原理是什么&quot;">​</a></h3><p>  懒加载是一种优化技术，它允许在需要时才加载页面的一部分或全部资源，以减少初始加载时间和网络流量。懒加载的原理主要包括按需加载、异步加载、动态加载和延迟渲染等方面，其主要原理如下：</p><p>  <strong>(1)按需加载：</strong> 按需加载是懒加载的核心原理之一，它是指根据用户的需求来加载相应的资源，按需加载的优点在于，可以减少初始页面加载时间，提高页面响应速度和用户体验。由于只加载用户需要的资源，因此可以减少不必要的网络流量和带宽成本；</p><p>  <strong>(2)异步加载：</strong> 指将资源的加载推迟到用户需要使用时再进行。异步加载可以通过使用AJAX、Fetch等技术实现，它允许在不阻塞用户界面的情况下加载数据和其他资源；异步加载的优点在于，可以避免用户在等待资源加载时出现长时间的空白或延迟，提高用户体验。同时，异步加载还可以减轻服务器的负担，因为只需要在需要时加载数据或资源；</p><p>  <strong>(3)动态加载：</strong> 指根据用户的行为和需求，动态地生成和加载页面内容。在懒加载模式下，页面内容通常会被分解成多个小块，每个小块在需要时才被加载和呈现给用户。动态加载的优点在于，可以根据用户的需求动态地生成和加载页面内容，提高页面的灵活性和响应速度。同时，动态加载还可以减少初始页面加载时间，因为只需要加载必要的结构和资源；</p><p>  <strong>(4)延迟加载：</strong> 懒加载常常与延迟渲染技术结合使用，延迟渲染是指将页面的渲染过程推迟到用户需要查看时再进行。在懒加载模式下，页面的初始渲染只包含必要的结构和资源，而将其他非必要的资源通过延迟渲染的方式加载和呈现给用户；</p><h3 id="_5、什么是防抖和节流" tabindex="-1">5、什么是防抖和节流？ <a class="header-anchor" href="#_5、什么是防抖和节流" aria-label="Permalink to &quot;5、什么是防抖和节流？&quot;">​</a></h3><p><strong>（1）防抖</strong>：在既在指定的时间间隔内，无论连续触发了多少次事件，只有最后一次事件会在该间隔结束后执行；适用于搜索框输入、表单验证等场景，用户完成输入后，才执行相关操作；</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建一个防抖函数，它返回一个新的函数，该新函数在指定的 wait 时间后执行 func</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> debounce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">wait</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 保存定时器的引用</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timeout;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 返回的函数是用户实际调用的函数，它包含了防抖逻辑</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 保存当前的 this 上下文</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> context</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(context);  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 清除之前的定时器，如果存在</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (timeout) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clearTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(timeout);  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 设置一个新的定时器</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 当指定的 wait 时间过后，将执行 func 函数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 并将当前的 this 上下文和参数传入</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        timeout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 执行原始函数，绑定正确的 this 上下文和参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            func.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(context, args);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }, wait);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>（2）节流</strong>：既在指定的时间间隔内，无论连续触发了多少次事件，只有第一次事件执行，后续操作在该时间内都不会执行；适用于滚动事件、按钮点击等需要在连续事件中合理控制执行频率的场景；</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> throttle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">limit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inThrottle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> context</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 保存当前的 this 上下文</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">inThrottle) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 执行传入的函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            func.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(context, args);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            inThrottle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 标记为正在节流</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 使用闭包和 setTimeout 来在指定的延迟后重置 inThrottle</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                inThrottle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 重置节流状态</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }, limit);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_6、客户端中缓存数据的方式有哪些" tabindex="-1">6、客户端中缓存数据的方式有哪些？ <a class="header-anchor" href="#_6、客户端中缓存数据的方式有哪些" aria-label="Permalink to &quot;6、客户端中缓存数据的方式有哪些？&quot;">​</a></h2><p><strong>Cookies</strong>：<br>   <strong>(1) 特点</strong>：① 可以设置过期时间，客户端和服务端都可以修改；② 存储大小在4K以内， 不能超过50个cookie；③ 只能存储字符串类型；④容易受CSRF攻击；<br>   <strong>(2) 特点</strong>：主要用于跟踪客户会话，存储用户偏好设置以及实现永久登录等功能；</p><p><strong>sessionStorage</strong>：<br>   <strong>(1) 特点</strong>：① 临时性存储关闭网站页面标签或关闭浏览器数据删除；② 存储大小一般 为5M，采用键值对存储；③ 安全性较高，不容易受CSRF攻击；<br>   <strong>(2) 特点</strong>：适合用于临时会话数据，临时保存表单数据等；</p><p><strong>localStorage</strong>：<br>   <strong>(1) 特点</strong>：① 持久化存储机制，数据在浏览器关闭后仍然保留；② 数据在同源的所有 窗口、标签页中均可共享；③ 存储大小一般为5M，采用键值对存储；④ 不容 易受CSRF攻击，但容易受到XXS影响；<br>   <strong>(2) 特点</strong>：主要用于跟踪客户会话，存储用户偏好设置以及实现永久登录等功能；</p><p><strong>IndexedDB</strong>：<br>   <strong>(1) 定义</strong>：是一种在浏览器中使用的客户端数据库，提供了一种存储和检索大量结构化 数据的方式，具有更强大的功能和更高的性能；<br>   <strong>(2) 特点</strong>：① 具备离线访问和数据持久化的能力，② 采用键值对存储数据，可以存 储任意类型，③ 可以存储几个GB的数据，④ 可以通过索引进行高效的数 据 查询，⑤ 支持事务操作，可以在一个原子操作中执行多个数据库操作，保证数 据的一致性；<br>   <strong>(3) 特点</strong>：主要用于大量数据存储、复杂查询的场景；</p><p><strong>cacheStorage</strong>：<br>   <strong>(1) 定义</strong>：是浏览器中的一种 API，它用于缓存网络资源，使得网页在离线状态下也能 够访问已缓存的资源，提高网页加载速度和离线访问体验。cacheStorageAPI 属于 ServiceWorker 的一部分，因此在使用 Cache Storage 前，需要先注 册一个 ServiceWorker；<br>   <strong>(2) 特点</strong>：① 缓存网络资源以提高加载速度，减少网络请求；② 可以离线访问；③ 可 以通过设置缓存优先级提高缓存效率；④使用的是Promise，所以绝大部分操 作是异步的；</p><h3 id="_7、post请求为何会发送两次" tabindex="-1">7、POST请求为何会发送两次？ <a class="header-anchor" href="#_7、post请求为何会发送两次" aria-label="Permalink to &quot;7、POST请求为何会发送两次？&quot;">​</a></h3><p><strong>（1）浏览器的重试机制</strong>：浏览器为保证请求的可靠性，在出现网络不稳定请求 的情况下，会重新发送一次请求；<br><strong>（2）跨域请求与预检机制</strong>：在进行跨域请求(CORS)时，浏览器会在正式发送 POST请求之前，发送一个OPTIONS预检请求，以确保服务器是否允许跨域请求；<br><strong>（3）前端事件多次触发</strong>：前端是事件被多次绑定或监听，从而导致多次重复请求，如冒泡事件等；</p><h3 id="_8、websocket的实现和应用" tabindex="-1">8、WebSocket的实现和应用？ <a class="header-anchor" href="#_8、websocket的实现和应用" aria-label="Permalink to &quot;8、WebSocket的实现和应用？&quot;">​</a></h3><p><strong>定义</strong>：WebSocket一种浏览器与服务器进行全双工通讯的网络技术，属于应用层 协议。它基于TCP传输协议，并复用HTTP的握手通道；<br><strong>① 服务端</strong>：在引入<code>ws</code>模块并声明<code>WebSocket</code>实例；<br><img src="`+e+'" alt="Example Image"><strong>② 客户端</strong>：向8080端口发起WebSocket连接。连接建立后，打印日志，同时向服务端发送消息。接收到来自服务端的消息后，同样打印日志； <img src="'+p+'" alt="Example Image"></p><h3 id="_9、如何解决开发中精度计算问题" tabindex="-1">9、如何解决开发中精度计算问题？ <a class="header-anchor" href="#_9、如何解决开发中精度计算问题" aria-label="Permalink to &quot;9、如何解决开发中精度计算问题？&quot;">​</a></h3><p><strong>（1）取整计算</strong>：(1)将浮点数转换为整数进行计算，然后再将结果转换回浮点数。这样可以避免浮点数计算中的精度问题。例如，将浮点数乘以 10^n（n 为要保留的小数位数），进行整数计算，然后再除以 10^n，得到正确的结果。这种方法简单易行，但可能会导致结果溢出，需要根据具体情况进行适当的调整；</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">```js{4}</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">```</span></span></code></pre></div><p><strong>（2）四舍五入计算</strong>：(2)通过四舍五入来解决精度问题。可以使用 JavaScript 中的内置函数 <code>Math.round()、toFixed、Math.floor()</code> 或<code> Math.ceil() </code>来对浮点数进行四舍五入、向下取整或向上取整操作，从而得到较为准确的结果；</p><h3 id="_10、深拷贝和浅拷贝有何区别-如何对数组进行深拷贝" tabindex="-1">10、深拷贝和浅拷贝有何区别？如何对数组进行深拷贝？ <a class="header-anchor" href="#_10、深拷贝和浅拷贝有何区别-如何对数组进行深拷贝" aria-label="Permalink to &quot;10、深拷贝和浅拷贝有何区别？如何对数组进行深拷贝？&quot;">​</a></h3><p><strong>（1）浅拷贝</strong>：<br>   <strong>① 定义</strong>：新对象只复制原始对象的基本数据类型的字段或引用地址，若复制的对象发生修改可能会影响原始对象的数据；<br>   <strong>② 方式</strong>：扩展运算符、Object.assign()方法、数组可以使用Array.slice()和Array.concat() 方法；</p><p><strong>（2）深拷贝</strong>：<br>   <strong>① 定义</strong>：指新对象会递归的复制原始对象中所有字段以及引用指向的对象，以确保新对象和原始对象之间的关系都是独立的；<br>   <strong>② 方式</strong>：使用 JSON.stringify() 将对象转换为 JSON 字符串，再使用JSON.parse() 将字符串解析回对象； 下载；</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">```js{4}</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Highlighted!&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">```</span></span></code></pre></div><h3 id="_11、移动端如何适配不同屏幕尺寸" tabindex="-1">11、移动端如何适配不同屏幕尺寸 <a class="header-anchor" href="#_11、移动端如何适配不同屏幕尺寸" aria-label="Permalink to &quot;11、移动端如何适配不同屏幕尺寸&quot;">​</a></h3><p><strong>(1)使用响应式布局</strong>：使用CSS媒体查询设置或者Flex弹性布局根据屏幕尺寸调整页面元素的布局和大小；通过设置百分比、em或rem单位比例来实现元素的相对大小；<br><strong>(2)新过使用viewport标记</strong>：使用viewport标记设置来控制显示屏幕的参数尺寸；<br><strong>(3)使用flexible.js框架</strong>：是一个终端设备适配的解决方案，可以更具不同的显示屏幕动态计算出元素单位比例；</p><h3 id="_12、数组去重的方法有那些" tabindex="-1">12、数组去重的方法有那些 <a class="header-anchor" href="#_12、数组去重的方法有那些" aria-label="Permalink to &quot;12、数组去重的方法有那些&quot;">​</a></h3><p>  使用Set数据结构去重、使用Map数据结构去重、使用reduce()方法去重、使用sort()方法去重；</p><h3 id="_13、如何实现登录拦截" tabindex="-1">13、如何实现登录拦截 <a class="header-anchor" href="#_13、如何实现登录拦截" aria-label="Permalink to &quot;13、如何实现登录拦截&quot;">​</a></h3><p>  Vue中实现登录拦截，通常可以通过VueRouter中的路由守卫和状态管理来完成，首先可以使用路由守卫来拦截导航，在全局状态管理中保存用户的登陆状态，然后在router.beforeEach()全局前守卫进行相关操作的设定；</p><h3 id="_14、大文件上传如何分片" tabindex="-1">14、大文件上传如何分片 <a class="header-anchor" href="#_14、大文件上传如何分片" aria-label="Permalink to &quot;14、大文件上传如何分片&quot;">​</a></h3><p>  首先在选取需要上传的文件后，使用file.slice()方法按指定大小对整个大文件进行分片形成多个文件小块，然后利用哈希算法Spark-MD5计算出文件的Hash值，注意计算Hash值时为节省时间资源通常采用增量模式进行计算，计算完成后即可向服务端进行上传请求及校验上传情况。 <img src="'+h+`" alt="Example Image"></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_15、webworker的理解和应用" tabindex="-1">15、WebWorker的理解和应用 <a class="header-anchor" href="#_15、webworker的理解和应用" aria-label="Permalink to &quot;15、WebWorker的理解和应用&quot;">​</a></h3><p>  Web Worker 是一种在后台线程中运行 JavaScript 的机制，它独立于其他脚本，不会影响页面的性能。Web Worker 的核心原理是利用浏览器提供的多线程能力，将任务分配到单独的线程中执行。Web Workers可以处理大量计算、数据处理、文件读写等任务，并通过postMessage()方法和onmessage事件与主线程进行通信。<br>   应用：<code>const wk = new Worker(worker.js)</code></p><h3 id="_16、h5通过webview内嵌如何实现原生通信" tabindex="-1">16、H5通过webview内嵌如何实现原生通信 <a class="header-anchor" href="#_16、h5通过webview内嵌如何实现原生通信" aria-label="Permalink to &quot;16、H5通过webview内嵌如何实现原生通信&quot;">​</a></h3><p>  H5与原生APP交互，需要使用WebViewJavascriptBridge桥接函数，并根据系统类型IOS或Android分别构建，然后利用callback回调函数返回；还可以在Window对象中调用原生APP创建的属性或方法；<br><img src="`+l+'" alt="Example Image"></p><h3 id="_17、npm-pnpm-yarn有何区别" tabindex="-1">17、Npm\\Pnpm\\Yarn有何区别？ <a class="header-anchor" href="#_17、npm-pnpm-yarn有何区别" aria-label="Permalink to &quot;17、Npm\\Pnpm\\Yarn有何区别？&quot;">​</a></h3><p>  <strong>(1) Npm</strong>：npm即NodeJS包管理和分发工具，是默认的JavaScript应用包管理与NodeJS一同安装，npm拥有一个集中式的注册中心并托管了数万个包，这些包可以是库、框架、工具等等；<br>   <strong>(2) Pnpm</strong>：即高性能的npm，其主要解决了npm、yarn重复文件过多，复用率低等问题，其主要特点还包括包安装速度快，磁盘利用率高等;<br>   <strong>(3)Yarn</strong>：yarn是FaceBook贡献的JavaScript包管理工具，相比于npm，yarn通过并行下载和缓存等优化策略，提供更快的安装速度，npm则是串行下载；在安全性方面，yarn通过检测包的完整性和使用锁定文件来确保安装的包没有被篡改；(关键词：并行下载)</p><h3 id="_18、通常使用那些工具及指标来量化前端性能" tabindex="-1">18、通常使用那些工具及指标来量化前端性能？ <a class="header-anchor" href="#_18、通常使用那些工具及指标来量化前端性能" aria-label="Permalink to &quot;18、通常使用那些工具及指标来量化前端性能？&quot;">​</a></h3><p>  <strong>(1)FCP(首次内容绘制)</strong>：即首屏加载，反映了用户开始与页面进行视觉交互的速度，FCP的理想时间应控制在1.8秒之内；可以通过降低服务器响应时间、延迟加载非关键资源、移除不必要的资源、内联关键样式等方法优化FCP时间；可以在Chrome DevTools的Lighthouse面板量；<br>   <strong>(2)LCP(最大内容绘制)</strong>：即最大内容绘制，用于记录视窗内最大的元素绘制的时间，该时间会随着页面渲染变化而变化，该指标会在用户第一次交互后停止；LCP考虑的元素类型包括：<code>&lt;img&gt;</code>元素、<code>&lt;svg&gt;</code>元素内嵌的<code>&lt;image&gt;</code>元素、<code>&lt;video&gt;</code>元素、使用url()函数加载背景图片的元素、包含文本节点或其他内嵌文本元素子元素的块级元素；理想LCP时间应控制在2.5秒以内；<br>   <strong>(3)TTFB(首字节时间)</strong>：表示从点击网页到接收到第一个字节的时间，测量的是<code>startTime</code>和<code>responseStart</code>之间的时间总和，这个时间段包括：重定向时间、ServiceWorker启动时间、DNS查找时间、连接和TLS协商时间、请求直到响应第一个字节到达时间；理想的TTFB时间应控制在800毫秒以内；<br>   <strong>(4)TBT(总阻塞时间)</strong>：表用于衡量长任务对主线程的阻塞时间总和，即从首次内容绘制(FCP)到页面可交互(TTI)期间，主线程因运行长任务而被阻塞的总时间，长任务指执行时间超过50毫秒的JS任务，它会阻塞页面渲染和响应，影响用户体验；减少TBT时间的方式包括：减轻第三方代码的影响、缩短JS执行时间、减少主线程工作量、控制请求数量和传输大小；理想情况下，TBT在移动设备应低于300毫秒，在桌面Web上应低于100毫秒；<br>   <strong>(5)SI(速度指数)</strong>：表用于衡量页面渲染用户可见内容的迅速成都，其并不是一个具体时间点，而是属于综合性指标；它表示从加载开始到页面内容基本可见的过程中，用户感受到的加载速度，该指标是基于视频捕获的可是进度或从绘制时间的可是进度来计算；理想情况下，SI在移动设备应低于3.4秒，在桌面Web上应低于1.3秒，才能使Lighthouse获得90以上评分；<br> 附：常用性能测试工具：Gooogle 开源的 web-vitals 库、PageSpeed Insights 、(PSI) 工具、Lighthouse 选项卡;</p><h3 id="_19、前端性能优化方式有那些" tabindex="-1">19、前端性能优化方式有那些? <a class="header-anchor" href="#_19、前端性能优化方式有那些" aria-label="Permalink to &quot;19、前端性能优化方式有那些?&quot;">​</a></h3><p>  <strong>(1) 减少请求数量</strong>：图片使用精灵图、字体图标代替图片、减少重定向、使用缓存、css不使用@import；</p><p>  <strong>(2) 减少资源大小</strong>：html压缩、css压缩、gzip图片压缩、js压缩；</p><p>  <strong>(3) 优化网络链接</strong>：使用CDN、使用DNS预解析；</p><p>  <strong>(4) 其他方式</strong>：减少重绘/回流、异步组件加载、懒加载路由、使用Web Worker创建多线程环境；</p><h3 id="_20、那些情况容易造成内存泄漏" tabindex="-1">20、那些情况容易造成内存泄漏? <a class="header-anchor" href="#_20、那些情况容易造成内存泄漏" aria-label="Permalink to &quot;20、那些情况容易造成内存泄漏?&quot;">​</a></h3><p>  闭包、没有清除的计时器或回调函数、脱离DOM的引用、意外的全局变量；</p><h3 id="_21、如何实现数组扁平化" tabindex="-1">21、如何实现数组扁平化? <a class="header-anchor" href="#_21、如何实现数组扁平化" aria-label="Permalink to &quot;21、如何实现数组扁平化?&quot;">​</a></h3><p>  数组扁平化就是将一个多维数组转换为一个一维数组，基本是实现方式：① 对数组的每一项进行遍历判断该项是否为数组、② 若不是数组则将其放进新数组是数组则返回1继续迭代、③ 当数据遍历完成返回新数组；可以使用循环递归处理、使用reduce()方法处理、es6中的flat函数等；</p><h3 id="_22、如何减少项目中过多的if-else" tabindex="-1">22、如何减少项目中过多的if-else <a class="header-anchor" href="#_22、如何减少项目中过多的if-else" aria-label="Permalink to &quot;22、如何减少项目中过多的if-else&quot;">​</a></h3><p>  去除不必要的else、使用三目运算符、使用Optional优化判空、使用枚举做多条件判断；</p><h3 id="_23、设计登录模块可以考虑那些方式" tabindex="-1">23、设计登录模块可以考虑那些方式 <a class="header-anchor" href="#_23、设计登录模块可以考虑那些方式" aria-label="Permalink to &quot;23、设计登录模块可以考虑那些方式&quot;">​</a></h3><p>  <strong>(1) 账号+密码：</strong> 自定义账号+密码、手机号+密码、邮箱+密码</p><p>  <strong>(2) 手机号+验证码</strong></p><p>  <strong>(3)本机号码一键登录：</strong> 本机号码一键登录是基于运营商独有网关认证能力推出的账号认证产品，需要接入运营商SDK或者使用整合SDK，用户只需一键授权，即可实现以本机号码注册/登录，相比先前的短信验证码流程体验更优；主要步骤有：SDK初始化、唤起授权页、同意授权登录、获取显示号码；</p><p>  <strong>(4)第三方授权登录：</strong> 借助第三方应用的接口实现用户登录，常见的有：微信、QQ、微博，借助第三方应用的接口时需到相应的开发者平台申请接入，获取appid和apikey作为应用的唯一标识；</p><p>  <strong>(5)其他方式登录：</strong> 刷脸登录、扫码登录、指纹登录、手势登录等；</p><h3 id="_24、webpack的打包流程有哪些" tabindex="-1">24、Webpack的打包流程有哪些 <a class="header-anchor" href="#_24、webpack的打包流程有哪些" aria-label="Permalink to &quot;24、Webpack的打包流程有哪些&quot;">​</a></h3><p>  <strong>初始化参数：</strong> 从配置文件和 Shell 语句中读取与合并参数,得出最终的参数。</p><p>  <strong>开始编译：</strong> 用上一步得到的参数初始化 Compiler 对象,加载所有配置的插件,执行对象的 run 方法开始执行编译。</p><p>  <strong>确定入口：</strong> 根据配置中的 entry 找出所有的入口文件。</p><p>  <strong>编译模块：</strong> 从入口文件出发,调用所有配置的 Loader 对模块进行翻译,再找出该模块依赖的模块,再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。</p><p>  <strong>完成模块编译：</strong> 在经过第 4 步使用 Loader 翻译完所有模块后,得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。</p><p>  <strong>输出资源：</strong> 根据入口和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk,再把每个 Chunk 转换成一个单独的文件加入到输出列表,这步是可以修改输出内容的最后机会。</p><p>  **输出完成：**在确定好输出内容后,根据配置确定输出的路径和文件名,把文件内容写入到文件系统</p><h3 id="_25、webpack打包构建的基本原理" tabindex="-1">25、Webpack打包构建的基本原理 <a class="header-anchor" href="#_25、webpack打包构建的基本原理" aria-label="Permalink to &quot;25、Webpack打包构建的基本原理&quot;">​</a></h3><p>  基本流程：命令行中执行webpack xx命令→进行webpack初始化包括使用yargs读取命令行参数→合并webpack配置文件以及命令行参数形成最终的webpack配置→加载entry入口文件代码，将入口文件代码转化为AST抽象语法树→遍历AST通过import以及require函数分析出入口模块依赖的其他资源→转换AST将其中的import/require函数转化为webpack内置的导入函数→生成最终代码并以导入模块绝对路径为key将代码以及导出内容缓存起来→开始依次加载导入的其他资源内容并将其交给对应的loader进行处理并转换为webpack可以识别的js代码→得到依赖模块的js代码后继续按照入口模块方式进行处理(构建AST、分析依赖模块、转换导入语句和函数、缓存模块资源)→在所有模块分析完毕后将全部内容合并转换生成一个bundle→对bundle内容进行hash；</p><p>  总结：解析入库文件构建依赖图、应用Loader转换解析代码文件、生成输出文件如bundle.js</p><h3 id="_26、webpack打包需要做那些优化" tabindex="-1">26、Webpack打包需要做那些优化? <a class="header-anchor" href="#_26、webpack打包需要做那些优化" aria-label="Permalink to &quot;26、Webpack打包需要做那些优化?&quot;">​</a></h3><p>  路由组件/三方插件组件等按需加载、优化Loader配置(优化正则匹配、通过cacheDirectort选项开启缓存等)、优化文件路径、代码压缩、提取公共代码、CDN优化；</p><h3 id="_27、webpack中loder和plugin的区别" tabindex="-1">27、Webpack中Loder和Plugin的区别 <a class="header-anchor" href="#_27、webpack中loder和plugin的区别" aria-label="Permalink to &quot;27、Webpack中Loder和Plugin的区别&quot;">​</a></h3><p>  <strong>(1) Loader加载器：</strong></p><p>  <strong>① 作用：</strong> Loader用于对模块的源代码进行转换。它们主要用于在导入文件时 对其进行预处理（例如，将TypeScript编译成JavaScript，将Sass/Less 编译成CSS，等等）；</p><p>  <strong>② 用法：</strong> Loader通过在Webpack配置文件中的module.rules字段中进行 配置。它们作用于匹配特定文件类型的模块；Loader适合用于：将 TypeScript转换成JavaScript，将Sass编译成CSS，加载图片和字体等；</p><p>  <strong>③ 处理方式：</strong> Loader是函数，在加载资源时，Webpack会按照配置的顺序 调用这些函数，对文件进行转换。</p><p>  <strong>(2)Plugin插件：</strong></p><p>  <strong>① 作用：</strong> Plugin用于执行范围更广的任务，从打包优化和压缩，到重新定义 环境中的变量等，可以扩展Webpack的功能；</p><p>  <strong>② 用法：</strong> Plugin通过在Webpack配置文件中的plugins字段中进行配置， 作用于整个构建过程；Plugin适合用于：自动生成HTML文件，压缩代码， 分离CSS文件，定义环境变量等；</p><p>  <strong>③ 处理方式：</strong> Plugin可以访问Webpack的生命周期钩子，在构建过程的不 同阶段执行操作；</p>',94)]))}const u=i(r,[["render",k]]);export{y as __pageData,u as default};
