function checkLogin() {
  var login = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  var messageForm = document.getElementsByClassName("form");
  var messageDiv = document.getElementById("message");

  if (login.username == "admin" && login.password == "123") {
    messageDiv.innerHTML = "Welcome";
    messageDiv.style.color = "green";
  } else {
    messageDiv.innerHTML = "Not registered";
    messageDiv.style.color = "red";
  }
  messageForm.appendChild(messageDiv);
}
