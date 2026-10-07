module.exports = function(gulp, $, info, paths){
  'use strict';

  var imagemin = require('./lib/imagemin');

    gulp.task('images', function(){
        return gulp.src(paths.src + '/images/*.{jpg,png,gif,svg}', {encoding: false})
            .pipe(imagemin())
            .pipe(gulp.dest(paths.target + '/images'));
    });
};
