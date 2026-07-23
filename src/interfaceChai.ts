// Interface & Generics Intro:-
interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
};

const masala: Chai = {
  flavour: "masala",
  price: 30
};

// readonly interface:-
interface Shop {
  readonly id: number;
  name: string;
};

const s: Shop = {
  id: 1,
  name: "Chaicode Caffe"
};

// Interface for Functions:-
interface DiscountCalculator {
  (price:number): number
};

const apply50: DiscountCalculator = (p) => p * 0.5;