module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('default', gulp.parallel('scss', 'scripts', 'fonts', 'logo', 'favicon', 'images', 'lottie-animations', 'html', 'errors'));
};
