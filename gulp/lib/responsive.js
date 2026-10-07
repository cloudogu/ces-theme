'use strict';

var path = require('path');
var Transform = require('stream').Transform;
var sharp = require('sharp');

module.exports = function responsive(configs){
  configs = [].concat(configs);
  return new Transform({
    objectMode: true,
    transform: function(file, encoding, callback){
      var stream = this;
      if (file.isNull()) {
        return callback(null, file);
      }

      Promise.all(configs.map(function(config){
        return sharp(file.contents)
          .resize(config.width, null, { kernel: 'lanczos3', withoutEnlargement: true })
          .toBuffer()
          .then(function(buffer){
            var resized = file.clone({ contents: false });
            var suffix = (config.rename && config.rename.suffix) || '';
            resized.path = path.join(file.dirname, file.stem + suffix + file.extname);
            resized.contents = buffer;
            return resized;
          });
      })).then(function(resizedFiles){
        resizedFiles.forEach(function(resized){
          stream.push(resized);
        });
        callback();
      }, callback);
    }
  });
};
