module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('fonts', function(){
  	return gulp.src(paths.vendor + '/bootstrap-sass/assets/fonts/**')
  						 .pipe(gulp.dest(paths.target + '/fonts'));
  });

};
