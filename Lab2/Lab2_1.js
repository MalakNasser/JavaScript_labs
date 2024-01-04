do {
  var age = Number(prompt("Enter your age:"));
  if (age < 0) {
    alert("Please enter posistive number for age");
  } else if (age >= 1 && age <= 10) {
    alert("You are child");
  } else if (age >= 11 && age <= 18) {
    alert("You are teenager");
  } else if (age >= 19 && age <= 50) {
    alert("You are grown up");
  } else if (age > 50) {
    alert("You are old");
  }
} while (age);
