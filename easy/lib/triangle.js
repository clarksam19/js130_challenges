class NotTriangle extends Error {}
class Triangle {
  constructor() {
    this.sides = [...arguments];
  }
  kind() {
    if (!this.isTriangle()) {
      throw new NotTriangle('not a triangle');
    }
    let copy = this.sides.slice();
    let resultArr = [];
    this.sides.forEach(side => {
      resultArr.push(copy.filter(copySide => copySide === side).length > 1);
    });
    if (resultArr.every(side => side === true)) {
      return 'equilateral';
    } else if (resultArr.includes(true)) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
  isTriangle() {
    if (this.sides.length !== 3) {
      return false;
    }
    if (this.sides.some(side => side <= 0)) {
      return false;
    }
    let copy = this.sides.slice();
    let resultArr = [];
    this.sides.forEach((_, idx1) => {
      resultArr.push(copy.filter((_, idx2) => idx1 !== idx2));

    });
    let sums = resultArr.map(subArr => {
      return subArr.reduce((acc, num) => acc + num, 0);
    });
    return sums.filter((sum, idx) => {
      return sum >= this.sides[idx];
    }).length === 3;

  }

}

module.exports = Triangle;