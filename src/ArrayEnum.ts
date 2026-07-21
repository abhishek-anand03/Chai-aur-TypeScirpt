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