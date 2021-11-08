module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('serve', ['scss', 'scripts', 'logo', 'favicon', 'images', "lottie-animations", 'html'], function(){
    var browserSync = require('browser-sync').create();

    var files = [
      paths.target,
      paths.src + '/**/*.html',
      paths.src + '/**/*.css',
      paths.src + '/**/*.js'
    ];

  	browserSync.init(files, {
  		server: {
  			baseDir: [paths.target, paths.src, paths.vendor]
  		}
  	});

  	gulp.watch([paths.src + '/scss/*.scss'], ['scss']);
    gulp.watch([paths.src + '/*.html'], ['html']);
  });

};
