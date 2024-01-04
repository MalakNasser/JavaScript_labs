var userName = prompt("Username:");
var password = prompt("Password:");
if (userName == "admin" && password == "421$$") {
  alert("Welcome login success");
} else {
  if (userName != "admin" && password != "421$$") {
    alert("Incorrect username and password");
  } else if (userName != "admin") {
    alert("Incorrect username");
  } else {
    alert("Incorrect password");
  }
}
