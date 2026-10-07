'use strict';

var path = require('path');
var transform = require('./transform');

module.exports = function relativeSourcemaps(){
  return transform(function(file){
    if (file.sourceMap) {
      file.sourceMap.sources = file.sourceMap.sources.map(function(source){
        var absolute = path.resolve('/', source);
        if (absolute.indexOf(file.cwd + path.sep) !== 0) {
          return source;
        }
        return path.relative(file.base, absolute).split(path.sep).join('/');
      });
    }
    return file;
  });
};
