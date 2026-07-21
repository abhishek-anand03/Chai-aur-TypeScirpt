// Classes Introduction:-
class Chai {
  flavour: string;
  price: number

  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }

  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    console.log(this);
  }
}

const masalaChai = new Chai("Ginger", 20);
masalaChai.flavour = "masala";