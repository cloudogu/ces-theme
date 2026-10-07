import { createRequire } from 'module';
import fs from 'fs';
import gulp from 'gulp';
import ghpages from 'gh-pages';

const require = createRequire(import.meta.url);
const info = require('./package.json');
const $ = {
  jsonMinify: require('gulp-json-minify'),
  postcss: require('gulp-postcss'),
  rename: require('gulp-rename'),
  replace: require('gulp-replace'),
  uglify: require('gulp-uglify')
};

const paths = {
	src: './src',
	target: './dist',
	vendor: './node_modules'
};

// gulp.parallel/gulp.series resolve task names eagerly, so composite tasks must be registered last
const compositeTasks = ['default.js', 'serve.js'];
const tasks = fs.readdirSync('./gulp').filter(function(file){
  return file.endsWith('.js') && compositeTasks.indexOf(file) === -1;
}).concat(compositeTasks);
tasks.forEach(function(file){
  require('./gulp/' + file)(gulp, $, info, paths);
});

//* Update [github pages](http://cloudogu.github.io/ces-theme/) with `gulp deploy`
gulp.task('deploy', function () {
  return ghpages.publish(paths.target);
});
