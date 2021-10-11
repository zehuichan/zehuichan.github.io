## Html 面试知识点总结

### 页面导入样式时，使用 `link` 和 `@import` 有什么区别？

1. 从属关系区别。 @import 是 CSS 提供的语法规则，只有导入样式表的作用；link 是 HTML 提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性、引入网站图标等。

2. 加载顺序区别。加载页面时，link 标签引入的 CSS 被同时加载；@import 引入的 CSS 将在页面加载完毕后被加载。

3. 兼容性区别。@import 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link 标签作为 HTML 元素，不存在兼容性问题。

4. DOM 可控性区别。可以通过 JS 操作 DOM ，插入 link 标签来改变样式；由于 DOM 方法是基于文档的，无法使用 @import 的方式插入样式。

### `disabled` 和 `readonly` 的区别？

disabled 指当 input 元素加载时禁用此元素。input 内容不会随着表单提交。

readonly 规定输入字段为只读。input 内容会随着表单提交。

无论设置 readonly 还是 disabled，通过 js 脚本都能更改 input 的 value

### `Html` 规范中为什么要求引用资源不加协议头 `http` 或者 `https`？

如果用户当前访问的页面是通过 `HTTPS` 协议来浏览的，那么网页中的资源也只能通过 `HTTPS` 协议来引用，否则浏览器会出现
警告信息，不同浏览器警告信息展现形式不同。

为了解决这个问题，我们可以省略 `URL` 的协议声明，省略后浏览器照样可以正常引用相应的资源，这项解决方案称为
protocol-relative URL，暂且可译作协议相对 URL。

如果使用协议相对 `URL`，无论是使用 `HTTPS`，还是 `HTTP` 访问页面，浏览器都会以相同的协议请求页面中的资源，避免弹出类似
的警告信息，同时还可以节省5字节的数据量。

## CSS 面试知识点总结

### 介绍一下标准的 CSS 的盒子模型？低版本 IE 的盒子模型有什么不同的？

1. 有两种盒子模型：IE盒模型（border-box）、W3C标准盒模型（content-box）
2. 盒模型：分为内容（content）、填充（padding）、边界（margin）、边框（border）四个部分

IE盒模型和W3C标准盒模型的区别：

1. W3C标准盒模型：属性width，height只包含内容content，不包含border和padding
2. IE盒模型：属性width，height包含content、border和padding，指的是content+padding+border。

在ie8+浏览器中使用哪个盒模型可以由box-sizing（CSS新增的属性）控制，默认值为content-box，即标准盒模型；
如果将box-sizing设为border-box则用的是IE盒模型。如果在ie6，7，8中DOCTYPE缺失会将盒子模型解释为IE 盒子模型。
若在页面中声明了DOCTYPE类型，所有的浏览器都会把盒模型解释为W3C盒模型。

### 如何居中 div？

一般常见的几种居中的方法有：

对于宽高固定的元素

1. 我们可以利用 `margin: 0 auto;` 来实现元素的水平居中。

2. 利用绝对定位，设置四个方向的值都为0，并将margin设置为auto，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中。

3. 利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过margin负值来调整元素的中心点到页面的中心。

4. 利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过translate来调整元素的中心点到页面的中心。

5. 使用flex布局，通过 `align-items: center` 和 `justify-content: center` 设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。

对于宽高不定的元素，上面的后面两种方法，可以实现元素的垂直和水平的居中。

### 为什么要初始化 CSS 样式？

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

最简单的初始化方法：`* { padding: 0; margin: 0; }`（强烈不建议）。

理由：由于是通配符，需要把所有的标签都遍历一遍，当网站较大时，样式比较多，这样写就大大的加强了网站运行的负载，会使网站加载的时候需要很长一段时间，因此一般大型的网站都有分层次的一套初始化样式。

建议使用 [normalize.css](http://necolas.github.io/normalize.css/) 或者 [minireset.css](https://jgthms.com/minireset.css/)

### 移动端1px问题

背景：由于不同的手机有不同的像素密度导致的。如果移动显示屏的分辨率始终是普通屏幕的2倍，1px的边框在devicePixelRatio=2的移动显示屏下会显示成2px，所以在高清瓶下看着1px总是感觉变胖了

解决方法：采用 `transform: scale()` 的方式

```css
.van-hairline--top::after {
  border-top-width: 1px;
}

[class*='van-hairline']::after {
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border: 0 solid #ebedf0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}
```