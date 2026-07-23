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


// Interface for Functions with "Start & Stop" methods:-
interface TeaMachine {
  start(price: number): void;
  stop(): void;
};

const machine: TeaMachine = {
  start() {
    console.log("Start");
    
  },

  stop() {
    console.log("Stop");
    
  }
};

// Index Signatures:-
interface ChaiRatings {
  [flavour: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5
}