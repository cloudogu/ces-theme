'use strict';

var transform = require('./transform');

module.exports = function htmlmin(options){
  return transform(function(file){
    // html-minifier-next is ESM-only without a require() export
    return import('html-minifier-next').then(function(htmlMinifier){
      return htmlMinifier.minify(file.contents.toString(), options);
    }).then(function(html){
      file.contents = Buffer.from(html);
      return file;
    });
  });
};
