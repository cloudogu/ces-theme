module.exports = function(gulp, $, info, paths){
  'use strict';

  var pipeline = require('stream').pipeline;

  gulp.task('html', function(done){
    pipeline(
      gulp.src(paths.src + '/*.html'),
      $.replace('{{context}}', ''),
      $.htmlmin({
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        collapseWhitespace: true
      }),
      gulp.dest(paths.target),
      done
    );
  });

};
