const PLANTS = {
  R: "radishes",
  V: "violets",
  G: "grass",
  C: "clover"
}

const STUDENTS = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry"
]

const FIRST_ROW = 0;
const SECOND_ROW = 1;

class Garden {
  constructor(diagram, students = STUDENTS) {
    this.cupsRows = diagram.split("\n");
    this.students = students.sort();
    this.students.forEach((student, idx) => {
      this[student.toLowerCase()] = this.getPlantsForStudent(idx);
    })

  }
  getPlantsForStudent(idx) {
    let firstCupIdx = idx * 2;
    let secondCupIdx = firstCupIdx + 1;
    let plants = [
      this.cupsRows[FIRST_ROW][firstCupIdx],
      this.cupsRows[FIRST_ROW][secondCupIdx],
      this.cupsRows[SECOND_ROW][firstCupIdx],
      this.cupsRows[SECOND_ROW][secondCupIdx]
    ]
    return plants.map(plant => PLANTS[plant]) ;
  }
}

module.exports = Garden;