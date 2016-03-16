var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();

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
						 .pipe($.rename('ces.min'))
						 .pipe($.sourcemaps.write('.', {mapFile: 'ces.min.map'}))
						 .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['scss', 'fonts']);

gulp.task('serve', ['scss', 'fonts'], function(){
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
