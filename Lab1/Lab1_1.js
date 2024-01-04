var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var confirmFullName = confirm("Is your full name " + firstName + " " + lastName + "?");

var birthYear = prompt("Enter your birth year:");
var age = 2023 - birthYear;

alert("Welcome " + firstName + " " + lastName + "! You are " + age + " years old.");