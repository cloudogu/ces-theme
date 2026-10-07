'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var ghpages = require('gh-pages');
var info = require('./package.json');

var $ = {
  cssnano: function(){
    return postcss([cssnano()]);
  },
  htmlmin: require('./gulp/lib/htmlmin'),
  imagemin: require('./gulp/lib/imagemin'),
  jsonMinify: require('gulp-json-minify'),
  relativeSourcemaps: require('./gulp/lib/relative-sourcemaps'),
  rename: require('gulp-rename'),
  replace: require('gulp-replace'),
  responsive: require('./gulp/lib/responsive'),
  sass: require('gulp-sass')(require('sass')),
  uglify: require('gulp-uglify')
};

var paths = {
	src: './src',
	target: './dist',
	vendor: './node_modules'
};

// gulp.parallel/gulp.series resolve task names eagerly, so composite tasks must be registered last
var compositeTasks = ['default.js', 'serve.js'];
var tasks = require('fs').readdirSync('./gulp').filter(function(file){
  return file.endsWith('.js') && compositeTasks.indexOf(file) === -1;
}).concat(compositeTasks);
tasks.forEach(function(file){
  require('./gulp/' + file)(gulp, $, info, paths);
});

//* Update [github pages](http://cloudogu.github.io/ces-theme/) with `gulp deploy`
gulp.task('deploy', function () {
  return ghpages.publish(paths.target);
});
