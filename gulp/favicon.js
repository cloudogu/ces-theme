module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('favicon-ico', function(){
  	return gulp.src(paths.src + '/favicon.ico', {encoding: false})
  						 .pipe(gulp.dest(paths.target + '/images/favicon'));
  });

  gulp.task('favicon-png', function(){
  	return gulp.src(paths.src + '/images/favicon/*', {encoding: false})
  						 .pipe($.responsive([64, 32, 16]))
                         .pipe($.imagemin())
  						 .pipe(gulp.dest(paths.target +'/images/favicon'));
  });

  gulp.task('favicon', gulp.parallel('favicon-ico', 'favicon-png'));
};
