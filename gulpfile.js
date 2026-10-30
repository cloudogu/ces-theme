'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var ghpages = require('gh-pages');
var execFileSync = require('child_process').execFileSync;
var fs = require('fs');
var os = require('os');
var path = require('path');
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
  // only released versions are deployed: the tag must match the package.json version
  var tag = info.version;
  try {
    execFileSync('git', ['rev-parse', '--quiet', '--verify', 'refs/tags/' + tag + '^{commit}'], { stdio: 'ignore' });
  } catch (e) {
    return done(new Error('Tag ' + tag + ' from package.json not found, release it first'));
  }

  // check out the tag in a temporary worktree, so the current branch and local changes are not published
  var tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ces-theme-'));
  var worktree = path.join(tmpDir, tag);
  execFileSync('git', ['worktree', 'add', '--quiet', '--detach', worktree, tag], { stdio: 'inherit' });

  // replace the gh-pages content (dotfiles are kept), commit and push to origin
  ghpages.publish(path.join(worktree, 'dist'), { message: 'Update dist folder to ' + tag }, function (err) {
    // remove the temporary worktree, also if publishing failed
    execFileSync('git', ['worktree', 'remove', '--force', worktree], { stdio: 'inherit' });
    fs.rmSync(tmpDir, { recursive: true, force: true });
    done(err);
  });
});
