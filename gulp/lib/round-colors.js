'use strict';

function toChannel(value){
  var match = /^\s*(\d*\.?\d+)(%?)\s*$/.exec(value);
  if (!match) {
    return null;
  }
  var value = parseFloat(match[1]) * (match[2] ? 2.55 : 1);
  var channel = Math.round(Math.round(value * 1e6) / 1e6);
  return Math.min(255, channel);
}

function toHex(channel){
  return ('0' + channel.toString(16)).slice(-2);
}

function roundColor(color, args){
  var parts = args.split(',');
  if (parts.length < 3 || parts.length > 4 || !/[.%]/.test(parts.slice(0, 3).join(''))) {
    return color;
  }
  var channels = parts.slice(0, 3).map(toChannel);
  if (channels.indexOf(null) !== -1) {
    return color;
  }
  if (parts.length === 4) {
    return 'rgba(' + channels.join(', ') + ',' + parts[3] + ')';
  }
  return '#' + channels.map(toHex).join('');
}

module.exports = function roundColors(){
  return {
    postcssPlugin: 'round-colors',
    Declaration: function(decl){
      decl.value = decl.value.replace(/rgba?\(([^()]*)\)/g, roundColor);
    }
  };
};
module.exports.postcss = true;
