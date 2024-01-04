//-------- 1 --------//
/*The find() method of Array instances returns the first element in 
the provided array that satisfies the provided testing function.
If no values satisfy the testing function, undefined is returned.*/
const array1 = [5, 12, 130, 4];
const found1 = array1.find((element) => element > 10); // Expected output: 12

//-------- 2 --------//
/*The findIndex() method of Array instances returns the index of the
first element in an array that satisfies the provided testing function.
If no elements satisfy the testing function, -1 is returned.*/
const found2 = array1.findIndex((element) => element > 13); // Expected output: 2

//-------- 3 --------//
/*The indexOf() method of Array instances returns the first index at 
which a given element can be found in the array, or -1 if it is not present.*/
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison")); // Expected output: 1

//-------- 4 --------//
/*The lastIndexOf() method of Array instances returns the last index 
at which a given element can be found in the array, or -1 if it is 
not present. The array is searched backwards.*/
console.log(animals.lastIndexOf("bison")); // Expected output: 4

//-------- 5 --------//
/*The keys() method of Array instances returns a new array 
iterator object that contains the keys for each index in the array.*/
const array2 = ["a", "b", "c"];
const iterator = array2.keys();

for (const key of iterator) {
  console.log(key); //Expected output: 0 1 2
}

//-------- 6 --------//
/*The length data property of an Array instance represents
the number of elements in that array. The value is an unsigned,
32-bit integer that is always numerically greater than 
the highest index in the array.*/
console.log(array2.length); // Expected output: 3

//-------- 7 --------//
/*The pop() method of Array instances removes the last element from 
an array and returns that element. This method changes the length of the array.*/
const plants = ["broccoli", "cabbage", "kale", "tomato"];

console.log(plants.pop()); // Expected output: "tomato"

//-------- 8 --------//
/*The push() method of Array instances adds the specified elements
to the end of an array and returns the new length of the array.*/
plants.push("cucumber");
console.log(plants); // Expected output: ['broccoli', 'cabbage', 'kale', 'cucumber']

//-------- 9 --------//
/*The slice() method of Array instances returns a copy of a portion of 
an array into a new array object selected from start to end (end not included) 
where start and end represent the index of items in that array. 
The original array will not be modified.*/
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2)); // Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // Expected output: Array ["camel", "duck"]

//-------- 10 --------//
/*The sort() method of Array instances sorts the elements of an array 
in place and returns the reference to the same array, but now sorted. 
The default sort order is ascending.*/
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months); // Expected output: Array ["Dec", "Feb", "Jan", "March"]
