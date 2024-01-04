function createCounter(initialCount) {
  function increment() {
    console.log("Current count:", initialCount++);
  }

  // Return the inner function
  return increment;
}

// Create a counter starting from 1
var counter1 = createCounter(1);

// Create another counter starting from 10
var counter2 = createCounter(10);

// Call the counters to demonstrate closure
counter1(); // Output: Current count: 1
counter1(); // Output: Current count: 2

counter2(); // Output: Current count: 10
counter2(); // Output: Current count: 11

/*
1- Closure:
Closure refers to the ability of a function to remember and access its lexical scope even when it's executed outside that scope.
In our example, increment() is a closure because it's defined inside createCounter(),
and it has access to the variable (initialCount) of the outer scope (createCounter()).

2-Lexical Environment:
Lexical environment refers to the context in which a piece of code is written and executed.
In our example, when increment() is created, it captures the entire lexical environment 
of its outer scope (createCounter()). It retains a reference to the variables and parameters in 
the scope where it was defined, even if it's executed outside that scope.
*/
