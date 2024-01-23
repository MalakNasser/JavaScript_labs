const emailError = document.getElementById("emailErr");
const passwordError = document.getElementById("passwordErr");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", function () {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  emailInput.style.border = "";
  passwordInput.style.border = "";

  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (email === "") {
    displayError(emailError, "Please, enter your email address");
    setInvalidInputStyle(emailInput);
  } else if (!emailRegex.test(email)) {
    displayError(emailError, "Please, enter a valid email address");
    setInvalidInputStyle(emailInput);
  }

  if (password === "") {
    displayError(passwordError, "Please, enter your password");
    setInvalidInputStyle(passwordInput);
  } else if (!passwordRegex.test(password)) {
    displayError(passwordError, "Please, enter a valid password");
    setInvalidInputStyle(passwordInput);
  }

  if (passwordError.innerHTML === "" && emailError.innerHTML === "") {
    location.reload();
    alert("Welcome! You entered a valid email and password.");
  }
});

function displayError(element, message) {
  element.innerHTML = message;
}

function setInvalidInputStyle(inputElement) {
  inputElement.value = "";
  inputElement.style.border = "2px solid red";
}
