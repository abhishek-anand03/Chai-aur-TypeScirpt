// Functions Basics:-
//
function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2);

//
function getChaiPrice (): number {
  return 25
}

//
function makeOrder(order: string) {
  if(!order) return null;
  return order;
}

//
function MakeOrder(order: string): string{
  if(!order) return null; // I declared that the function returns a string: This means every return statement must return a string. But here, it returning null, which is not a string.
  return order;  
}