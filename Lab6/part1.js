class Shape1 {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    var perimeter = this.sides * this.sideLength;
    console.log(`${this.name}' perimeter = ${perimeter}`);
  }
}

var square1 = new Shape1("square", 4, 5);
square1.calcPerimeter();

var triangle1 = new Shape1("triangle", 3, 3);
triangle1.calcPerimeter();
