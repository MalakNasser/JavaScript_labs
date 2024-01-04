var text = prompt("Enter a string:");

var count = 0;
if (text) {
  for (let i of text) {
    if (i == "a" || i == "e" || i == "o" || i == "u" || i == "i") {
      count++;
    }
  }
}
alert(`Number of vowels are = ${count}`);
