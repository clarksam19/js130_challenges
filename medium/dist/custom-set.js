"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CustomSet = /*#__PURE__*/function () {
  function CustomSet() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, CustomSet);

    this.data = data;
  }

  _createClass(CustomSet, [{
    key: "empty",
    value: function empty() {
      return this.data.length === 0;
    }
  }, {
    key: "contains",
    value: function contains(item) {
      return this.data.indexOf(item) !== -1;
    }
  }, {
    key: "subset",
    value: function subset(customSet) {
      return this.data.every(function (item) {
        return customSet.contains(item);
      });
    }
  }, {
    key: "disjoint",
    value: function disjoint(customSet) {
      return this.data.every(function (item) {
        return !customSet.contains(item);
      });
    }
  }, {
    key: "eql",
    value: function eql(customSet) {
      return this.data.length === customSet.data.length && this.subset(customSet);
    }
  }, {
    key: "add",
    value: function add(item) {
      if (!this.contains(item)) {
        this.data.push(item);
      }

      return this;
    }
  }, {
    key: "intersection",
    value: function intersection(customSet) {
      var commonData = [];
      this.data.forEach(function (item) {
        if (customSet.contains(item)) {
          commonData.push(item);
        }
      });
      return new CustomSet(commonData);
    }
  }, {
    key: "difference",
    value: function difference(customSet) {
      var copy = _toConsumableArray(this.data);

      this.data.forEach(function (item) {
        if (customSet.contains(item)) {
          copy.splice(copy.indexOf(item), 1);
        }
      });
      return new CustomSet(copy);
    }
  }, {
    key: "union",
    value: function union(customSet) {
      var _this = this;

      var copy = _toConsumableArray(this.data);

      customSet.data.forEach(function (item) {
        if (!_this.contains(item)) {
          copy.push(item);
        }
      });
      return new CustomSet(copy);
    }
  }]);

  return CustomSet;
}();

module.exports = CustomSet;