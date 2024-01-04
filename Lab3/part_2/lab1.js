var num = prompt("How many numbers you want to enter?");
var arr = [];
var val;

for (let i = 0; i < num; i++) {
  val = Number(prompt(`Enter the value number ${i + 1}`));
  arr.push(val);
}

var sum = 0;
for (let i = 0; i < num; i++) {
  sum += arr[i];
}

alert(`Sum = ${sum}\nAverage = ${sum / num}`);
