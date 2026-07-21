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

// Protected Modifier:-
// protected shopName = "Chai Corner"; // Access within class and Inheritance.

class Shop {
  protected shopName = "Chai Corner";
};

class Branch extends Shop {
  getName() {
    return this.shopName // ok
  }
};

new Branch().getName; 

// Another way for using private keyword.
class wallet {
  #balance = 100;
  getBalance() {
    return this.#balance
  }
}

const w = new wallet;
w.getBalance;

// ReadOnly in class:-
class cup {
  readonly capacity: number = 250;

  constructor (capacity: number) {
    this.capacity = capacity;
  }
}