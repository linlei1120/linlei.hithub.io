import{_ as a,c as t,a2 as s,o}from"./chunks/framework.Cy5ZJKdt.js";const u=JSON.parse('{"title":"Vue面试题集","description":"","frontmatter":{},"headers":[],"relativePath":"interview/vue-skill.md","filePath":"interview/vue-skill.md"}'),i={name:"interview/vue-skill.md"};function r(n,e,d,h,l,p){return o(),t("div",null,e[0]||(e[0]=[s(`<h1 id="vue面试题集" tabindex="-1">Vue面试题集 <a class="header-anchor" href="#vue面试题集" aria-label="Permalink to &quot;Vue面试题集&quot;">​</a></h1><p>‌  ‌Vue.js是一个用于构建用户界面的渐进式‌JavaScript框架。‌‌Vue.js遵循MVVM模式（Model-View-ViewModel），实现了数据双向绑定，简化了DOM操作，使得开发者可以更加专注于应用逻辑而非页面渲染。<a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer">查看Vue官网文档地址</a>。</p><h2 id="_1、vue的生命周期以及各自的作用" tabindex="-1">1、Vue的生命周期以及各自的作用？ <a class="header-anchor" href="#_1、vue的生命周期以及各自的作用" aria-label="Permalink to &quot;1、Vue的生命周期以及各自的作用？&quot;">​</a></h2><p><strong>（1）beforeCreate</strong>：该阶段是<code>new Vue()</code>之后触发的第一个钩子，在当前阶段<code>data、methods、computed</code>以及<code>watch</code>上的数据和方法都不能被访问；</p><p><strong>（2）created</strong>：将该阶段在实例创建完成后发生，当前已完成数据观测，可以使用数据或更改数据，但是不会触发<code>updated</code>函数，只能做一些初始数据的获取，无法与DOM进行交互，但是可以通过<code>vm.$nextTick</code>来访问DOM；</p><p><strong>（3）beforeMount</strong>：该阶段发生在挂载之前，此时<code>template模板</code>已导入渲染函数编译，而该阶段虚拟DOM已经创建完成，即将开始渲染，此时可以操作数据，但不会触发<code>updated</code>；</p><p><strong>（4）mounted</strong>：该阶段发生在挂载之后，此时真实的DOM已经挂载完成，数据完成双向绑定，可以访问到DOM节点并使用<code>$ref</code>对节点进行操作；</p><p><strong>（5）beforeUpdate</strong>：该阶段发生在数据更新之前，此时虚拟DOM还未重渲染，在当前阶段修改数据不会发生重渲染；</p><p><strong>（6）updated</strong>：该阶段发生在数据更新之后，此时组件DOM已完成更新，在该阶段要避免修改数据；</p><p><strong>（7）beforeDestory</strong>：该阶段发生实例销毁之前，此时实例依然可以使用，通常在该阶段进行善后收尾工作，如清除定时器等；</p><p><strong>（8）destoryed</strong>：该阶段发生在实例销毁之后，此时组件已经被拆解，数据绑定已被卸除，监听被移除，子实例等也全部销毁；</p><p><strong>（9）setup</strong>：该阶段由vue3.0新增，发生在<code>beforeCreate</code>之前，此时不需要使用<code>data、methods</code>等方法，所以属性和方法都利用return返回出去；</p><h2 id="_2、vue2-0和vue3-0有何不同" tabindex="-1">2、Vue2.0和Vue3.0有何不同？ <a class="header-anchor" href="#_2、vue2-0和vue3-0有何不同" aria-label="Permalink to &quot;2、Vue2.0和Vue3.0有何不同？&quot;">​</a></h2><p><strong>Vue3.0的主要变化</strong>：① 源码开发更适合于TS编写、② 新增CompositionAPI组织组件逻辑更加灵活、③ 响应式改为Proxy实现、④ 生命周期变化，新增setup函数以替代beforeCreate和created函数、⑤ templete模板支持多个根标签、⑥ VueX状态管理创建由new Store改为createStore等</p><h2 id="_3、vue2-0和vue3-0的响应式有何不同" tabindex="-1">3、Vue2.0和Vue3.0的响应式有何不同？ <a class="header-anchor" href="#_3、vue2-0和vue3-0的响应式有何不同" aria-label="Permalink to &quot;3、Vue2.0和Vue3.0的响应式有何不同？&quot;">​</a></h2><p><strong>（1）Vue2.0响应式</strong>：使用了<code>Object.defineProperty</code>来实现响应式，当我们创建Vue实例时，它会遍历data选项中的所有属性，并使用<code>Object.defineProperty</code>将它们转换为<code>getter</code>和<code>setter</code>，从而捕获修改操作并触发视图更新；但是无法对数组进行操作以及无法监听数组API；</p><p><strong>（2）Vue3.0响应式</strong>：使用<code>Proxy</code>替代<code>Object.defineProperty</code>，因为<code>Proxy</code>可以创建一个对象的代理，拦截并自定义基本操作并直接监听对象和数组的变化，并且有多种拦截方法，三个主要过程：响应式对象创建、依赖收集(<code>track</code>函数)、依赖触发(<code>trigger</code>函数)；且可以直接监听数组对象；</p><p><strong>（3）如何处理Proxy只能代理对象的第一层的问题</strong>：判断当前<code>Reflect.get</code>的返回值是否为Object，若是则通过<code>reactive</code>方法进行代理，从而实现深度监听；<br><strong>（4）如何避免检测数组时可能会触发多次get/set</strong>：可以判断key是否为当前被代理对象<code>target</code>自身属性，也可以判断旧值与新值是否相同，只有满足以上两个条件才有可能执行<code>trigger</code>； <strong>（5）Vue3.0为何使用Proxy</strong>：可以在Vue2.0中<code>Object.defineProperty</code>会改变原始数值，而<code>Proxy</code>则是创建对象的虚拟表示，并且提供了<code>set、get、deleteProperty</code>等处理器可以在访问和修改原始对象时进行拦截，也支持<code>Map、Set、Weakmap</code>和<code>Weakset</code>等。其实现原理为：<code>get收集依赖</code>、<code>set/delete</code>等触发依赖；</p><h2 id="_4、v-model双向数据绑定的原理是什么" tabindex="-1">4、v-model双向数据绑定的原理是什么？ <a class="header-anchor" href="#_4、v-model双向数据绑定的原理是什么" aria-label="Permalink to &quot;4、v-model双向数据绑定的原理是什么？&quot;">​</a></h2><p>  v-model本质是一种语法糖，是v-on和v-bind的语法糖，基于数据劫持机制，通过劫持表单元素的value属性和input事件，建立视图与数据间的双向绑定关系，实现数据同步。</p><h2 id="_5、keep-alive的常用属性有哪些以及实现原理" tabindex="-1">5、keep-alive的常用属性有哪些以及实现原理？ <a class="header-anchor" href="#_5、keep-alive的常用属性有哪些以及实现原理" aria-label="Permalink to &quot;5、keep-alive的常用属性有哪些以及实现原理？&quot;">​</a></h2><p><strong>（1）概述</strong>：<code>keep-alive</code>是vue的一种内置组件，可以实现组件实例缓存，当组件切换时避免组件被重复创建和销毁；常用属性有<code>include/exclude/max</code>，指定需要缓存或排除的组件的名称，<code>max</code>定义最大缓存个数；有两个生命周期<code>activated/deactivated</code>，用来得知当前组件是否处于活跃状态；<br><strong>（2）原理</strong>：该<code>keep-alive</code>缓存时会先标记该虚拟节点是否被缓存过，若是则不再重新初始化或销毁，而内部采用了<code>LRU算法</code>用来维护缓存列表，若缓存个数超出则会销毁最久没有被访问的组件；</p><h2 id="_6、next-tick的作用以及实现原理" tabindex="-1">6、next-Tick的作用以及实现原理？ <a class="header-anchor" href="#_6、next-tick的作用以及实现原理" aria-label="Permalink to &quot;6、next-Tick的作用以及实现原理？&quot;">​</a></h2><p>  用于等待下一次 DOM 更新的工具方法，由于Vue在更改响应式状态时，DOM的更新并不是同步生效的，而是先将他们缓存到一个队列中，nextTick() 则可以在状态改变后立即使用，以等待 DOM 更新完成。</p><h2 id="_7、什么是虚拟dom" tabindex="-1">7、什么是虚拟DOM？ <a class="header-anchor" href="#_7、什么是虚拟dom" aria-label="Permalink to &quot;7、什么是虚拟DOM？&quot;">​</a></h2><p>  虚拟DOM其实是真实DOM的JS对象，对象中包含的字段有标签名，标签属性以及子标签名子标签属性，文本节点；当真实DOM节点发生变化，会产生新旧两个虚拟DOM，然后通过diff算法对两者进行对比不同。</p><h2 id="_8、vue2-0和vue3-0渲染器的diff算法有何区别" tabindex="-1">8、Vue2.0和Vue3.0渲染器的diff算法有何区别？ <a class="header-anchor" href="#_8、vue2-0和vue3-0渲染器的diff算法有何区别" aria-label="Permalink to &quot;8、Vue2.0和Vue3.0渲染器的diff算法有何区别？&quot;">​</a></h2><p><strong>（1）Vue2的diff算法</strong>：<br>   <strong>原理</strong>：核心就是比较两个虚拟DOM 树的差异，返回一个 <code>patch(补丁) 对象</code>，这 个对象的作用就是存储两个节点不同的地方，最后用 patch 里记录的信息更 新真实DOM；<br>   <strong>特点</strong>：①只会在同级进行比较，然后再比较子节点，不会跨级比较、②循环从两 端向中间进行比较；</p><p><strong>（2）Vue3的快速diff算法</strong>：<br>   <strong>原理</strong>：该借鉴了 <code>ivi 算法</code>和 <code>inferno 算法</code>加上纯文本<code>diff算法</code>，主要分为五个阶段 完成，预处理前置节点、预处理后置节点、处理仅有新增节点、处理仅有卸载 节点、处理其他新增卸载移动情况；在创建<code>VNode</code>时就确定其类型，以及在<code>mout/path</code>的过程中采用VNode的类型，在此基础上又配合核心的diff 算法提高性能；<br>   <strong>特点</strong>：该算法中还运用到了动态规划的思想求解最长递归子序列;</p><h2 id="_9、vue组件通信方式有哪些" tabindex="-1">9、Vue组件通信方式有哪些？ <a class="header-anchor" href="#_9、vue组件通信方式有哪些" aria-label="Permalink to &quot;9、Vue组件通信方式有哪些？&quot;">​</a></h2><p><strong>（1）父子组件通信</strong>：props（父传子）、$on/$emit（子传父）、$parent/$children;<br><strong>（2）跨级组件通信</strong>：VueX、$attrs、$ref;</p><h2 id="_10、vue中data为很么必须是函数" tabindex="-1">10、Vue中data为很么必须是函数？ <a class="header-anchor" href="#_10、vue中data为很么必须是函数" aria-label="Permalink to &quot;10、Vue中data为很么必须是函数？&quot;">​</a></h2><p>  一个组件若被复用多次，则会创建多个实例。本质上，这些实例用的都是同一个构造函数。若data是对象的话，则属于引用类型，会影响到所有的实例，所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。</p><h2 id="_11、vue中key的作用是什么" tabindex="-1">11、Vue中Key的作用是什么？ <a class="header-anchor" href="#_11、vue中key的作用是什么" aria-label="Permalink to &quot;11、Vue中Key的作用是什么？&quot;">​</a></h2><p>  key 的作用主要是为了高效的更新虚拟 DOM 。另外 vue 中在使用相同标签名元素的过渡切换时，也会使用到 key 属性，其目的也是为了让 vue 可以区分它们，否则 vue 只会替换其内部属性而不会触发过渡效果。</p><h2 id="_12、接口请求一般放在哪个生命周期中-为什么要这样做" tabindex="-1">12、接口请求一般放在哪个生命周期中？为什么要这样做？ <a class="header-anchor" href="#_12、接口请求一般放在哪个生命周期中-为什么要这样做" aria-label="Permalink to &quot;12、接口请求一般放在哪个生命周期中？为什么要这样做？&quot;">​</a></h2><p>  接口请求可以放在钩子函数 <code>created、beforeMount、mounted</code> 中进行调用，因为在这三个钩子函数中，data已经创建，可以将服务端返回的数据进行赋值。<br>   推荐在 <code>created</code> 钩子函数中调用异步请求，因为在 <code>created</code> 钩子函数中调用异步请求有以下优点：① 获取服务端数据更快；② SSR不支持<code>beforeMount、mounted</code>函数，所以使用created函数有助于代码一致性；③ 在mounted函数中可能会出现闪屏问题,因为此时页面已经渲染完成。</p><h2 id="_13、vue中computed和watch的区别是什么" tabindex="-1">13、Vue中computed和watch的区别是什么？ <a class="header-anchor" href="#_13、vue中computed和watch的区别是什么" aria-label="Permalink to &quot;13、Vue中computed和watch的区别是什么？&quot;">​</a></h2><p><strong>（1）computed</strong>：<br>   ① 计算属性会混入到vue实例中，需监听自定义变量;<br>   ② 计算属性有缓存，所依赖的值发生变化才会重新计算;<br>   ③ 不支持异步，本质是一个惰性观察者;</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fullName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">firstName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} \${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lastName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  formattedName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.fullName.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toUpperCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>（2）watch</strong>：<br>   ① watch监听data、props中的数据变化;<br>   ② 没有缓存;<br>   ③ 支持异步，有两个参数分别是deep深度监听、immediate组件加载立即触发回调函数执行;</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  firstName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;updateFullName&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lastName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;updateFullName&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">methods</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  updateFullName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.fullName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">firstName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} \${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lastName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>注意</strong>：某些情况下，可以使用watch选项来替代computed属性，以实现更细粒度的控制和性能优化。</p><h2 id="_14、vuex的核心属性分别是" tabindex="-1">14、VueX的核心属性分别是？ <a class="header-anchor" href="#_14、vuex的核心属性分别是" aria-label="Permalink to &quot;14、VueX的核心属性分别是？&quot;">​</a></h2><p><strong>（1）State</strong>：用于存储数据状态，类似于Vue中的<code>Data</code>，可以通过 <code>this.$store.state</code>访问；</p><p><strong>（2）Getter</strong>：用于从store中的state派生出一些状态，可以将其看作是store的计算属性，通过<code>store.getters</code>访问；</p><p><strong>（3）Mutation</strong>：用于提交修改<code>store</code>中数据状态的事务，只能进行同步事务，不支持异步；</p><p><strong>（4）Action</strong>：使类似于<code>mutation</code>，区别在于<code>action</code>不是直接更改数据状态，而是提交mutation；</p><p><strong>（5）Module</strong>：使用于将<code>store</code>切割成不同模块，每个模块都拥有自己的<code>state、getter、mutation、action，</code>避免了<code>store</code>对象因为应用复杂而变得过于臃肿；</p><h2 id="_15、vue中data为很么必须是函数" tabindex="-1">15、Vue中data为很么必须是函数？ <a class="header-anchor" href="#_15、vue中data为很么必须是函数" aria-label="Permalink to &quot;15、Vue中data为很么必须是函数？&quot;">​</a></h2><p>  一个组件若被复用多次，则会创建多个实例。本质上，这些实例用的都是同一个构造函数。若data是对象的话，则属于引用类型，会影响到所有的实例，所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。</p><h2 id="_16、vue中key的作用是什么" tabindex="-1">16、Vue中Key的作用是什么？ <a class="header-anchor" href="#_16、vue中key的作用是什么" aria-label="Permalink to &quot;16、Vue中Key的作用是什么？&quot;">​</a></h2><p>  key 的作用主要是为了高效的更新虚拟 DOM 。另外 vue 中在使用相同标签名元素的过渡切换时，也会使用到 key 属性，其目的也是为了让 vue 可以区分它们，否则 vue 只会替换其内部属性而不会触发过渡效果。</p><h2 id="_17、在使用vue种常遇到那些棘手的问题" tabindex="-1">17、在使用Vue种常遇到那些棘手的问题？ <a class="header-anchor" href="#_17、在使用vue种常遇到那些棘手的问题" aria-label="Permalink to &quot;17、在使用Vue种常遇到那些棘手的问题？&quot;">​</a></h2><p>  VueRouter作为前端路由，其作用是在无需刷新页面的情况下更新视图；VueRouter的底层原理主要有两种模式，一种是Hash模式，另外一种是History模式：<br>   ①Hash模式：关键技术为<code>hashchange</code>事件，利用URL的hash来模拟一个完整的URL，路径中会存在#符号；   ②History模式：通关键技术为HTML5History中新增的<code>pushState()</code>和<code>replaceState()</code>2个方法来修改历史信息，并更新URL及视图且不会刷新页面；</p><h2 id="_18、在使用vue种常遇到那些棘手的问题" tabindex="-1">18、在使用Vue种常遇到那些棘手的问题？ <a class="header-anchor" href="#_18、在使用vue种常遇到那些棘手的问题" aria-label="Permalink to &quot;18、在使用Vue种常遇到那些棘手的问题？&quot;">​</a></h2><ul><li>组件状态管理问题：在复杂的应用中，组件之间共享状态可能会导致混乱，可使用 Vuex 这样的状态管理模式和库，它集中管理应用的所有组件的状态，并以一种可预测的方式改变状态。</li><li>路由传参的功能问题：之前一直使用路由传参，但是当本页面刷新的时候，页面上是没有参数的，因为参数是从上个页面传入进来的。 解决办法：使用了缓存，和vuex状态管理。但是由于项目并不是很大型的项目，所以使用最多的是缓存。</li><li>组件之间的通信问题：组件间通信可能会变得复杂，尤其是在非父子组件之间。对于简单的父子组件通信，使用 props 和事件。对于非父子组件，可以使用事件总线或 Vuex 进行通信。</li></ul><h2 id="_19、vue的导航守卫是什么" tabindex="-1">19、Vue的导航守卫是什么？ <a class="header-anchor" href="#_19、vue的导航守卫是什么" aria-label="Permalink to &quot;19、Vue的导航守卫是什么？&quot;">​</a></h2><p>  <strong>(1)定义</strong>：导航守卫也称为路由守卫，是VueRouter中的一种机制，用于实时监控路由跳转的过程以及在路由跳转的各个过程中设置执行相关操作；应用场景包括：全局检查用户是否登录、权限检查、验证路由参数等等；分为全局守卫、路由独享的守卫和组件内的守卫；<br>   <strong>(2)全局路守卫</strong>：主要分为三种router.beforeEach()全局前守卫、router.beforeResolve()全局解析守卫、router.afterEach()全局后置守卫；<br>   <strong>(3)路由独享守卫</strong>：组只有router.beforeEnter()，只有在路由跳转配置后才会有效；<br>   <strong>(4)组件内守卫</strong>：主要分为三种router.beforeRouterEnter()进入该路由时执行、router.beforeRouteUpdate()该路由中参数改变时执行、router.beforeRouteLeave()离开该路由时执行；</p><h2 id="_20、vue2-0为什么要求组件模板只能有一个根元素" tabindex="-1">20、Vue2.0为什么要求组件模板只能有一个根元素 <a class="header-anchor" href="#_20、vue2-0为什么要求组件模板只能有一个根元素" aria-label="Permalink to &quot;20、Vue2.0为什么要求组件模板只能有一个根元素&quot;">​</a></h2><p>  Vue 要求组件模板必须只有一个根元素是因为 Vue 的 Virtual DOM 机制要求模板内有且只有一个根节点来进行diff算法比对。如果有多个根元素，Vue 将无法确定如何正确地进行DOM更新和渲染。<br>   注意：Vue3.0 支持了 Fragment 的语法，即组件可以有多个根节点。</p><h2 id="_21、vue3-0为什么对ts更友好" tabindex="-1">21、Vue3.0为什么对TS更友好 <a class="header-anchor" href="#_21、vue3-0为什么对ts更友好" aria-label="Permalink to &quot;21、Vue3.0为什么对TS更友好&quot;">​</a></h2><p>  <strong>(1)更好的类型推导和类型检查</strong>：Vue3.0使用了更强大的类型推导和类型检查，使得开发中更早发现潜在错误并且可以自动提示补齐，与TS的强类型相兼容；<br>   <strong>(2)ComponsitionAPI</strong>：Vue3.0提供了一种更灵活、可组合的组件编码方式，在使用CompositionAPI时可以更好的推导出函数的参数及返回值，使得代码质量更高，也更方便扩展维护；<br>   <strong>(3)模块化支持更好</strong>：Vue 3.0中的模块化支持得到了改进，在使用TypeScript开发项目时，可以更好地结合模块化开发的思想，使得代码更具可读性和可维护性。</p><h2 id="_22、vue模板语法的解析原理" tabindex="-1">22、Vue模板语法的解析原理 <a class="header-anchor" href="#_22、vue模板语法的解析原理" aria-label="Permalink to &quot;22、Vue模板语法的解析原理&quot;">​</a></h2><p>  模板语法是一种基于HTML语法，模板语法使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上；模板模板语法的解析原理主要是将模板解析成AST抽象语法树，对AST进行优化，然后将其转换为渲染函数的JS代码，最终生成能够接受数据并返回虚拟DON的JS函数。</p><h2 id="_23、vue中父组件-子组件的执行顺序" tabindex="-1">23、Vue中父组件/子组件的执行顺序 <a class="header-anchor" href="#_23、vue中父组件-子组件的执行顺序" aria-label="Permalink to &quot;23、Vue中父组件/子组件的执行顺序&quot;">​</a></h2><p><strong>（1）渲染过程</strong>：父beforeCreate()→父created()→父beforeMounte()→子beforeMounte()→子beforeCreate()→子created()→子beforeMounte()→子mounted()→父mounted()<br><strong>（2）更新过程</strong>：父beforeUpdate()→子beforeUpdate()→子updated())→父updated()<br><strong>（3）销毁过程</strong>：父beforeDestory()→子beforeDestory()→子destory()→父子destory()</p><h2 id="_24、vue中常用的修饰符有哪些" tabindex="-1">24、Vue中常用的修饰符有哪些？ <a class="header-anchor" href="#_24、vue中常用的修饰符有哪些" aria-label="Permalink to &quot;24、Vue中常用的修饰符有哪些？&quot;">​</a></h2><p>  <strong>（1）表单修饰符</strong><code>.lazy</code>懒加载、<code>.trim</code>过滤空格、<code>.number</code>自动转为数值类型；<br>   <strong>（2）事件修饰符</strong><code>.stop</code>阻止事件冒泡、<code>.prevent</code>阻止事件默认行为、<code>.self</code>只在自身触发事件、<code>.once</code>仅触发一次、<code>.native</code>转为原生事件监听；<br>   <strong>（3）鼠标键盘按钮修饰符</strong><code>.left</code>鼠标左键、<code>.right</code>鼠标右键、<code>.middle</code>鼠标空格、<code>.keyCode</code>键盘修饰符；</p><h2 id="_25、vue3的suepose是什么" tabindex="-1">25、Vue3的Suepose是什么 <a class="header-anchor" href="#_25、vue3的suepose是什么" aria-label="Permalink to &quot;25、Vue3的Suepose是什么&quot;">​</a></h2><p>  <code>&lt;Suepense&gt;&lt;/Suepense&gt; </code>是vue3 中新增的内置组件，用于处理异步组件加载的状态，使页面视觉可以更加平滑的过渡，用于异步组件异步数据的获取与处理，并提供一种新的组件加载状态，直到组件解析加载完成；其作用包括：异步组件加载、数据异步获取、代码分割、用户体验更好；应用场景包括：懒加载组件、组件异步渲染、路由懒加载、动态导入等；</p><h2 id="_26、v-if和v-for为什么不能一起用" tabindex="-1">26、v-if和v-for为什么不能一起用 <a class="header-anchor" href="#_26、v-if和v-for为什么不能一起用" aria-label="Permalink to &quot;26、v-if和v-for为什么不能一起用&quot;">​</a></h2><p>  通常不建议在同一个元素上同时使用‌和v-for指令，主要原因包括：<br><strong>（1）优先级问题</strong>：在Vue2.0中v-if的优先级高于v-for，而Vue3.0中优先级则是相反的，导致v-if 和 v-for 在渲染顺序上存在冲突；<br><strong>（2）性能问题</strong>：当v-if和v-for同时使用时，Vue需要为每个在v-for中的项目检查v-if的条件。如果列表很大，这会增加不必要的计算量，导致性能下降；</p><h2 id="_27、vite和webpack有什么不同" tabindex="-1">27、Vite和Webpack有什么不同 <a class="header-anchor" href="#_27、vite和webpack有什么不同" aria-label="Permalink to &quot;27、Vite和Webpack有什么不同&quot;">​</a></h2><p>  <strong>（1）开发模式不同</strong>：Webpack在开发模式下依然会对所有模块进行打包操作，虽然提供了热更新，但大型项目中依然可能会出现启动和编译缓慢的问题；而Vite则采用了基于ES Module的开发服务器，只有在需要时才会编译对应的模块，大幅度提升了开发环境的响应速度。<br>   <strong>（2）打包效率不同</strong>：Webpack在打包时，会把所有的模块打包成一个bundle，这会导致初次加载速度较慢；而Vite则利用了浏览器对ES Module的原生支持，只打包和缓存实际改动的模块，从而极大提高了打包效率。<br>   <strong>（3）配置复杂度不同</strong>：Webpack的配置相对复杂，对新手不够友好；而Vite在设计上更注重开箱即用，大部分场景下用户无需自己写配置文件。<br>   <strong>（4）热更新机制不同</strong>：Webpack的热更新需要整个模块链重新打包和替换，对于大型项目可能会有延迟；Vite的热更新则只会针对改动的模块进行更新，提高了更新速度。</p><h2 id="_28、‌简单概述vue3的compositionapi" tabindex="-1">28、‌简单概述Vue3的CompositionAPI <a class="header-anchor" href="#_28、‌简单概述vue3的compositionapi" aria-label="Permalink to &quot;28、‌简单概述Vue3的CompositionAPI&quot;">​</a></h2><p>  Vue3的Composition API是一种新的API，旨在提供一种更加灵活和可组合的方式来组织和复用组件逻辑。‌ 它基于函数式编程的思想，允许开发者将组件的逻辑分散到多个可复用的函数中，从而提高代码的可读性、可维护性和复用性‌；<br>   Composition API通过提供一系列的函数和钩子函数来实现组件的逻辑编写。这些函数包括：<code>ref</code>、<code>reactive</code>、<code>setup</code>等等；相比与Vue2.0的OptionAPI选项式API灵活性更高、可维护性更好、能更好的复用代码；</p>`,77)]))}const k=a(i,[["render",r]]);export{u as __pageData,k as default};
