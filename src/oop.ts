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

// Getters & Setters in class:- We use this when we cannot access values directly.
class ModernChai {
  private _sugar: number = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if(value > 5) throw new Error("Too Sweet")
      this._sugar = value;
  }
}

const ch = new ModernChai();
ch.sugar = 3;

// Static Members in class:-
class EkChai {
  static shopName = "Chai Caffe";

  constructor (public flavour: string){}
}

console.log(EkChai.shopName);

// Abstract class:-
abstract class Drink {
  abstract make(): void
}

class MyChai extends Drink {
  make() {
    console.log("Brewing Chai");
  }
}