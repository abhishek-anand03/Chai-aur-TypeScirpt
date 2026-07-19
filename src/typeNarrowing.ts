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
