var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var uglify =require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var minifyCss =require('gulp-minify-css');

gulp.task('less', function () {
    // return watch('./source/less/*.less', function (){//监控到less内容一旦有变化，马上转换为css
    return gulp.src('./source/less/*.less')
    	.pipe(less())
    	.pipe(gulp.dest('./source/css'));
    // });
});

gulp.task('css',function(){
    return gulp.src('./source/css/*.css')
    	.pipe(concatCss("index.css"))
        .pipe(minifyCss())
    	.pipe(gulp.dest('./source/dist/css'))
});

gulp.task('js',function(){
	return gulp.src('./source/js/*.js')
	    .pipe(uglify())
	    .pipe(concat('index.js'))
	    .pipe(gulp.dest('./source/dist/js'));
});

gulp.task("default", ["less","css","js"]);
