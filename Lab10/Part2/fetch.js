document.addEventListener("DOMContentLoaded", () => {
  let url = "https://dummyjson.com/users";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      console.error("Error fetching users data:", error);
    });
});

function displayData(data) {
  var usersArr = Array.from(data.users);
  const userListDiv = document.getElementById("userList");

  usersArr.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.className = "user";

    const img = document.createElement("img");
    img.src = user.image;
    img.alt = "User Image";

    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;

    userDiv.appendChild(img);
    userDiv.appendChild(email);
    userListDiv.appendChild(userDiv);
  });
}
