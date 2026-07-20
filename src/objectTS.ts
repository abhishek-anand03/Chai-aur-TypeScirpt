// Object in TypeScript:-
type chai = {
  name: string;
  price: number;
  isHot: boolean;
}

const chai: chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true
}

// Declaring Object Types:-
// Note:- Before defining objects, always define their types first.
let tea: {
  name: string;
  price: number;
  isHot: boolean;
}

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true
}

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
}

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "tealeaves"]
}
