module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('images', function(){
  	return gulp.src(paths.src + '/images/*.{jpg,png,gif}')
                         .pipe($.imagemin({verbose: true}))
  						 .pipe(gulp.dest(paths.target + '/images'));
  });

};
