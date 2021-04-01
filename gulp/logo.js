module.exports = function(gulp, $, info, paths){
  'use strict';

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

  	return src(paths.src + '/images/logo/*.png')
  						 .pipe($.responsive({
  							 '*.png': resizecfg
  						 }))
                         .pipe($.imagemin({verbose: true}))
  						 .pipe(dest(paths.target + '/images/logo'));
  });

  gulp.task('logo-svg', function(){
	  return src(paths.src + '/images/logo/*.svg')
		  .pipe($.imagemin({verbose: true}))
		  .pipe(dest(paths.target + '/images/logo'));
  });
	gulp.task('logo', ['logo-svg', 'logo-png']);
};
