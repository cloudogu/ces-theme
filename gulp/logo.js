module.exports = function(gulp, $, info, paths){
  'use strict';

  const {src, dest} = require('gulp');

  gulp.task('logo-png', function(){
  	return src(paths.src + '/images/logo/*.png', {encoding: false})
  						 .pipe($.responsive([640, 320, 160, 30]))
                         .pipe($.imagemin())
  						 .pipe(dest(paths.target + '/images/logo'));
  });

  gulp.task('logo-svg', function(){
	  return src(paths.src + '/images/logo/*.svg', {encoding: false})
		  .pipe($.imagemin())
		  .pipe(dest(paths.target + '/images/logo'));
  });
	gulp.task('logo', gulp.parallel('logo-svg', 'logo-png'));
};
