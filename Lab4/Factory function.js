function HumanFactory(fullName, money, sleepMood, healthRate) {
  return {
    fullName,
    money,
    sleepMood,
    healthRate,
    sleep (hours) {
      if (hours === 7) {
        this.sleepMood = "happy";
      } else if (hours < 7) {
        this.sleepMood = "tired";
      } else {
        this.sleepMood = "lazy";
      }
    },
    eat (meals) {
      if (meals === 3) {
        this.healthRate = 100;
      } else if (meals === 2) {
        this.healthRate = 75;
      } else if (meals === 1) {
        this.healthRate = 50;
      }
    },
    buy (items) {
      this.money -= items * 10;
    },
  };
}

const person4 = HumanFactory("Malak", 100, "happy", 80);
person4.sleep(8);
person4.eat(2);
person4.buy(2);
console.log(person4);
