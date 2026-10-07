module.exports = function (gulp, $, info, paths) {
    'use strict';

    gulp.task('errors-html', function () {
        return gulp.src(paths.src + '/{4,5}*.html')
            .pipe($.replace('{{context}}', '/errors/'))
            .pipe($.htmlmin({
                minifyJS: true,
                minifyCSS: true,
                removeComments: true,
                collapseWhitespace: true
            }))
            .pipe(gulp.dest(paths.target + '/errors'));
    });

    gulp.task('errors-css', function () {
        return gulp.src([paths.src + '/scss/errors.scss', paths.src + '/scss/ces.scss'], { sourcemaps: true })
            .pipe($.sass())
            .pipe($.relativeSourcemaps())
            .pipe($.cssnano())
            .pipe(gulp.dest(paths.target + '/errors/css', { sourcemaps: '.' }));
    });

    gulp.task('errors-scripts', function () {
        return gulp.src(paths.src + '/scripts/{4,5}*.js', { sourcemaps: true })
            .pipe($.uglify())
            .pipe(gulp.dest(paths.target + '/errors/scripts', { sourcemaps: '.' }));
    });

    gulp.task('errors-logo', function () {
        return gulp.src(paths.src + '/images/logo/{blib,logo}-white.png', { encoding: false })
            .pipe($.responsive([320]))
            .pipe($.imagemin())
            .pipe(gulp.dest(paths.target + '/errors/images/logo'));
    });

    gulp.task('errors-images', function () {
        return gulp.src(paths.src + '/images/*.{jpg,png,gif,svg}', { encoding: false })
            .pipe($.imagemin())
            .pipe(gulp.dest(paths.target + '/errors/images'));
    });

    gulp.task('errors-animations', function () {
        return gulp.src(paths.src + '/animations/*.{json,js}')
            .pipe(gulp.dest(paths.target + '/errors/animations'));
    });

    gulp.task('errors-favicon-ico', function () {
        return gulp.src(paths.src + '/favicon.ico', { encoding: false })
            .pipe(gulp.dest(paths.target + '/errors/images/favicon'));
    });

    gulp.task('errors-favicon-png', function () {
        return gulp.src(paths.src + '/images/favicon/*', { encoding: false })
            .pipe($.responsive([64, 32, 16]))
            .pipe($.imagemin())
            .pipe(gulp.dest(paths.target + '/errors/images/favicon'));
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
