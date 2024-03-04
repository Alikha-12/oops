class Crypto {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDetails() {
    return `Name: ${this.name}, Price: ${this.price}`;
  }
}
class CryptoCoin extends Crypto {
  constructor(name, price, supply, yearCreated) {
    super(name, price);
    this.supply = supply;
    this.yearCreated = yearCreated;
  }

  getDetails() {
    return `Name: ${this.name}, Price: ${this.price}, Supply: ${this.supply}, Year: ${this.yearCreated}`;
  }
}

class CryptoToken extends Crypto {
  constructor(name, price, host) {
    super(name, price);
    this.host = host;
  }

  getDetails() {
    return `${super.getDetails()}, Active Host: ${this.host}`;
  }
}

const bitcoin = new CryptoCoin("Bitcoin", 60000, "21 Million", 2009);
console.log(bitcoin.getDetails());

const ethereum = new CryptoToken("Ethereum", 3500, "~8600");
console.log(ethereum.getDetails());
