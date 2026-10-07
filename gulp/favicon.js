module.exports = function(gulp, $, info, paths){
  'use strict';

  var pipeline = require('stream').pipeline;

  gulp.task('favicon-ico', function(done){
    pipeline(
      gulp.src(paths.src + '/favicon.ico', {encoding: false}),
      gulp.dest(paths.target + '/images/favicon'),
      done
    );
  });

  gulp.task('favicon-png', function(done){
    pipeline(
      gulp.src(paths.src + '/images/favicon/*', {encoding: false}),
      $.responsive([64, 32, 16]),
      $.imagemin(),
      gulp.dest(paths.target + '/images/favicon'),
      done
    );
  });

  gulp.task('favicon', gulp.parallel('favicon-ico', 'favicon-png'));
};
