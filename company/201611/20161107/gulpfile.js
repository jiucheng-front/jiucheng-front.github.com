/**
 * Created by Administrator on 2016/11/7.
 */
var gulp=require('gulp');
var minifyCSS=require('gulp-minify-css');
var imagemin=require('gulp-imagemin');
var cache=require('gulp-cache');

//告知将要执行压缩CSS的任务
gulp.task('minifyCSS',function(){
    gulp.src('app/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
});

//告知将要执行的压缩图片任务
gulp.task('images',function(){
    gulp.src('app/images/*.+(jpg|png|gif|svg|GIF)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('cache',function(){
    gulp.src('app/images/*.+(jpg|png|gif|svg|GIF)')
        .pipe(cache(imagemin({
            interlaced:true
        })))
        .pipe(gulp.dest('dist/images'))
});