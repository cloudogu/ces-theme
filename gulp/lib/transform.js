'use strict';

var Transform = require('stream').Transform;

module.exports = function transform(mapFile){
  return new Transform({
    objectMode: true,
    transform: function(file, encoding, callback){
      if (file.isNull()) {
        return callback(null, file);
      }

      var stream = this;
      Promise.resolve(file).then(mapFile).then(function(files){
        [].concat(files).forEach(function(mapped){
          stream.push(mapped);
        });
        callback();
      }, callback);
    }
  });
};
