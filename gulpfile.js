'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var ghpages = require('gh-pages');
var info = require('./package.json');

var paths = {
	src: './src',
	target: './dist',
	vendor: './node_modules'
};

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
  roundColors: function(){
    return postcss([require('./gulp/lib/round-colors')()]);
  },
  sass: function(){
    // bootstrap-sass 3 depends on @import and global variable overrides; quietDeps would also hide our own partials
    return sass({ loadPaths: [paths.vendor], silenceDeprecations: ['import'], verbose: true, logger: require('./gulp/lib/sass-logger') });
  },
  uglify: function(){
    return uglify({ module: false });
  }
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
gulp.task('deploy', function (done) {
  ghpages.publish(paths.target, done);
});
