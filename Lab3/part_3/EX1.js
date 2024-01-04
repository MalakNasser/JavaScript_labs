//-------- 1 --------//
/*The Object.create() static method creates a new object, 
using an existing object as the prototype of the newly created object.*/
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);
me.name = "Malak";
me.isHuman = true;
me.printIntroduction(); // Expected output: "My name is Malak. Am I human? true"

//-------- 2 --------//
/*The Object.getOwnPropertyNames() static method returns an array of 
all properties found directly in a given object.*/
const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object1)); // Expected output: Array ["a", "b", "c"]

//-------- 3 --------//
/*The Object.hasOwn() static method returns true if the specified object has 
the indicated property as its own property.*/
const object2 = {
  prop: "exists",
};

console.log(Object.hasOwn(object2, "prop")); // Expected output: true
console.log(Object.hasOwn(object2, "toString")); // Expected output: false

//-------- 4 --------//
/*The Object.is() static method determines whether two values are the same value.*/
console.log(Object.is("1", 1)); // Expected output: false
console.log(Object.is(NaN, NaN)); // Expected output: true

//-------- 5 --------//
/*The Object.keys() static method returns an array of a given
object's property names.*/
const object3 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object3)); // Expected output: Array ["a", "b", "c"]

//-------- 6 --------//
/*The Object.values() static method returns an array of a given 
object's property values.*/
console.log(Object.values(object3)); // Expected output: Array ["somestring", 42, false]

//-------- 7 --------//
/*The toLocaleString() method of Object instances returns a string 
representing this object. This method is meant to be overridden by derived 
objects for locale-specific purposes.*/
console.log(number1.toLocaleString("de-DE")); // Expected output: "123.456,789"

const number1 = 123456.789;

//-------- 8 --------//
/*The Object.fromEntries() static method transforms a list of key-value pairs into an object.*/
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj); // Expected output: Object { foo: "bar", baz: 42 }

//-------- 9 --------//
/*The Object.assign() static method copies all properties from one or more source
 objects to a target object. It returns the modified target object.*/
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // Expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // Expected output: Object { a: 1, b: 4, c: 5 }

//-------- 10 --------//
/*The propertyIsEnumerable() method of Object instances 
returns a boolean indicating whether the specified 
property is this object's enumerable own property.*/
const object = {};
const array = [];
object.property1 = 42;
array[0] = 42;

console.log(object.propertyIsEnumerable("property1")); // Expected output: true
console.log(array.propertyIsEnumerable(0)); // Expected output: true
console.log(array.propertyIsEnumerable("length")); // Expected output: false
