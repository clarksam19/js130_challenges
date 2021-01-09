"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//input: string
//data structure:
//class object
//valid method
//algorithm
//remove spaces
//split into array and map all elements to numbers
//starting at next to last number, double every other number
//decrement until first element
//add all elements in new array
//check if remainder when divided by 10;
//return boolean result;
//output: boolean
var Luhn = /*#__PURE__*/function () {
  function Luhn(string) {
    _classCallCheck(this, Luhn);

    this.string = string;
  }

  _createClass(Luhn, [{
    key: "valid",
    value: function valid() {
      var spaceless = this.string.replace(/ /g, '');

      if (spaceless.length <= 1) {
        return false;
      }

      var numbers = spaceless.split('').map(function (elem) {
        return Number(elem);
      });

      for (var index = numbers.length - 2; index >= 0; index -= 2) {
        numbers[index] += numbers[index];

        if (numbers[index] > 9) {
          numbers[index] -= 9;
        }
      }

      var sum = numbers.reduce(function (acc, num) {
        return acc + num;
      });
      return sum % 10 === 0;
    }
  }]);

  return Luhn;
}();

module.exports = Luhn;