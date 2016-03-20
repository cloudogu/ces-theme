module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('clean', function(cb){
    var del = require('del');
  	del([paths.target], cb);
  });

};
