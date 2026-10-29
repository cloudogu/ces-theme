'use strict';

module.exports = {
  warn: function(message, options){
    var url = options.span && options.span.url;
    if (url && url.pathname.indexOf('/node_modules/') !== -1) {
      return;
    }
    var location = url ? decodeURIComponent(url.pathname) + ':' + (options.span.start.line + 1) : options.stack;
    console.warn((options.deprecation ? 'Deprecation warning: ' : 'Warning: ') + message + (location ? '\n    ' + location : ''));
  }
};
