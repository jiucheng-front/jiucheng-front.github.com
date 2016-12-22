/**
 * Created by Administrator on 2016/11/5.
 */
var gulp=require('gulp');
var minifyCSS=require('gulp-minify-css');
var imagemin=require('gulp-imagemin');
var cache=require('gulp-cache');

gulp.task('minifyCSS',function(){
    gulp.src('app/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('imagemin',function(){
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
////设置默认的任务，可以同时执行多个
//gulp.task('default',function(){
//    gulp.run('minifyCSS','cache');
//});