class CustomSet {
  constructor(data = []) {
    this.data = data;
  }
  empty() {
    return this.data.length === 0;
  }
  contains(item) {
    return this.data.indexOf(item) !== -1;
  }
  subset(customSet) {
    return this.data.every(item => customSet.contains(item));
  }
  disjoint(customSet) {
    return this.data.every(item => !customSet.contains(item));
  }
  eql(customSet) {
    return this.data.length === customSet.data.length && this.subset(customSet);
  }
  add(item) {
    if (!this.contains(item)) {
      this.data.push(item);
    }
    
    return this;
  }
  intersection(customSet) {
    let commonData = [];
    this.data.forEach(item => {
      if (customSet.contains(item)) {
        commonData.push(item);
      }
    });
    
    return new CustomSet(commonData);
  }
  difference(customSet) {
    let copy = [...this.data];
    this.data.forEach(item => {
      if (customSet.contains(item)) {
        copy.splice(copy.indexOf(item), 1);
      }
    });

    return new CustomSet(copy);
  }
  union(customSet) {
    let copy = [...this.data];
    customSet.data.forEach(item => {
      if (!this.contains(item)) {
        copy.push(item);
      }
    });

    return new CustomSet(copy);
  }
}

module.exports = CustomSet;