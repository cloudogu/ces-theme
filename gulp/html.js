module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('html', function(){
  	return gulp.src(paths.src + '/*.html')
               .pipe($.replace('{{context}}', ''))
               .pipe($.htmlmin({
                    minifyJS: true,
                    minifyCSS: true,
                    removeComments: true,
                    collapseWhitespace: true
               }))
               .pipe(gulp.dest(paths.target));
  });

};
