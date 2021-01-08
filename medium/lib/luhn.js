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

class Luhn {
  constructor(string) {
    this.string = string;
  }
  valid() {
    let spaceless = this.string.replace(/ /g, '');
    if (spaceless.length <= 1) {
      return false;
    }
    let numbers = spaceless.split('').map(elem => Number(elem));
    for (let index = numbers.length - 2; index >= 0; index -= 2) {
      numbers[index] += numbers[index];
      if (numbers[index] > 9) {
        numbers[index] -= 9;
      }
    }

    let sum = numbers.reduce((acc, num) => acc + num);
    return sum % 10 === 0;
  }
}

module.exports = Luhn;