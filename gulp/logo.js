module.exports = function(gulp, $, info, paths){
  'use strict';

  var pipeline = require('stream').pipeline;

  gulp.task('logo-png', function(done){
    pipeline(
      gulp.src(paths.src + '/images/logo/*.png', {encoding: false}),
      $.responsive([640, 320, 160, 30]),
      $.imagemin(),
      gulp.dest(paths.target + '/images/logo'),
      done
    );
  });

  gulp.task('logo-svg', function(done){
    pipeline(
      gulp.src(paths.src + '/images/logo/*.svg', {encoding: false}),
      $.imagemin(),
      gulp.dest(paths.target + '/images/logo'),
      done
    );
  });

  gulp.task('logo', gulp.parallel('logo-svg', 'logo-png'));
};
