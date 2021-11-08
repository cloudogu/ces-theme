module.exports = function(gulp, $, info, paths){
    'use strict';

    gulp.task('lottie-animations-json', function(){
        return gulp.src(paths.src + '/animations/*.json')
            .pipe($.jsonMinify({verbose: true}))
            .pipe(gulp.dest(paths.target + '/animations'));
    });

    gulp.task('lottie-animations-scripts', function(){
        return gulp.src(paths.src + '/animations/lottie-player.js')
            .pipe(gulp.dest(paths.target + '/animations'));
    });

    gulp.task('lottie-animations', ['lottie-animations-json', 'lottie-animations-scripts']);
};
