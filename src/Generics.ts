// Generics Basics:-
function wrapInArray<T>(item: T): T[] {
  return [item];
};

wrapInArray("masala");
wrapInArray(42);
wrapInArray({
  flavour: "ginger"
});

