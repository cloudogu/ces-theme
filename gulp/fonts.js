module.exports = function(gulp, $, info, paths){
  'use strict';

  var pipeline = require('stream').pipeline;

  gulp.task('bootstrap-fonts', function(done){
    pipeline(
      gulp.src(paths.vendor + '/bootstrap-sass/assets/fonts/**', {encoding: false}),
      gulp.dest(paths.target + '/fonts'),
      done
    );
  });

  gulp.task('webfonts', function(done){
    pipeline(
      gulp.src(paths.src + '/fonts/**', {encoding: false}),
      gulp.dest(paths.target + '/fonts'),
      done
    );
  });

  gulp.task('fonts', gulp.parallel('bootstrap-fonts', 'webfonts'));
};
