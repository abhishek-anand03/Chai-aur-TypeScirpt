// Array Basics:-

// Sytax:-
const ChaiFlavours: string[] = ["Masala", "Adrak"];
const ChaiPrice: number[] = [10, 20];

// Literal Value form with Utility Type example:-
const rating: Array<number> = [4.5, 5.0];

// Usage:-
type Chai = {
  name: string;
  price: number;
}

const menu: Chai[] = [
  {name: "Masala", price: 15},
  {name: "Adrak", price: 25}
]

// Readonly Arrays:-
const cities: readonly string[] = ["Delhi", "Jaipur"];
cities.push("Pune"); // Cannot update Readonly properties/values.

// Multi-Dimensional Array:- 2D
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
];

// Tuples:-

// Syntax:-
let chaiTuple: [String, number];

chaiTuple = ["Masala", 20];
chaiTuple = [20, "Masala"]; // Strict format:- Cannot change the order of the values.

// With optional value:-
let userInfo: [string, number, boolean?];
userInfo = ["Abhishek", 234];
userInfo = ["Abhishek", 234, true];

// Readonly Tuples:-
const location: readonly[number, number] = [28.66, 32.39];
