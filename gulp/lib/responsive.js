'use strict';

var sharp = require('sharp');
var transform = require('./transform');

module.exports = function responsive(widths){
  return transform(function(file){
    return sharp(file.contents).metadata().then(function(metadata){
      return Promise.all(widths.map(function(width){
        if (width > metadata.width) {
          throw new Error(file.relative + ' is only ' + metadata.width + 'px wide, cannot resize it to ' + width + 'px');
        }
        return sharp(file.contents)
          .resize({ width: width })
          .toBuffer()
          .then(function(contents){
            var resized = file.clone({ contents: false });
            resized.stem += '-' + width + 'px';
            resized.contents = contents;
            return resized;
          });
      }));
    });
  });
};
