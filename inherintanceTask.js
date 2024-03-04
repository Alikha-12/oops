class Crypto {
  constructor(name, short) {
    this.name = name;
    this.short = short;
  }
}

class Crypto1 extends Crypto {
  constructor(name, short, creator) {
    super(name, short);
    this.creator = creator;
  }

  mine() {
    console.log(`${this.name} was made by ${this.creator}.`);
  }
}

class Crypto2 extends Crypto {
  constructor(name, short, value) {
    super(name, short);
    this.value = value;
  }

  describevalue() {
    console.log(
      `1 ${this.name} or ${this.short} is equal to IDR ${this.value}.`
    );
  }
}

const bitcoin = new Crypto1("Bitcoin", "BTC", "Satoshi Nakamoto");
const ethereum = new Crypto2("Ethereum", "ETH", "796.809.538");

bitcoin.mine();
ethereum.describevalue();
