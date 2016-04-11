# tooltips

[![](https://jaywcjlove.github.io/sb/ico/stylus.svg)](http://stylus-lang.com/) ![](http://jaywcjlove.github.io/sb/license/mit.svg) [![GitHub issues](https://img.shields.io/github/issues/xurui3762791/tooltips.svg)](https://github.com/xurui3762791/tooltips/issues) [![GitHub forks](https://img.shields.io/github/forks/xurui3762791/tooltips.svg)](https://github.com/xurui3762791/tooltips/network) [![GitHub stars](https://img.shields.io/github/stars/xurui3762791/tooltips.svg)](https://github.com/xurui3762791/tooltips/stargazers)

纯css工具提示  bubbles-tooltips [查看效果](http://xurui3762791.github.io/tooltips/)


# 演示
![tooltips](https://raw.githubusercontent.com/xurui3762791/tooltips/gh-pages/img/demo.gif)

# 使用

## 在 stylus 中使用

```css
@import "node_modules/tooltips"
```




## 常规使用方法

直接在页面中引用`tooltips.min.css`

```html
<link rel="stylesheet" href="tooltips.min.css">
<span data-tooltips="我是提示" data-tooltips-pos="up">tooltips</span>
```

## 在页面中使用

```html

<button data-tooltips="top" class="tooltips-top">top</button>
<button data-tooltips="bottom" class="tooltips-bottom">bottom</button>
<button data-tooltips="left" class="tooltips-left">left</button>
<button data-tooltips="right" class="tooltips-right">right</button>
<button data-tooltips="bottom-left" class="tooltips-bottom-left">bottom-left</button>
<button data-tooltips="bottom-right" class="tooltips-bottom-right">bottom-right</button>
<button data-tooltips="top-right" class="tooltips-top-right">top-right</button>
<button data-tooltips="top-left" class="tooltips-top-left">top-left</button>

<button class="tooltips-top  tooltips-small"  data-tooltips="small工具提示">Small</button>  
<button class="tooltips-top  tooltips-medium"  data-tooltips="medium工具提示!!!!!!!">Medium</button>
<button class="tooltips-top  tooltips-large"  data-tooltips="large工具提示!!!!!!!">Large</button>   
<button class="tooltips-bottom  tooltips-always" data-tooltips="...还可以这样提示">还可以这样提示</button> 


```

# 开发 

```bash
$ npm run build
$ npm run watch
```

