var shape = prompt("Enter shape name\n ( Circle, Triangle, Square, Rectangle, Parallelogram, Trapezium, Ellipse");
var area;
switch (shape.toLowerCase()) {
  case "circle":
    var r = prompt("Enter the raduis");
    area = Math.PI * Math.pow(r, 2);
    break;
  case "triangle":
    var b = prompt("Enter the base");
    var h = prompt("Enter the height");
    area = 0.5 * b * h;
    break;
  case "square":
    var a = prompt("Enter the length of side");
    area = Math.pow(a, 2);
    break;
  case "rectangle":
    var l = prompt("Enter the length");
    var w = prompt("Enter the width");
    area = l * w;
    break;
  case "parallelogram":
    var b = prompt("Enter the base");
    var h = prompt("Enter the vertical height");
    area = b * h;
    break;
  case "trapezium":
    var a = prompt("Enter the length of first parallel side");
    var b = prompt("Enter the length of second parallel side");
    var h = prompt("Enter the height");
    area = 0.5 * (a + b) * h;
    break;
  case "ellipse":
    var a = 0.5 * prompt("Enter the minor axis");
    var b = 0.5 * prompt("Enter the major axis");
    area = Math.PI * a * b;
    break;
  default:
    alert("Invalid shape");
}
alert(`The area of the ${shape.toLowerCase()} = ${area}`);
