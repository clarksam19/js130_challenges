"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PLANTS = {
  R: "radishes",
  V: "violets",
  G: "grass",
  C: "clover"
};
var STUDENTS = ["Alice", "Bob", "Charlie", "David", "Eve", "Fred", "Ginny", "Harriet", "Ileana", "Joseph", "Kincaid", "Larry"];
var FIRST_ROW = 0;
var SECOND_ROW = 1;

var Garden = /*#__PURE__*/function () {
  function Garden(diagram) {
    var _this = this;

    var students = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : STUDENTS;

    _classCallCheck(this, Garden);

    this.cupsRows = diagram.split("\n");
    this.students = students.sort();
    this.students.forEach(function (student, idx) {
      _this[student.toLowerCase()] = _this.getPlantsForStudent(idx);
    });
  }

  _createClass(Garden, [{
    key: "getPlantsForStudent",
    value: function getPlantsForStudent(idx) {
      var firstCupIdx = idx * 2;
      var secondCupIdx = firstCupIdx + 1;
      var plants = [this.cupsRows[FIRST_ROW][firstCupIdx], this.cupsRows[FIRST_ROW][secondCupIdx], this.cupsRows[SECOND_ROW][firstCupIdx], this.cupsRows[SECOND_ROW][secondCupIdx]];
      return plants.map(function (plant) {
        return PLANTS[plant];
      });
    }
  }]);

  return Garden;
}();

module.exports = Garden;