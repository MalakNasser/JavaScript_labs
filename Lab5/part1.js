class Person {
  constructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
  }

  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  }

  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  }

  buy(items) {
    this.money -= items * 10;
  }
}

class Employee extends Person {
  static nextId = 1;
  #salary;
  constructor(
    fullName,
    money,
    sleepMood,
    healthRate,
    email,
    workMood,
    salary,
    isManager
  ) {
    const id = Employee.getNextId();
    super(fullName, money, sleepMood, healthRate);
    this.id = id;
    this.email = email;
    this.workMood = workMood;
    this.salary = salary;
    this.isManager = isManager;
  }

  work(hours) {
    if (hours === 8) {
      this.workMood = "happy";
    } else if (hours > 8) {
      this.workMood = "tired";
    } else {
      this.workMood = "lazy";
    }
  }

  set salary(value) {
    if (value < 1000) {
      this.#salary = 1000;
    } else {
      this.#salary = value;
    }
  }

  get salary() {
    return this.#salary;
  }

  set healthRate(value) {
    if (value < 0) {
      this._healthRate = 0;
    } else if (value > 100) {
      this._healthRate = 100;
    } else {
      this._healthRate = value;
    }
  }

  get healthRate() {
    return this._healthRate;
  }

  static getNextId() {
    return Employee.nextId++;
  }
}

class Office {
  constructor(name, employees) {
    this.name = name;
    this.employees = [];
  }

  getAllEmployees() {
    return this.employees;
  }

  getEmployee(id) {
    return this.employees.find((employee) => employee.id === id);
  }

  hire(employee) {
    this.employees.push(employee);
  }

  fire(id) {
    var index = this.employees.findIndex((employee) => employee.id === id);

    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }
}

var company = new Office("MyCompany");

function addEmployee() {
  var name = prompt("Enter employee details:\nFull Name: ");
  var email = prompt("Email: ");
  var salary = prompt("Salary: ");
  var check = prompt(
    "Is this employee a manager:\n'mngr' for manager\n'nrml' for normal emloyee\nEnter your answer:"
  );
  var manager = false;
  switch (check.toLowerCase()) {
    case "mngr":
      manager = true;
      break;
    case "nrml":
      manager = false;
      break;
  }

  var newEmployee = new Employee(
    name,
    1000,
    "happy",
    100,
    email,
    "happy",
    salary,
    manager
  );
  company.hire(newEmployee);
  alert(`\nEmployee ${name} added successfully!`);
}

function viewEmployees() {
  var employees = company.getAllEmployees();
  employees.forEach((employee) => {
    var employeeType = "Normal Employee";
    if (employee.isManager) {
      employeeType = "Manager";
    }
    alert(
      `ID: ${employee.id} | Name: ${employee.fullName} | The employee is a ${employeeType} | Salary: ${employee.salary}`
    );
  });
}

function viewAnEmployee() {
  var id = prompt("Enter ID of the employee: ");
  var employee = company.getEmployee(Number(id));
  var employeeType = "Normal Employee";
  if (employee.isManager) {
    employeeType = "Manager";
    alert(
      `ID: ${employee.id} | Name: ${employee.fullName} | The employee is a ${employeeType}`
    );
  } else {
    alert(
      `ID: ${employee.id} | Name: ${employee.fullName} | The employee is a ${employeeType} | Salary: ${employee.salary}`
    );
  }
}

function fireEmployee() {
  var id = prompt("Enter ID of the employee to fire: ");
  company.fire(Number(id));
  alert(`Employee with ID ${id} fired successfully.`);
}

do {
  var choice = prompt(
    "Menu:\n1. Hire new employee (enter 'hire')\n2. View all employees (enter 'viewall')\n3. View a specific employee(enter 'view')\n4. Fire an employee (enter 'fire')\n5. Quit (enter 'q')\nWrite your choice:"
  );
  if (choice == null || choice == "q") {
    break;
  }
  switch (choice.toLowerCase()) {
    case "hire":
      addEmployee();
      break;
    case "viewall":
      viewEmployees();
      break;
    case "view":
      viewAnEmployee();
      break;
    case "fire":
      fireEmployee();
      break;
    default:
      alert("Invalid choice. Please try again.");
  }
} while (true);
