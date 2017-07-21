module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('default', ['scss', 'scripts', 'fonts', 'logo', 'favicon', 'images', 'html', 'errors']);
};
