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

// Duck Typing / Structural Typing:-
type Cup = { size: string };

let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup; // No issue will happen because bare minimum is satisfied and i.e. {size: string} in small cup, only {material: "steel"} getting added in it.

// 
type Brew = { brewTime: number };

const Coffee = { brewTime: 5, beans: "Arabica"};
const chaiBrew: Brew = Coffee;

// Type Checking:-
type user = {
  username: string;
  password: string;
}

const u: user = {
  username: "Abhishek",
  password: "123" // If we don't write all the types then we will get an error and red curvy line appear under variable.
}

// Splitting the Data Types:-
type Item = {
  name: string;
  quantity: number;
}

type Address = {
  street: string;
  pin: number;
}

type order = {
  id: string;
  items: Item[];
  address: Address;
}

// Partial <T> Utility Type:-
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
}

const updateChai = (updates: Partial <Chai>) => {
  console.log("Updating chai with", updates);
}

updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({ }); // We can leave an empty object as well but later on it can create an issue.

// Required <T> Utility Type:-
type ChaiOrder = {
  name?: string;
  quantity?: number;
}

const placeOrder = (order: Required <ChaiOrder>) => {
  console.log(order);
}

placeOrder({
  name: "Masal Chai",
  quantity: 2
});

// Pick <T> Utility Type:-
type Chaai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
}

type BasicChaiInfo = Pick <Chaai, "name" | "price">;

const ChaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30
}

// Omit <T> Utility Type:-
type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string;
}

type PublicChai = Omit <Chai, "secretIngredients">;