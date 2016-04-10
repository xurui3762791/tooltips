
var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var rename = require("gulp-rename");

// 监听
gulp.task('watch', function (cb) {
    gulp.watch('./styl/*',  ['styl']);

});
gulp.task('styl', function () {
    gulp.src('./styl/*.styl')
        .pipe(stylus({
            compress:true
        }))
        .pipe(rename('bubbles.min.css'))
        .pipe(concat('bubbles.min.css'))
        .pipe(gulp.dest('./bulid/css/'))

});




