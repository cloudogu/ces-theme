module.exports = function(gulp, $, info, paths){
  'use strict';

  var responsive = require('./lib/responsive');
  var imagemin = require('./lib/imagemin');

  const {src, dest} = require('gulp');

  gulp.task('logo-png', function(){
  	var resizecfg = [{
  		width: 640,
  		rename: {
  			suffix: '-640px'
  		}
  	},{
  	  width: 320,
  		rename: {
  			suffix: '-320px'
  		}
  	},{
  		width: 160,
  		rename: {
  			suffix: '-160px'
  		}
  	},{
  		width: 30,
  		quality: 100,
  		rename: {
  			suffix: '-30px'
  		}
  	}];

  	return src(paths.src + '/images/logo/*.png', {encoding: false})
  						 .pipe(responsive(resizecfg))
                         .pipe(imagemin())
  						 .pipe(dest(paths.target + '/images/logo'));
  });

  gulp.task('logo-svg', function(){
	  return src(paths.src + '/images/logo/*.svg', {encoding: false})
		  .pipe(imagemin())
		  .pipe(dest(paths.target + '/images/logo'));
  });
	gulp.task('logo', gulp.parallel('logo-svg', 'logo-png'));
};
