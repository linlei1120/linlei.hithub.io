import{_ as a,c as r,a2 as t,o}from"./chunks/framework.Cy5ZJKdt.js";const p=JSON.parse('{"title":"HTML5面试题集","description":"","frontmatter":{},"headers":[],"relativePath":"interview/h5css-skill.md","filePath":"interview/h5css-skill.md"}'),s={name:"interview/h5css-skill.md"};function l(i,e,c,n,d,h){return o(),r("div",null,e[0]||(e[0]=[t('<h1 id="html5面试题集" tabindex="-1">HTML5面试题集 <a class="header-anchor" href="#html5面试题集" aria-label="Permalink to &quot;HTML5面试题集&quot;">​</a></h1><p>HTML5是互联网的新一代Web内容构建标准，是构建以及呈现互联网内容的一种语言方式，被认为是互联网的核心技术之一。</p><h1 id="css3面试题集" tabindex="-1">CSS3面试题集 <a class="header-anchor" href="#css3面试题集" aria-label="Permalink to &quot;CSS3面试题集&quot;">​</a></h1><p>CSS3 是CSS（层叠样式表）技术的最新标准。主要包括盒子模型、列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局、过渡动画、2D/3D转换等模块。</p><h3 id="_1、px-em-rem的区别" tabindex="-1">1、px/em/rem的区别？ <a class="header-anchor" href="#_1、px-em-rem的区别" aria-label="Permalink to &quot;1、px/em/rem的区别？&quot;">​</a></h3><ul><li>px：绝对单位长度，相对于显示器屏幕分辨率来定义，大小固定，不随浏览器的缩放而改变；</li><li>em：相对单位长度，相对于当前元素的父元素字体大小定义；</li><li>rem：CSS3引入的一种相对单位长度，它相对于HTML根元素的字体大小，优点是可以通过直接修改根元素字体大小来控制长度比例；初始：1em = 1rem = 16px</li></ul><h3 id="_2、什么是回流和重绘" tabindex="-1">2、什么是回流和重绘？ <a class="header-anchor" href="#_2、什么是回流和重绘" aria-label="Permalink to &quot;2、什么是回流和重绘？&quot;">​</a></h3><p><strong>（1）定义及区别</strong>：<br>   ① 回流也叫重排，指的是浏览器重新计算并绘制经修改后的元素的过程，并重新渲染页面，元素的几何属性发生改变（比如修改元素的宽、高或隐藏元素等）‌；<br>   ② 重绘指的是浏览器根据元素的样式信息重新绘制页面，‌但没有改变元素的几何属性（比如修改了颜色或背景色）。<br><strong>（2）如何避免</strong>：<br>   ① 尽量使用class属性来批量修改样式；<br>   ② 使用CSS3动画或transform来实现动画效果，因为这些属性通常会在GPU层面处理，而不会引起回流，性能更好；<br>   ③避免频繁读取布局信息，如获取offsetTop、offsetLeft等信息；<br><strong>注意</strong>：重绘不一定导致回流，回流一定会导致重绘，回流的性能开销更大</p><h2 id="_3、css常用的伪元素有哪些-如何使用" tabindex="-1">3、CSS常用的伪元素有哪些，如何使用 <a class="header-anchor" href="#_3、css常用的伪元素有哪些-如何使用" aria-label="Permalink to &quot;3、CSS常用的伪元素有哪些，如何使用&quot;">​</a></h2><p>  常用的伪元素有：<br>   <code>::before</code>（在元素之前插入内容）、<code>::after</code>（在元素之后添加效果）、:<code>:first-letter</code>（设置第一个字母的样式）、<code>::first-line</code>（设置第一行的样式）、<code>::placeholder</code>（设置输入字段的占位符）</p>',10)]))}const f=a(s,[["render",l]]);export{p as __pageData,f as default};