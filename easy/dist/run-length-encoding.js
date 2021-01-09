"use strict";

var encode = function encode(string) {
  var counter = function counter(match) {
    return match.length + match[0];
  };

  var duplicates = string.replace(/(.)\1+/g, counter);
  return duplicates;
};

var decode = function decode(string) {
  var counts = /([0-9])+[^0-9]/ig;

  var extender = function extender(match) {
    return match[match.length - 1].repeat(Number(match.slice(0, match.length - 1)));
  };

  return string.replace(counts, extender);
};

module.exports = {
  encode: encode,
  decode: decode
};