module.exports = function(gulp, $, info, paths){
    'use strict';

    var pipeline = require('stream').pipeline;

    gulp.task('lottie-animations-json', function(done){
        pipeline(
            gulp.src(paths.src + '/animations/*.json'),
            $.jsonMinify({verbose: true}),
            gulp.dest(paths.target + '/animations'),
            done
        );
    });

    gulp.task('lottie-animations-scripts', function(done){
        pipeline(
            gulp.src(paths.src + '/animations/lottie-player.js'),
            gulp.dest(paths.target + '/animations'),
            done
        );
    });

    gulp.task('lottie-animations', gulp.parallel('lottie-animations-json', 'lottie-animations-scripts'));
};
