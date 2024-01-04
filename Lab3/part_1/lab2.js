var firstNum = Number(prompt("Enter first number"));
var operator = prompt("Enter an operator ( +, -, *, /, % )");
var secondNum = Number(prompt("Enter second number"));

var out;
switch (operator) {
  case "+":
    out = firstNum + secondNum;
    break;
  case "-":
    out = firstNum - secondNum;
    break;
  case "*":
    out = firstNum * secondNum;
    break;
  case "/":
    out = firstNum / secondNum;
    break;
  case "%":
    out = firstNum % secondNum;
    break;
  default:
    alert("Invalid operator. Please enter +, -, *, /, %");
}
alert(`${firstNum} ${operator} ${secondNum} = ${out}`);
