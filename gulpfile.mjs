import { createRequire } from 'module';
import fs from 'fs';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import imagemin from 'gulp-imagemin';
import deploy from 'gulp-gh-pages';

const require = createRequire(import.meta.url);
const info = require('./package.json');
const $ = loadPlugins({
  config: info,
  pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*', '!gulp-imagemin'],
  requireFn: require
});
$.imagemin = imagemin;

const paths = {
	src: './src',
	target: './dist',
	vendor: './bower_components'
};

// gulp.parallel/gulp.series resolve task names eagerly, so composite tasks must be registered last
const compositeTasks = ['default.js', 'serve.js'];
const tasks = fs.readdirSync('./gulp').filter(function(file){
  return compositeTasks.indexOf(file) === -1;
}).concat(compositeTasks);
tasks.forEach(function(file){
  require('./gulp/' + file)(gulp, $, info, paths);
});

//* Update [github pages](http://cloudogu.github.io/ces-theme/) with `gulp deploy`
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});
