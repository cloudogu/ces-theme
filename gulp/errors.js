module.exports = function (gulp, $, info, paths) {
    'use strict';

    var pipeline = require('stream').pipeline;

    gulp.task('errors-html', function (done) {
        pipeline(
            gulp.src(paths.src + '/{4,5}*.html'),
            $.replace('{{context}}', '/errors/'),
            $.htmlmin({
                minifyJS: true,
                minifyCSS: true,
                removeComments: true,
                collapseWhitespace: true
            }),
            gulp.dest(paths.target + '/errors'),
            done
        );
    });

    gulp.task('errors-css', function (done) {
        pipeline(
            gulp.src([paths.src + '/scss/errors.scss', paths.src + '/scss/ces.scss'], { sourcemaps: true }),
            $.sass(),
            $.relativeSourcemaps(),
            $.cssnano(),
            gulp.dest(paths.target + '/errors/css', { sourcemaps: '.' }),
            done
        );
    });

    gulp.task('errors-scripts', function (done) {
        pipeline(
            gulp.src(paths.src + '/scripts/{4,5}*.js', { sourcemaps: true }),
            $.uglify(),
            gulp.dest(paths.target + '/errors/scripts', { sourcemaps: '.' }),
            done
        );
    });

    gulp.task('errors-logo', function (done) {
        pipeline(
            gulp.src(paths.src + '/images/logo/{blib,logo}-white.png', { encoding: false }),
            $.responsive([320]),
            $.imagemin(),
            gulp.dest(paths.target + '/errors/images/logo'),
            done
        );
    });

    gulp.task('errors-images', function (done) {
        pipeline(
            gulp.src(paths.src + '/images/*.{jpg,png,gif,svg}', { encoding: false }),
            $.imagemin(),
            gulp.dest(paths.target + '/errors/images'),
            done
        );
    });

    gulp.task('errors-animations', function (done) {
        pipeline(
            gulp.src(paths.src + '/animations/*.{json,js}'),
            gulp.dest(paths.target + '/errors/animations'),
            done
        );
    });

    gulp.task('errors-favicon-ico', function (done) {
        pipeline(
            gulp.src(paths.src + '/favicon.ico', { encoding: false }),
            gulp.dest(paths.target + '/errors/images/favicon'),
            done
        );
    });

    gulp.task('errors-favicon-png', function (done) {
        pipeline(
            gulp.src(paths.src + '/images/favicon/*', { encoding: false }),
            $.responsive([64, 32, 16]),
            $.imagemin(),
            gulp.dest(paths.target + '/errors/images/favicon'),
            done
        );
    });

    gulp.task('errors', gulp.parallel(
        'errors-html',
        'errors-css',
        'errors-scripts',
        'errors-logo',
        'errors-images',
        'errors-animations',
        'errors-favicon-ico',
        'errors-favicon-png'
    ));
};
