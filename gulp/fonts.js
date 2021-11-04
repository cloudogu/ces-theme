module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('bootstrap-fonts', function(){
  	return gulp.src(paths.vendor + '/bootstrap-sass/assets/fonts/**')
  						 .pipe(gulp.dest(paths.target + '/fonts'));
  });


 gulp.task('webfonts', function() {
     return gulp.src(paths.src + '/fonts/**')
         .pipe(gulp.dest(paths.target + '/fonts'));
 });

 gulp.task('fonts', ['bootstrap-fonts', 'webfonts']);
};