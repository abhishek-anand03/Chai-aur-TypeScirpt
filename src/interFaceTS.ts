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