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