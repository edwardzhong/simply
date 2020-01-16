const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function css() {
	return src('./less/*.less')
		.pipe(less())
		.pipe(postcss())
		.pipe(cleanCSS({ compatibility: 'ie8' })) //压缩代码，兼容浏览器，优化代码
		// .pipe(rename({ suffix: '.min' }))
		.pipe(rename('index.css'))
		.pipe(dest('./source/css'));
}

function js() {
	return (
		src('./js/*.js')
			.pipe(
				babel({
					minified: true, //压缩
					comments: false,
					sourceType: 'script',
					// presets: ['@babel/env'],
					// plugins: ['@babel/transform-runtime']
				}),
			)
			// .pipe(rename({ suffix: '.min' }))
			.pipe(concat('index.js')) //合并
			.pipe(dest('./source/js'))
	);
}

// series   从左至右依次串行执行任务
// parallel 并行执行任务
exports.default = parallel(css, js);
