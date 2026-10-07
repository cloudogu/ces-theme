'use strict';

// Lossless image optimization with sharp (PNG) and svgo (SVG). Replaces gulp-imagemin, whose
// optipng/mozjpeg/gifsicle binary installers pull in unmaintained, vulnerable dependencies.
// Other file types are passed through unchanged; an optimized file is only used if it is smaller.
var sharp = require('sharp');
var svgo = require('svgo');

function optimize(file){
  switch (file.extname.toLowerCase()) {
    case '.png':
      return sharp(file.contents)
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toBuffer();
    case '.svg':
      return Promise.resolve(Buffer.from(svgo.optimize(file.contents.toString(), { path: file.path }).data));
    default:
      return Promise.resolve(file.contents);
  }
}

var Transform = require('stream').Transform;

module.exports = function imagemin(){
  return new Transform({
    objectMode: true,
    transform: function(file, encoding, callback){
      if (file.isNull()) {
        return callback(null, file);
      }

      optimize(file).then(function(optimized){
        if (optimized.length < file.contents.length) {
          file.contents = optimized;
        }
        callback(null, file);
      }, callback);
    }
  });
};
