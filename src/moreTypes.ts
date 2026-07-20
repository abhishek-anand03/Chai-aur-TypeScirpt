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
