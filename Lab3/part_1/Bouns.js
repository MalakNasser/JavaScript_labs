var firstNum = Number(prompt("Enter first number"));
while (true) {
  var operator = prompt("Enter an operator ( +, -, *, /, % )");
  if (operator == null) {
    break;
  }
  var secondNum = Number(prompt("Enter second number"));

  var hold = firstNum;
  switch (operator) {
    case "+":
      firstNum = firstNum + secondNum;
      break;
    case "-":
      firstNum = firstNum - secondNum;
      break;
    case "*":
      firstNum = firstNum * secondNum;
      break;
    case "/":
      firstNum = firstNum / secondNum;
      break;
    case "%":
      firstNum = firstNum % secondNum;
      break;
    default:
      alert("Invalid operator. Please enter +, -, *, /, %");
      continue;
  }
  alert(`${hold} ${operator} ${secondNum} = ${firstNum}`);
}
