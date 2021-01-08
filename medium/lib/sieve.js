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
const PRIME = 'P';
const COMPOSITE = 'C';

class List {
  constructor(limit) {
    this.list = {};
    this.limit = limit;
  }
  createList(limit) {
    for (let index = 2; index <= limit; index++) {
      this.list[index] = PRIME;
    }
  }
  markMultiples(limit) {
    for (let index = 2; index <= limit / 2; index++) {
      for (let multiplier = 2; index * multiplier <= limit; multiplier++) {
        let composite = index * multiplier;
        this.list[composite] = COMPOSITE;
      }
    }
  }
  getPrimes(limit) {
    this.createList(limit);
    this.markMultiples(limit);
    return Object.keys(this.list).filter(key => {
      return this.list[key] === PRIME;
    }).map(num => {
      return Number(num);
    });
  }
}

module.exports = List;

