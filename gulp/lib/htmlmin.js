'use strict';

// Minimal gulp wrapper around html-minifier-next, the maintained fork of the abandoned html-minifier
// that gulp-htmlmin is stuck on. html-minifier-next is ESM-only, so it is loaded via import().
var Transform = require('stream').Transform;

module.exports = function htmlmin(options){
  return new Transform({
    objectMode: true,
    transform: function(file, encoding, callback){
      if (file.isNull()) {
        return callback(null, file);
      }

      import('html-minifier-next').then(function(htmlMinifier){
        return htmlMinifier.minify(file.contents.toString(), options);
      }).then(function(html){
        file.contents = Buffer.from(html);
        callback(null, file);
      }, callback);
    }
  });
};
