module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('logo', function(){
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

  	return gulp.src(paths.src + '/images/logo/*')
  						 .pipe($.responsive({
  							 '*.png': resizecfg
  						 }))
  						 .pipe(gulp.dest(paths.target + '/images/logo'));
  });

};
