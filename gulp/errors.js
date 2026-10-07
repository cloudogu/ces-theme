module.exports = function (gulp, $, info, paths) {
    'use strict';

    var sass = require('gulp-sass')(require('sass'));
    var relativeSourcemaps = require('./lib/relative-sourcemaps');
    var cssnano = require('cssnano');
    var responsive = require('./lib/responsive');
    var htmlmin = require('./lib/htmlmin');
    var imagemin = require('./lib/imagemin');

    gulp.task('errors-html', function () {
        return gulp.src(paths.src + '/{4,5}*.html')
            .pipe($.replace('{{context}}', '/errors/'))
            .pipe(htmlmin({
                minifyJS: true,
                minifyCSS: true,
                removeComments: true,
                collapseWhitespace: true
            }))
            .pipe(gulp.dest(paths.target + '/errors'));
    });

    gulp.task('errors-css', function () {
        return gulp.src(paths.src + '/scss/errors.scss', { sourcemaps: true })
            .pipe(sass())
            .pipe(relativeSourcemaps())
            .pipe($.postcss([cssnano()]))
            .pipe(gulp.dest(paths.target + '/errors/css', { sourcemaps: '.' }));
    });

    gulp.task('errors-ces-css', function () {
        return gulp.src(paths.src + '/scss/ces.scss', { sourcemaps: true })
            .pipe(sass())
            .pipe(relativeSourcemaps())
            .pipe($.postcss([cssnano()]))
            .pipe(gulp.dest(paths.target + '/errors/css', { sourcemaps: '.' }));
    });

    gulp.task('errors-scripts', function () {
        return gulp.src(paths.src + '/scripts/{4,5}*.js', { sourcemaps: true })
            .pipe($.uglify())
            .pipe(gulp.dest(paths.target + '/errors/scripts', { sourcemaps: '.' }));
    });

    gulp.task('errors-logo-blib', function () {
        return gulp.src(paths.src + '/images/logo/blib-white.png', { encoding: false })
            .pipe(responsive({
                width: 320,
                rename: {
                    suffix: '-320px'
                }
            }))
            .pipe(imagemin())
            .pipe(gulp.dest(paths.target + '/errors/images/logo'));
    });

    gulp.task('errors-logo', function () {
        return gulp.src(paths.src + '/images/logo/logo-white.png', { encoding: false })
            .pipe(responsive({
                width: 320,
                rename: {
                    suffix: '-320px'
                }
            }))
            .pipe(imagemin())
            .pipe(gulp.dest(paths.target + '/errors/images/logo'));
    });

    gulp.task('errors-images', function () {
        return gulp.src(paths.src + '/images/*.{jpg,png,gif,svg}', { encoding: false })
            .pipe(imagemin())
            .pipe(gulp.dest(paths.target + '/errors/images'));
    });

    gulp.task('errors-animations-json', function () {
        return gulp.src(paths.src + '/animations/*.json')
            .pipe(gulp.dest(paths.target + '/errors/animations'));
    });

    gulp.task('errors-animations-scripts', function () {
        return gulp.src(paths.src + '/animations/*.js')
            .pipe(gulp.dest(paths.target + '/errors/animations'));
    });

    gulp.task('errors-favicon-ico', function () {
        return gulp.src(paths.src + '/favicon.ico', { encoding: false })
            .pipe(gulp.dest(paths.target + '/errors/images/favicon'));
    });

    gulp.task('errors-favicon-png', function () {
        var resizecfg = [{
            width: 64,
            rename: {
                suffix: '-64px'
            }
        }, {
                width: 32,
                rename: {
                    suffix: '-32px'
                }
            }, {
                width: 16,
                rename: {
                    suffix: '-16px'
                }
            }];

        return gulp.src(paths.src + '/images/favicon/*', { encoding: false })
            .pipe(responsive(resizecfg))
            .pipe(imagemin())
            .pipe(gulp.dest(paths.target + '/errors/images/favicon'));
    });

    gulp.task('errors', gulp.parallel(
        'errors-html',
        'errors-css',
        'errors-ces-css',
        'errors-scripts',
        'errors-logo-blib',
        'errors-logo',
        'errors-images',
        'errors-animations-json',
        'errors-animations-scripts',
        'errors-favicon-ico',
        'errors-favicon-png'
    ));
};
