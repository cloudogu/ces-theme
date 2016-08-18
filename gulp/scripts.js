module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('scripts', function(){
  	return gulp.src(paths.src + '/scripts/*.js')
  						 .pipe($.sourcemaps.init())
     					 .pipe($.uglify())
  						 .pipe(gulp.dest(paths.target + '/scripts'))
  						 .pipe($.rename({ suffix: '.min' }))
  						 .pipe($.sourcemaps.write('.'))
  						 .pipe(gulp.dest(paths.target + '/scripts'));
  });

};
