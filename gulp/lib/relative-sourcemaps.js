'use strict';

var path = require('path');
var Transform = require('stream').Transform;

module.exports = function relativeSourcemaps(){
  return new Transform({
    objectMode: true,
    transform: function(file, encoding, callback){
      if (file.sourceMap) {
        var cwd = file.cwd.replace(/\\/g, '/').replace(/^\//, '') + '/';
        var base = path.resolve(file.cwd, file.base);
        file.sourceMap.sources = file.sourceMap.sources.map(function(source){
          if (source.indexOf(cwd) !== 0) {
            return source;
          }
          return path.relative(base, '/' + source).replace(/\\/g, '/');
        });
      }
      callback(null, file);
    }
  });
};
