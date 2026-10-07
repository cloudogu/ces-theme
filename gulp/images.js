module.exports = function(gulp, $, info, paths){
    'use strict';

    var pipeline = require('stream').pipeline;

    gulp.task('images', function(done){
        pipeline(
            gulp.src(paths.src + '/images/*.{jpg,png,gif,svg}', {encoding: false}),
            $.imagemin(),
            gulp.dest(paths.target + '/images'),
            done
        );
    });
};
