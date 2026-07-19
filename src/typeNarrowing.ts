// Type Guards/ Type Narrowing examples:-

function getChai(kind: string | number) {
  if(typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `chai order: ${kind}`;
}

// Truthiness examples:-

function serveChai(msg?: string) {
  if(msg) {
    return `Serving ${msg}`;
  }
  return `Serving default Masala Chai`;
}

// Exhaustive Checks example:-

function orderChai(size: "small" | "medium" | "large") {
  if(size === "small") {
    return `small cutting chai...`;
  }
  if(size === "medium" || size === "large") {
    return `make extra chai`;
  }
  return `chai order ${size}`;
}

// Safety Checks example:-

class kulhadChai {
  serve() {
    return `serving kulhad chai`;
  }
}

class cutting {
  serve() {
    return `serving cutting chai`;
  }
}

function serve(chai: kulhadChai | cutting) {
  if(chai instanceof kulhadChai) { // if chai instanceof is saftey check.
    return chai.serve();
  }
}

// Custom Type Predicates-(is) (also known as user-defined type guards)

type ChaiOrder = {
  type: string;
  sugar: number;
}

function isChaiOrder(obj: any): obj is ChaiOrder {
  return(
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" && 
    typeof obj.sugar === "number"
  )
}

function Serve(item: ChaiOrder | string) {
  if(isChaiOrder(item)) {
    return `serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `serving custom chai: ${item}`
}

// Discriminated Unions:- A Discriminated Union (also called a tagged union or algebraic data type) is a TypeScript pattern for representing a value that can be one of several different types, where each type has a common property (called the discriminant or tag) with a unique literal value.

// This allows TypeScript to automatically narrow the type based on that property.

// Here, "type" is the discriminant property.


type MasalaChai = {
  type: "masala";
  spiceLevel: number;
}

type GingerChai = {
  type: "ginger";
  amount: number;
}

type ElaichiChai = {
  type: "elaichi";
  aroma: number;
}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch(order.type) {
    case "masala":
      return `MasalaChai`;
      break;
    case "ginger":
      return `GingerChai`;
      break;
    case "elaichi":
      return `ElaichiChai`;
      break;
  }
}


// Checking based on a specific property:-

function Brew(order: MasalaChai | GingerChai) {
  if("spiceLevel" in order) {
    return order;
  }
}

// With array:- 

function isStringArray(arr: unknown): arr is string {
  return arr;
}