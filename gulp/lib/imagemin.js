'use strict';

var losslessCompressPng = require('@napi-rs/image').losslessCompressPng;
var svgo = require('svgo');
var transform = require('./transform');

function optimize(file){
  switch (file.extname.toLowerCase()) {
    case '.png':
      return losslessCompressPng(file.contents);
    case '.svg':
      return Buffer.from(svgo.optimize(file.contents.toString(), { path: file.path }).data);
    default:
      return file.contents;
  }
}

module.exports = function imagemin(){
  return transform(function(file){
    return Promise.resolve(optimize(file)).then(function(optimized){
      if (optimized.length < file.contents.length) {
        file.contents = optimized;
      }
      return file;
    });
  });
};
