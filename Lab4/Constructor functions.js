function HumanConstructor(fullName, money, sleepMood, healthRate) {
  this.fullName = fullName;
  this.money = money;
  this.sleepMood = sleepMood;
  this.healthRate = healthRate;
}

HumanConstructor.prototype.sleep = function (hours) {
  if (hours === 7) {
    this.sleepMood = "happy";
  } else if (hours < 7) {
    this.sleepMood = "tired";
  } else {
    this.sleepMood = "lazy";
  }
};

HumanConstructor.prototype.eat = function (meals) {
  if (meals === 3) {
    this.healthRate = 100;
  } else if (meals === 2) {
    this.healthRate = 75;
  } else if (meals === 1) {
    this.healthRate = 50;
  }
};

HumanConstructor.prototype.buy = function (items) {
  this.money -= items * 10;
};

const person1 = new HumanConstructor("Malak", 100, "happy", 80);
person1.sleep(8);
person1.eat(2);
person1.buy(2);
console.log(person1);
