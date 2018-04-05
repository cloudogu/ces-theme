'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var info = require('./package.json');
var deploy = require('gulp-gh-pages');

var paths = {
	src: './src',
	target: './dist',
	vendor: './bower_components'
};

var tasks = require('fs').readdirSync('./gulp');
tasks.forEach(function(file){
  require('./gulp/' + file)(gulp, $, info, paths);
});

//* Update [github pages](http://cloudogu.github.io/ces-theme/) with `gulp deploy`
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});
