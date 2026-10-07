import { createRequire } from 'module';
import fs from 'fs';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import ghpages from 'gh-pages';

const require = createRequire(import.meta.url);
const info = require('./package.json');
const $ = loadPlugins({
  config: info,
  requireFn: require
});

const paths = {
	src: './src',
	target: './dist',
	vendor: './bower_components'
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
