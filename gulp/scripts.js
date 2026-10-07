module.exports = function(gulp, $, info, paths){
  'use strict';

  var pipeline = require('stream').pipeline;

  gulp.task('scripts', function(done){
    pipeline(
      gulp.src(paths.src + '/scripts/*.js', {sourcemaps: true}),
      $.uglify(),
      gulp.dest(paths.target + '/scripts'),
      $.rename({ suffix: '.min' }),
      gulp.dest(paths.target + '/scripts', {sourcemaps: '.'}),
      done
    );
  });

};
