module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('default', ['scss', 'scripts', 'fonts', 'logo', 'favicon', 'images', "lottie-animations-json", 'html', 'errors']);
};
