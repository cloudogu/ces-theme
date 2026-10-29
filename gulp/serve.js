module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('serve', gulp.series(gulp.parallel('scss', 'scripts', 'logo', 'favicon', 'images', 'lottie-animations', 'html'), function(done){
    var browserSync = require('browser-sync').create();

    var files = [
      paths.target,
      paths.src + '/**/*.html',
      paths.src + '/**/*.css',
      paths.src + '/**/*.js'
    ];

  	browserSync.init(files, {
  		server: {
  			baseDir: [paths.target, paths.src]
  		}
  	});

  	gulp.watch([paths.src + '/scss/*.scss'], gulp.series('scss'));
    gulp.watch([paths.src + '/*.html'], gulp.series('html'));
    done();
  }));

};
