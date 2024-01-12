class Triple {
  static customName = "Tripler";
  static description = "I triple any number you proide";
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = "I'm square the triple of any number you provide";
  static calculate(n = 1) {
    return n * 3;
  }

  static calculate(n = 1) {
    var Result = super.calculate(n);
    return Result * Result;
  }
}

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18
console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); //Tripler
