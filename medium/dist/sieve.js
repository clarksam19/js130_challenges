"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//input: limit (integer)
//data structure:
// List class object
//list state object
//keys = integers
//values = marked/unmarked toggle
//mark multiples under limit method
//get primes from list method
//mark multiples under limit method
//returns array of keys with prime-marked values
//algorithm:
//create array of consecutive integers from 2 until given limit
//starting at 2, get multiples that are <= limit
//then do the same for 3, 4, etc, until (half - 1) numbers are processed
//output: array of primes
var PRIME = 'P';
var COMPOSITE = 'C';

var List = /*#__PURE__*/function () {
  function List(limit) {
    _classCallCheck(this, List);

    this.list = {};
    this.limit = limit;
  }

  _createClass(List, [{
    key: "createList",
    value: function createList(limit) {
      for (var index = 2; index <= limit; index++) {
        this.list[index] = PRIME;
      }
    }
  }, {
    key: "markMultiples",
    value: function markMultiples(limit) {
      for (var index = 2; index <= limit / 2; index++) {
        for (var multiplier = 2; index * multiplier <= limit; multiplier++) {
          var composite = index * multiplier;
          this.list[composite] = COMPOSITE;
        }
      }
    }
  }, {
    key: "getPrimes",
    value: function getPrimes(limit) {
      var _this = this;

      this.createList(limit);
      this.markMultiples(limit);
      return Object.keys(this.list).filter(function (key) {
        return _this.list[key] === PRIME;
      }).map(function (num) {
        return Number(num);
      });
    }
  }]);

  return List;
}();

module.exports = List;