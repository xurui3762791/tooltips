# tooltips

[![](https://jaywcjlove.github.io/sb/ico/stylus.svg)](http://stylus-lang.com/) ![](http://jaywcjlove.github.io/sb/license/mit.svg) [![GitHub issues](https://img.shields.io/github/issues/xurui3762791/tooltips.svg)](https://github.com/xurui3762791/tooltips/issues) [![GitHub forks](https://img.shields.io/github/forks/xurui3762791/tooltips.svg)](https://github.com/xurui3762791/tooltips/network) [![GitHub stars](https://img.shields.io/github/stars/xurui3762791/tooltips.svg)](https://github.com/xurui3762791/tooltips/stargazers)

纯css工具提示  bubbles-tooltips [查看效果](http://xurui3762791.github.io/tooltips/)


# 演示
![tooltips](https://raw.githubusercontent.com/xurui3762791/tooltips/gh-pages/img/demo2.gif)
![tooltips](https://raw.githubusercontent.com/xurui3762791/tooltips/gh-pages/img/demo3.gif)


# 安装

```bash

npm install tooltips --save

```

# 使用

## 在 gulp 中使用


### gulp
```css
var gulp = require('gulp');
var gutil = require('gulp-util');
var stylus = require('gulp-stylus');
var tooltips = require('tooltips');
var autoprefixer = require('gulp-autoprefixer');
var browserslist = ['Android 2.3', 'Android >= 4', 'Chrome >= 20', 'Firefox >= 24', 'Explorer >= 8', 'iOS >= 6', 'Opera >= 12', 'Safari >= 6'];
gulp.src('./public/styl/*.styl')
    .pipe(stylus({
        use:[tooltips()],
        compress:true
    }))
    .pipe(autoprefixer({
        browsers: browserslist,
        cascade: false
    }).on('error',gutil.log))
    .pipe(gulp.dest('./public/css'));

```

### index.styl
```css
@import 'tooltips'
.banner{
    height 140px
    font-size 24px
}

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

## 新增背景颜色提示

```html
 
<button data-tooltips="error tooltips" class="tooltips-top tooltips-error">error</button>
<button data-tooltips="warning tooltips" class="tooltips-top tooltips-warning">warning</button>
<button data-tooltips="info tooltips" class="tooltips-top tooltips-info">info</button>
<button data-tooltips="success tooltips" class="tooltips-top tooltips-success">top</button>


```

# 开发 

```bash
$ npm run build
$ npm run watch
```

