import{_ as t,c as e,a2 as a,o as n}from"./chunks/framework.Cy5ZJKdt.js";const h=JSON.parse('{"title":"JavaScript面试题集","description":"","frontmatter":{},"headers":[],"relativePath":"interview/js-skill.md","filePath":"interview/js-skill.md"}'),o={name:"interview/js-skill.md"};function s(l,r,i,d,p,c){return n(),e("div",null,r[0]||(r[0]=[a('<h1 id="javascript面试题集" tabindex="-1">JavaScript面试题集 <a class="header-anchor" href="#javascript面试题集" aria-label="Permalink to &quot;JavaScript面试题集&quot;">​</a></h1><p>JavaScript是一种动态的编程语言，广泛应用于网页开发中，主要用于增强网页的交互性和动态性。</p><h2 id="_1、原生js如何添加、删除、移动、复制、创建和查找节点" tabindex="-1">1、原生JS如何添加、删除、移动、复制、创建和查找节点？ <a class="header-anchor" href="#_1、原生js如何添加、删除、移动、复制、创建和查找节点" aria-label="Permalink to &quot;1、原生JS如何添加、删除、移动、复制、创建和查找节点？&quot;">​</a></h2><p><strong>（1）添加创建</strong>：document.createElement()<br><strong>（2）删除</strong>：document.parentNode.removeChild()<br><strong>（3）移动</strong>：targetNode.appendChild(nodeToMove)<br><strong>（3）复制</strong>：nodeToCopy.cloneNode(true)<br><strong>（3）查找</strong>：document.getElementById()、getElementsByClassName()、querySelector()、querySelectorAll()、getElementsByTagName()</p><h2 id="数组对象的操作方法有哪些" tabindex="-1">数组对象的操作方法有哪些？ <a class="header-anchor" href="#数组对象的操作方法有哪些" aria-label="Permalink to &quot;数组对象的操作方法有哪些？&quot;">​</a></h2><p><strong>（1）插入和删除</strong>：<br>   push()、pop():尾部插入和删除数组中一个或多个元素，会修改数组；<br>   unshift() 、shift():首部插入和删除数组中一个或多个元素，会修改数组； <strong>（2）转换方法</strong>：<br>   slice(start, end):start可选参数表示开始截取的位置，end表示结束截取的位置，该方法不会改变原数组，会返回一个新的数组；<br>   splice(start, num, value):start可选参数表示开始替换的位置，num表示替换删除的元素个数，value表示替换的新元素，该方法改变原数组；   join(string)：用于将数组元素连接成一个字符串的方法，string为需要指定的分割符，默认指定为逗号；<br>   toString(arr)：用于将数组转化为字符串；<br>   map((e)=&gt;{})：通过指定函数处理数组每个元素，返回新数组;<br>   filter((e)=&gt;{})：返回数组中满足条件的元素组成的新数组; <strong>（2）其他方法</strong>：<br>   reverse()反转数组、sort()数组排序、concat()连接数组、forEach()数组循环；</p><h2 id="_1、call-apply-bind的区别" tabindex="-1">1、Call\\Apply\\Bind的区别 <a class="header-anchor" href="#_1、call-apply-bind的区别" aria-label="Permalink to &quot;1、Call\\Apply\\Bind的区别&quot;">​</a></h2><p><strong>（1）相同点</strong>：都可以用于改变this的指向，传入的第一个参数都是绑定this的指向，若第一个参数是null或undefined，则会把全局对象window作为this的值；</p><p><strong>（2）不同点</strong>：<br> ① Call传入的是参数列表，但只能一次传入，而Apply传入的是数组，Bind传入的也是参数列表，但是可以多次传入； ② Bind返回的是一个改变this指向的函数，便于稍后调用，而Call和Apply会立即调用； ③ Call和Apply适用于需要立即执行函数并改变上下文的场景；Bind适用需要创建一个新的函数，可以预先设定部分参数以便后续调用；</p><h2 id="_1、js的垃圾回收机制-gc" tabindex="-1">1、JS的垃圾回收机制(GC) <a class="header-anchor" href="#_1、js的垃圾回收机制-gc" aria-label="Permalink to &quot;1、JS的垃圾回收机制(GC)&quot;">​</a></h2><p>  垃圾回收是一种自动内存管理机制，用于检测和清楚不再使用的对象以释放内存空间，当一个对象不再被引用，垃圾回收器会将其进行标记，然后在适当的时候清除这些垃圾，并将内存回收给系统以供其他对象使用，其目的是减少内存泄露和提高程序的性能，而JS引擎的垃圾回收是自动执行的，无需像C和C++语言需要手动管理； 垃圾回收算法：<br>   <strong>①引用计数</strong>：通过跟踪每个对象被引用的次数来确定对象是否为垃圾，每个对象都有一个引用计数器，当对象被创建时计数器为1，引用则加1，不被引用时减1，减至0时，则可以被垃圾收集器回收；<br>   <strong>注意</strong>：引用计数器对于循环引用情况时，引用计数都不会为0，导致无法处理容易造成内存泄漏；<br>   <strong>①标记-清除</strong>：通过标记不再使用的对象，然后清除这些对象的内存空间以便后续内存分配使用；标记阶段：堆内存中所有对象遍历，递归地遍历对象的引用关系，并给每个对象打上标记表示对象时可达的不是垃圾；清楚阶段：同样遍历整个内存，对于未标记的对象，判定为垃圾并立即回收释放内存空间；<br>   <strong>注意</strong>：标记-清除算法会存在垃圾回收过程中暂停进行垃圾回收操作现象，影响用户体验；还会在回收过程中阐述大量不连续的，碎片化的内存空间，导致内存利用率低；<br>   <strong>③ 标记-整理</strong>：主要分为标记阶段、整理阶段、清除阶段；相当于标记-清除的增强操作，在清除阶段会先执行整理操作，移动对象位置，对内存空间进行压缩；解决了内存碎片化的问题；<br>   <strong>注意</strong>：标记-整理算法同样会暂停程序的执行，进行垃圾回收操作；</p><h2 id="more" tabindex="-1">More <a class="header-anchor" href="#more" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Check out the documentation for the <a href="https://vitepress.dev/guide/markdown" target="_blank" rel="noreferrer">full list of markdown extensions</a>.</p>',13)]))}const u=t(o,[["render",s]]);export{h as __pageData,u as default};
