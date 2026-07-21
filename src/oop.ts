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

// Access Modifiers(Public, Private):-
class chai {
  public flavour: string = "Masala";

  private secretIngredients: string = "Cardamom";

  reveal() {
    return this.secretIngredients // ok
  }
}

const c = new chai();
c.reveal(); // Accessing through reveal.