module.exports = function(gulp, $, info, paths){
  'use strict';

  var sass = require('gulp-sass')(require('sass'));
  var relativeSourcemaps = require('./lib/relative-sourcemaps');

  gulp.task('scss', function(){
  	return gulp.src([paths.src + '/scss/*.scss', '!' + paths.src + '/scss/_*'], {sourcemaps: true})
     					 .pipe(sass())
     					 .pipe(relativeSourcemaps())
  						 .pipe(gulp.dest(paths.target + '/css'))
  						 .pipe($.cssnano({ autoprefixer: false }))
  						 .pipe($.rename({ suffix: '.min' }))
  						 .pipe(gulp.dest(paths.target + '/css', {sourcemaps: '.'}));
  });

};
