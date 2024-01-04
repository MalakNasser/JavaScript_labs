var arr = [];
do {
  var operation = prompt("Enter the operation");
  switch (operation.toLowerCase()) {
    case "add":
      var name = prompt("Enter contact name");
      var phoneNumber = prompt("Enter phone number");
      var contact = {
        Name: name,
        "Phone number": phoneNumber,
      };
      arr.push(contact);
      break;
    case "search":
      var searchType = prompt(
        "Do you want to search with the 'name' or the 'phone number'"
      );
      var searchTerm = prompt("Enter the term to search for");
      if (searchType.toLowerCase() == "name") {
        var foundContact = arr.find(function (contact) {
          return contact.Name == searchTerm;
        });
      } else if (searchType.toLowerCase() == "phone number") {
        var foundContact = arr.find(function (contact) {
          return contact["Phone number"] == searchTerm;
        });
      }

      if (foundContact) {
        alert(
          "Contact found:\nName: " +
            foundContact.Name +
            "\nPhone Number: " +
            foundContact["Phone number"]
        );
      } else {
        alert("Contact not found.");
      }
      break;
  }
} while (operation);
