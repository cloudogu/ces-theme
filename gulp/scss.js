module.exports = function(gulp, $, info, paths){
  'use strict';

  var sass = require('gulp-sass')(require('sass'));
  var relativeSourcemaps = require('./lib/relative-sourcemaps');
  var cssnano = require('cssnano');

  gulp.task('scss', function(){
  	return gulp.src([paths.src + '/scss/*.scss', '!' + paths.src + '/scss/_*'], {sourcemaps: true})
     					 .pipe(sass())
     					 .pipe(relativeSourcemaps())
  						 .pipe(gulp.dest(paths.target + '/css'))
  						 .pipe($.postcss([cssnano()]))
  						 .pipe($.rename({ suffix: '.min' }))
  						 .pipe(gulp.dest(paths.target + '/css', {sourcemaps: '.'}));
  });

};
