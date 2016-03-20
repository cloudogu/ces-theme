var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();

gulp.task('favicon-ico', function(){
	return gulp.src('src/favicon.ico')
						 .pipe(gulp.dest('./dist/images/favicon'));
});

gulp.task('favicon-png', function(){
	var resizecfg = [{
		width: 64,
		rename: {
			suffix: '-64px'
		}
	},{
	  width: 32,
		rename: {
			suffix: '-32px'
		}
	},{
		width: 16,
		rename: {
			suffix: '-16px'
		}
	}];

	return gulp.src('src/images/favicon/*')
						 .pipe($.responsive({
							 '*.png': resizecfg
						 }))
						 .pipe(gulp.dest('./dist/images/favicon'));
});

gulp.task('favicon', ['favicon-ico', 'favicon-png']);

gulp.task('logo', function(){
	var resizecfg = [{
		width: 640,
		rename: {
			suffix: '-640px'
		}
	},{
	  width: 320,
		rename: {
			suffix: '-320px'
		}
	},{
		width: 160,
		rename: {
			suffix: '-160px'
		}
	},{
		width: 30,
		quality: 100,
		rename: {
			suffix: '-30px'
		}
	}];

	return gulp.src('src/images/logo/*')
						 .pipe($.responsive({
							 '*.png': resizecfg
						 }))
						 .pipe(gulp.dest('./dist/images/logo'));
});

gulp.task('fonts', function(){
	return gulp.src('bower_components/bootstrap-sass/assets/fonts/**')
						 .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('scss', function(){
	return gulp.src('src/scss/*.scss')
						 .pipe($.sourcemaps.init())
   					 .pipe($.sass())
						 .pipe(gulp.dest('./dist/css'))
						 .pipe($.cssnano())
						 .pipe($.rename('ces.min.css'))
						 .pipe($.sourcemaps.write('.'))
						 .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['scss', 'fonts', 'logo', 'favicon']);

gulp.task('serve', ['scss', 'logo', 'favicon'], function(){
	browserSync.init(['dist', 'src/**/*.html', 'src/**/*.css', 'src/**/*.js'], {
		server: {
			baseDir: ["src", "dist", "bower_components"]
		}
	});

	gulp.watch(['src/scss/*.scss'], ['scss']);
});

gulp.task('clean', function(cb){
	del(['dist'], cb);
});
