module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('favicon-ico', function(){
  	return gulp.src(paths.src + '/favicon.ico')
  						 .pipe(gulp.dest(paths.target + '/images/favicon'));
  });

  gulp.task('favicon-png', function(){
  	var resizecfg = [{
  		width: 64,
  		rename: {
  			suffix: '-64px'
  		}
  	},{
  	  width: 32,
  		rename: {
  			suffix: '-32px'
  		}
  	},{
  		width: 16,
  		rename: {
  			suffix: '-16px'
  		}
  	}];

  	return gulp.src(paths.src + '/images/favicon/*')
  						 .pipe($.responsive({
  							 '*.png': resizecfg
  						 }))
                         .pipe($.imagemin({verbose: true}))
  						 .pipe(gulp.dest(paths.target +'/images/favicon'));
  });

  gulp.task('favicon', ['favicon-ico', 'favicon-png']);
};
