// Type Aliases (type):-

type ChaiOrder = { 
  type: string;
  sugar: number; // line 2 to 6 are reusable code.
  strong: boolean;
}

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

// Interfaces v/s Types:-
type TeaRecipe = {
  water: number;
  milk: number;
}

// interface TeaRecipe{
//   water: number;
//   milk: number;
// }

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

/* type CupSize = "small" | "large";

class Chai implements CupSize {
  // Class cannot implement literal types, it can only implement object or intersection type.
}
*/

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

  // Example with boolean type:-
/*type Response = {ok: true} | {ok: false};

class myRes implements Response {
  ok: boolean = true;
}
*/

// Intersection Type:- An intersection type in TypeScript combines multiple types into one type using the & operator.

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
} 

type BaseChai = { tealeaves: number; }
type Extra = { masala: number; }

type MasaalaChai = BaseChai & Extra; // Example of intersection type.

const Cup: MasaalaChai = {
  tealeaves: 2,
  masala: 3
} 


// Optional & Readonly properties:-

  // Optional example:-
type user = {
  username: string;
  bio?: string;
}

const U1: user = { username: "Hitesh" };
const U2: user = {
 username: "Hitesh",
 bio: "hitesh.ai"
}

  // Readonly example:-
type config = {
  readonly appName: string;
  version: number
}

const cfg: config = {
  appName: "Masterji",
  version: 1
}

// cfg.appName = "Chai&Code"; // Cannot assign to 'appName' because it is a read-only property.