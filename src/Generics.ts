// Generics Basics:-
function wrapInArray<T>(item: T): T[] {
  return [item];
};

wrapInArray("masala");
wrapInArray(42);
wrapInArray({
  flavour: "ginger"
});

// Multiple Generic Types:-
function pair<A, B>(a: A, b:B): [A, B] {
  return [a, b];
};

pair("masala", "test");
pair("masala", 20);
pair("masala", {
  flavour: "ginger"
})