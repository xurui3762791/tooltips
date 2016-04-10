# tooltips

纯css工具提示  bubbles-tooltips [查看效果](http://xurui3762791.github.io/bubbles/)

# 演示
![tooltips](https://raw.githubusercontent.com/xurui3762791/tooltips/gh-pages/img/picturedemo1.gif)
![tooltips](https://raw.githubusercontent.com/xurui3762791/tooltips/gh-pages/img/picturedemo2.gif)

# 使用

## 在 stylus 中使用

```css
@import "node_modules/tooltips"
```


```html
<button data-bubbles="向上提示" data-bubbles-pos="up">向上提示</button>
向上提示
```

## 常规使用方法

直接在页面中引用`bubbles.min.css`

```html
<link rel="stylesheet" href="bubbles.min.css">
<span data-bubbles="我是提示" data-bubbles-pos="up">bubbles</span>
```

