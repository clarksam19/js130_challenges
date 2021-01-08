const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday'];
class Month {
  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.length = this.determineLength();
  }

  determineLength() {
    return new Date(this.year, this.month + 1, 0).getDate();
  }
  getLength() {
    return this.length;
  }
  getMonthNumber() {
    return this.month;
  }
}
function findLastIndex(array, callback) {
  for (let index = array.length - 1; index >= 0; index--) {
    if (callback(array[index])) {
      return index;
    }
  }

  return -1;
}
function createDaysArray(month, ordinal) {
  let days = [];
  if (ordinal === 'teenth') {
    for (let index = 13; index <= 19; index++) {
      days.push(index);
    }
  } else {
    for (let index = 1; index <= month.getLength(); index++) {
      days.push(index);
    }
  }

  return days;
}
function createWeekdaysArray(year, month, ordinal) {
  let weekdays = [];
  if (ordinal === 'teenth') {
    for (let index = 13; index <= 19; index++) {
      weekdays.push(new Date(year, month.getMonthNumber(), index).getDay());
    }
  } else {
    for (let index = 1; index <= month.getLength(); index++) {
      weekdays.push(new Date(year, month.getMonthNumber(), index).getDay());
    }
  }

  return weekdays;
}
function addWeeks(ordinal) {
  let nth = parseInt(ordinal, 10);
  let weeks;
  if (nth) {
    weeks = 7 * (nth - 1);
  } else {
    weeks = 0;
  }

  return weeks;
}
function meetupDay() {
  let [year, , day, ordinal] = [...arguments];
  let month = new Month(year, arguments[1]);
  let days = createDaysArray(month, ordinal);
  let weekdays = createWeekdaysArray(year, month, ordinal);
  let base;
  if (ordinal === 'last') {
    base = days[findLastIndex(weekdays, weekday => WEEKDAYS[weekday] === day)];
  } else {
    base = days[weekdays.findIndex(weekday => WEEKDAYS[weekday] === day)];
  }

  let result = new Date(year, month.getMonthNumber(), base + addWeeks(ordinal));

  if (result.getMonth() !== month.getMonthNumber()) {
    throw new Error(`There is no ${ordinal} ${day} in this month`);
  }

  return result;
}

module.exports = meetupDay;