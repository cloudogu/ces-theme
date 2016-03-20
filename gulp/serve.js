module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('serve', ['scss', 'logo', 'favicon'], function(){
    var browserSync = require('browser-sync').create();

    var files = [
      paths.target,
      paths.src + '/**/*.html',
      paths.src + '/**/*.css',
      paths.src + '/**/*.js'
    ];

  	browserSync.init(files, {
  		server: {
  			baseDir: [paths.src, paths.target, paths.vendor]
  		}
  	});

  	gulp.watch([paths.src + '/scss/*.scss'], ['scss']);
  });

};
