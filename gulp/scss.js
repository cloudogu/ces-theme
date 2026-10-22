module.exports = function(gulp, $, info, paths){
  'use strict';

  var pipeline = require('stream').pipeline;

  gulp.task('scss', function(done){
    pipeline(
      gulp.src([paths.src + '/scss/*.scss', '!' + paths.src + '/scss/_*'], {sourcemaps: true}),
      $.sass(),
      $.relativeSourcemaps(),
      $.roundColors(),
      gulp.dest(paths.target + '/css'),
      $.cssnano(),
      $.rename({ suffix: '.min' }),
      gulp.dest(paths.target + '/css', {sourcemaps: '.'}),
      done
    );
  });

};
