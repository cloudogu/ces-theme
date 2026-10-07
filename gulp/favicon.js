module.exports = function(gulp, $, info, paths){
  'use strict';

  var responsive = require('./lib/responsive');
  var imagemin = require('./lib/imagemin');

  gulp.task('favicon-ico', function(){
  	return gulp.src(paths.src + '/favicon.ico', {encoding: false})
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

  	return gulp.src(paths.src + '/images/favicon/*', {encoding: false})
  						 .pipe(responsive(resizecfg))
                         .pipe(imagemin())
  						 .pipe(gulp.dest(paths.target +'/images/favicon'));
  });

  gulp.task('favicon', gulp.parallel('favicon-ico', 'favicon-png'));
};
