module.exports = function(gulp, $, info, paths){
  'use strict';

    gulp.task('images', function(){
        return gulp.src(paths.src + '/images/*.{jpg,png,gif,svg}', {encoding: false})
            .pipe($.imagemin())
            .pipe(gulp.dest(paths.target + '/images'));
    });
};
