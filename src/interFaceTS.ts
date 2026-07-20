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

