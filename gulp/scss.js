module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('scss', function(){
  	return gulp.src([paths.src + '/scss/*.scss', '!' + paths.src + '/scss/_*'])
  						 .pipe($.sourcemaps.init())
     					 .pipe($.sass())
  						 .pipe(gulp.dest(paths.target + '/css'))
  						 .pipe($.cssnano({ autoprefixer: false }))
  						 .pipe($.rename({ suffix: '.min' }))
  						 .pipe($.sourcemaps.write('.'))
  						 .pipe(gulp.dest(paths.target + '/css'));
  });

};
