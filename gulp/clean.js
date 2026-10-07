module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('clean', function(){
    var del = require('del');
  	return del([paths.target]);
  });

};
