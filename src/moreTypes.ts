// Type Assertion (as keyword):-

let response: any = "42";
let numericLength: number = (response as string).length; // (response as string) is forceful Type Assertion

  // localStorage (as) example:-
type Book = {
  name: string;
}

let bookString = `{"name": "who moved m cheese"}`;
// let bookObject = JSON.parse(bookString); 
let bookObject = JSON.parse(bookString) as Book;
console.log(typeof bookObject);

  // Input Element (as) example:-
const inputElement = document.getElementById("username") as HTMLInputElement

// any v/s unknown (Deep Dive):-
let value: any;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.UpperCase();

let newValue: unknown;
newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
newValue.toUpperCase(); // This line will throw error because of unknown type;
if(typeof newValue === "string") {
  newValue.toUpperCase();
}

// Handling errors in try/catch:-
try {

} catch(error) {
  console.log(error.message); // This line will throw error because of "catch" doesn't know yet for sure that message property exist in the "error" or not. To solve this problem we need to apply type guard(line no. 46).
} 

try {
  
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "chai aur code";
const strData: string = data as string;
