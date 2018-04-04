module.exports = function (gulp, $, info, paths) {
    'use strict';

    gulp.task('errors', function () {

        gulp.src(paths.src + '/{4,5}*.html')
            .pipe($.replace('{{context}}', '/errors/'))
            .pipe($.htmlmin({
                minifyJS: true,
                minifyCSS: true,
                removeComments: true,
                collapseWhitespace: true
            }))
            .pipe(gulp.dest(paths.target + '/errors'));

        gulp.src(paths.src + '/scss/errors.scss')
            .pipe($.sourcemaps.init())
            .pipe($.sass())
            .pipe($.cssnano())
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(paths.target + '/errors/css'));

        gulp.src(paths.src + '/scss/ces.scss')
            .pipe($.sourcemaps.init())
            .pipe($.sass())
            .pipe($.cssnano())
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(paths.target + '/errors/css'));

        gulp.src(paths.src + '/scripts/{4,5}*.js')
            .pipe($.sourcemaps.init())
            .pipe($.uglify())
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(paths.target + '/errors/scripts'));

        gulp.src(paths.src + '/images/logo/blib-white.png')
            .pipe($.responsive({
                '*.png': {
                    width: 320,
                    rename: {
                        suffix: '-320px'
                    }
                }
            }))
            .pipe($.imagemin({ verbose: true }))
            .pipe(gulp.dest(paths.target + '/errors/images/logo'));

        gulp.src(paths.src + '/images/*.{jpg,png,gif}')
            .pipe($.imagemin({ verbose: true }))
            .pipe(gulp.dest(paths.target + '/errors/images'));

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

        gulp.src(paths.src + '/favicon.ico')
            .pipe(gulp.dest(paths.target + '/errors/images/favicon'));

        gulp.src(paths.src + '/images/favicon/*')
            .pipe($.responsive({
                '*.png': resizecfg
            }))
            .pipe($.imagemin({ verbose: true }))
            .pipe(gulp.dest(paths.target + '/errors/images/favicon'));

    });
};
