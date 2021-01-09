"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var Month = /*#__PURE__*/function () {
  function Month(year, month) {
    _classCallCheck(this, Month);

    this.year = year;
    this.month = month;
    this.length = this.determineLength();
  }

  _createClass(Month, [{
    key: "determineLength",
    value: function determineLength() {
      return new Date(this.year, this.month + 1, 0).getDate();
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this.length;
    }
  }, {
    key: "getMonthNumber",
    value: function getMonthNumber() {
      return this.month;
    }
  }]);

  return Month;
}();

function findLastIndex(array, callback) {
  for (var index = array.length - 1; index >= 0; index--) {
    if (callback(array[index])) {
      return index;
    }
  }

  return -1;
}

function createDaysArray(month, ordinal) {
  var days = [];

  if (ordinal === 'teenth') {
    for (var index = 13; index <= 19; index++) {
      days.push(index);
    }
  } else {
    for (var _index = 1; _index <= month.getLength(); _index++) {
      days.push(_index);
    }
  }

  return days;
}

function createWeekdaysArray(year, month, ordinal) {
  var weekdays = [];

  if (ordinal === 'teenth') {
    for (var index = 13; index <= 19; index++) {
      weekdays.push(new Date(year, month.getMonthNumber(), index).getDay());
    }
  } else {
    for (var _index2 = 1; _index2 <= month.getLength(); _index2++) {
      weekdays.push(new Date(year, month.getMonthNumber(), _index2).getDay());
    }
  }

  return weekdays;
}

function addWeeks(ordinal) {
  var nth = parseInt(ordinal, 10);
  var weeks;

  if (nth) {
    weeks = 7 * (nth - 1);
  } else {
    weeks = 0;
  }

  return weeks;
}

function meetupDay() {
  var _ref = Array.prototype.slice.call(arguments),
      year = _ref[0],
      day = _ref[2],
      ordinal = _ref[3];

  var month = new Month(year, arguments[1]);
  var days = createDaysArray(month, ordinal);
  var weekdays = createWeekdaysArray(year, month, ordinal);
  var base;

  if (ordinal === 'last') {
    base = days[findLastIndex(weekdays, function (weekday) {
      return WEEKDAYS[weekday] === day;
    })];
  } else {
    base = days[weekdays.findIndex(function (weekday) {
      return WEEKDAYS[weekday] === day;
    })];
  }

  var result = new Date(year, month.getMonthNumber(), base + addWeeks(ordinal));

  if (result.getMonth() !== month.getMonthNumber()) {
    throw new Error("There is no ".concat(ordinal, " ").concat(day, " in this month"));
  }

  return result;
}

module.exports = meetupDay;