module.exports = function(gulp, $, info, paths){
    'use strict';

    gulp.task('lottie-animations-json', function(){
        return gulp.src(paths.src + '/animations/*.json')
            .pipe($.jsonMinify({verbose: true}))
            .pipe(gulp.dest(paths.target + '/animations'));
    });
};
