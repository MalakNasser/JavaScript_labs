class HumanClass {
  constructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }

  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  }

  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  }

  buy(items) {
    this.money -= items * 10;
  }
}

const person2 = new HumanClass("Malak", 100, "happy", 80);
person2.sleep(8);
person2.eat(2);
person2.buy(2);
console.log(person2);
