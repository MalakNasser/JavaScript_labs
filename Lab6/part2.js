class Shape2 {
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

class Square2 extends Shape2 {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    var area = this.sideLength * this.sideLength;
    console.log(`sqaure's area = ${area}`);
  }
}

var square2 = new Square2(5);
square2.calcPerimeter();
square2.calcArea();
