module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('scss', function(){
  	return gulp.src(paths.src + '/scss/*.scss')
  						 .pipe($.sourcemaps.init())
     					 .pipe($.sass())
  						 .pipe(gulp.dest(paths.target + '/css'))
  						 .pipe($.cssnano())
  						 .pipe($.rename('ces.min.css'))
  						 .pipe($.sourcemaps.write('.'))
  						 .pipe(gulp.dest(paths.target + '/css'));
  });

};
