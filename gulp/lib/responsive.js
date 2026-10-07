'use strict';

var sharp = require('sharp');
var transform = require('./transform');

module.exports = function responsive(widths){
  return transform(function(file){
    return Promise.all(widths.map(function(width){
      return sharp(file.contents)
        .resize({ width: width, withoutEnlargement: true })
        .toBuffer()
        .then(function(contents){
          var resized = file.clone({ contents: false });
          resized.stem += '-' + width + 'px';
          resized.contents = contents;
          return resized;
        });
    }));
  });
};
