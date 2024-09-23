import{_ as i,c as a,a2 as n,o as t}from"./chunks/framework.Cy5ZJKdt.js";const l="/linlei.github.io/assets/ws_img.CYYF9Q-_.png",h="/linlei.github.io/assets/ws_img02.Ddm_DOIN.png",c=JSON.parse('{"title":"实践知识汇总","description":"","frontmatter":{},"headers":[],"relativePath":"interview/practice-skill.md","filePath":"interview/practice-skill.md"}'),p={name:"interview/practice-skill.md"};function e(k,s,r,E,g,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="实践知识汇总" tabindex="-1">实践知识汇总 <a class="header-anchor" href="#实践知识汇总" aria-label="Permalink to &quot;实践知识汇总&quot;">​</a></h1><p>实践知识汇总重要包括工作中经常需要使用的功能模块代码以及解决或优化问题的方案等等，包括防抖节流、懒加载处理等等。</p><h2 id="_1、前端如何一次性处理十万条数据" tabindex="-1">1、前端如何一次性处理十万条数据？ <a class="header-anchor" href="#_1、前端如何一次性处理十万条数据" aria-label="Permalink to &quot;1、前端如何一次性处理十万条数据？&quot;">​</a></h2><p><strong>1.分页加载</strong>：可以使用requestAnimationFrame 或者setTimeout时间动态分页加载数据；<br><strong>2. 懒加载</strong>：可以监听用户下拉触底操作，动态加载数据，提高页面渲染速度和性能；<br><strong>3. 虚拟列表加载</strong>：虚拟列表是一种在容器可见区域的动态渲染数据的技术，其优点是根据容器可视区域固定渲染的DOM节点，从而减少DOM操作，提高页面性能，如使用vue-virtual-scroller虚拟滚动方案；<br><strong>注意</strong>：需要解决的关键问题就是如何有效减少DOM节点的渲染</p><h3 id="_2、如何处理页面中大量图片加载" tabindex="-1">2、如何处理页面中大量图片加载？ <a class="header-anchor" href="#_2、如何处理页面中大量图片加载" aria-label="Permalink to &quot;2、如何处理页面中大量图片加载？&quot;">​</a></h3><p><strong>（1）图片懒加载</strong>：在容器不可视区域加一个滚动条事件，判断图片位置与浏览器顶端和页面的距离，如果前者小于后者，优先加载；<br><strong>（2）图片预加载</strong>：将当前展示图片的前一张和后一张优先</p><h3 id="_5、什么是防抖和节流" tabindex="-1">5、什么是防抖和节流？ <a class="header-anchor" href="#_5、什么是防抖和节流" aria-label="Permalink to &quot;5、什么是防抖和节流？&quot;">​</a></h3><p><strong>（1）防抖</strong>：在既在指定的时间间隔内，无论连续触发了多少次事件，只有最后一次事件会在该间隔结束后执行；适用于搜索框输入、表单验证等场景，用户完成输入后，才执行相关操作；</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建一个防抖函数，它返回一个新的函数，该新函数在指定的 wait 时间后执行 func</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_3、客户端中缓存数据的方式有哪些" tabindex="-1">3、客户端中缓存数据的方式有哪些？ <a class="header-anchor" href="#_3、客户端中缓存数据的方式有哪些" aria-label="Permalink to &quot;3、客户端中缓存数据的方式有哪些？&quot;">​</a></h2><p><strong>1. Cookies</strong>：<br>   <strong>(1) 特点</strong>：① 可以设置过期时间，客户端和服务端都可以修改；② 存储大小在4K以内， 不能超过50个cookie；③ 只能存储字符串类型；④容易受CSRF攻击；<br>   <strong>(2) 特点</strong>：主要用于跟踪客户会话，存储用户偏好设置以及实现永久登录等功能；</p><p><strong>2. sessionStorage</strong>：<br>   <strong>(1) 特点</strong>：① 临时性存储关闭网站页面标签或关闭浏览器数据删除；② 存储大小一般 为5M，采用键值对存储；③ 安全性较高，不容易受CSRF攻击；<br>   <strong>(2) 特点</strong>：适合用于临时会话数据，临时保存表单数据等；</p><p><strong>3. localStorage</strong>：<br>   <strong>(1) 特点</strong>：① 持久化存储机制，数据在浏览器关闭后仍然保留；② 数据在同源的所有 窗口、标签页中均可共享；③ 存储大小一般为5M，采用键值对存储；④ 不容 易受CSRF攻击，但容易受到XXS影响；<br>   <strong>(2) 特点</strong>：主要用于跟踪客户会话，存储用户偏好设置以及实现永久登录等功能；</p><p><strong>4. IndexedDB</strong>：<br>   <strong>(1) 定义</strong>：是一种在浏览器中使用的客户端数据库，提供了一种存储和检索大量结构化 数据的方式，具有更强大的功能和更高的性能；<br>   <strong>(2) 特点</strong>：① 具备离线访问和数据持久化的能力，② 采用键值对存储数据，可以存 储任意类型，③ 可以存储几个GB的数据，④ 可以通过索引进行高效的数 据 查询，⑤ 支持事务操作，可以在一个原子操作中执行多个数据库操作，保证数 据的一致性；<br>   <strong>(3) 特点</strong>：主要用于大量数据存储、复杂查询的场景；</p><p><strong>4. cacheStorage</strong>：<br>   <strong>(1) 定义</strong>：是浏览器中的一种 API，它用于缓存网络资源，使得网页在离线状态下也能 够访问已缓存的资源，提高网页加载速度和离线访问体验。cacheStorageAPI 属于 ServiceWorker 的一部分，因此在使用 Cache Storage 前，需要先注 册一个 ServiceWorker；<br>   <strong>(2) 特点</strong>：① 缓存网络资源以提高加载速度，减少网络请求；② 可以离线访问；③ 可 以通过设置缓存优先级提高缓存效率；④使用的是Promise，所以绝大部分操 作是异步的；</p><h3 id="_5、post请求为何会发送两次" tabindex="-1">5、POST请求为何会发送两次？ <a class="header-anchor" href="#_5、post请求为何会发送两次" aria-label="Permalink to &quot;5、POST请求为何会发送两次？&quot;">​</a></h3><p><strong>（1）浏览器的重试机制</strong>：浏览器为保证请求的可靠性，在出现网络不稳定请求 的情况下，会重新发送一次请求；<br><strong>（2）跨域请求与预检机制</strong>：在进行跨域请求(CORS)时，浏览器会在正式发送 POST请求之前，发送一个OPTIONS预检请求，以确保服务器是否允许跨域请求；<br><strong>（3）前端事件多次触发</strong>：前端是事件被多次绑定或监听，从而导致多次重复请求，如冒泡事件等；</p><h3 id="_4、websocket的实现和应用" tabindex="-1">4、WebSocket的实现和应用？ <a class="header-anchor" href="#_4、websocket的实现和应用" aria-label="Permalink to &quot;4、WebSocket的实现和应用？&quot;">​</a></h3><p><strong>定义</strong>：WebSocket一种浏览器与服务器进行全双工通讯的网络技术，属于应用层 协议。它基于TCP传输协议，并复用HTTP的握手通道；<br><strong>① 服务端</strong>：在引入<code>ws</code>模块并声明<code>WebSocket</code>实例；<br><img src="`+l+'" alt="Example Image"><strong>② 客户端</strong>：向8080端口发起WebSocket连接。连接建立后，打印日志，同时向服务端发送消息。接收到来自服务端的消息后，同样打印日志； <img src="'+h+`" alt="Example Image"></p><h3 id="_5、如何解决开发中精度计算问题" tabindex="-1">5、如何解决开发中精度计算问题？ <a class="header-anchor" href="#_5、如何解决开发中精度计算问题" aria-label="Permalink to &quot;5、如何解决开发中精度计算问题？&quot;">​</a></h3><p><strong>（1）取整计算</strong>：(1)将浮点数转换为整数进行计算，然后再将结果转换回浮点数。这样可以避免浮点数计算中的精度问题。例如，将浮点数乘以 10^n（n 为要保留的小数位数），进行整数计算，然后再除以 10^n，得到正确的结果。这种方法简单易行，但可能会导致结果溢出，需要根据具体情况进行适当的调整；</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`js{4}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span></code></pre></div><p><strong>（2）四舍五入计算</strong>：(2)通过四舍五入来解决精度问题。可以使用 JavaScript 中的内置函数 <code>Math.round()、toFixed、Math.floor()</code> 或<code> Math.ceil() </code>来对浮点数进行四舍五入、向下取整或向上取整操作，从而得到较为准确的结果；</p><p>下载；</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`js{4}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h2><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: info</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is an info box.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: tip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a tip.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: warning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a warning.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: danger</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a dangerous warning.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: details</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a details block.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p>`,40)]))}const y=i(p,[["render",e]]);export{c as __pageData,y as default};