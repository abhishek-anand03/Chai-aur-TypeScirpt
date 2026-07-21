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

// Named Tuple:-
const chaiItems: [name: string, price:number] = [
  "Masal", 25
];

// Enums:-

// Syntax:-
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE
};

const size = CupSize.LARGE;

// Auto-increment Example:- 
enum Status {
  PENDING = 100,
  SERVED, // 101
  CANCELLED // 102
}

// Note:- In enums values should be consistent, if value getting declared in one property, then others should get value as well.
// Note:- In enums values mostly stays consistent, if one value is string, then others should be string. Same for other data Types.

enum ChaiType {
  MASALA = "Masala",
  GINGER = "Ginger"
}

function makeChai(type: ChaiType) {
  console.log(`Making ${type}`);
  
};
makeChai(ChaiType.GINGER);
makeChai(ChaiType.MASALA);

// Heterogeneous Enums:- Not a good practice.
enum RandomEnum {
  ID = 1,
  NAME = "Chai"
}

// Constant Enums:-
const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3
}

const s = Sugars.HIGH;