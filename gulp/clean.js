module.exports = function(gulp, $, info, paths){
  'use strict';

  gulp.task('clean', function(){
    var deleteAsync = require('del').deleteAsync;
  	return deleteAsync([paths.target]);
  });

};
