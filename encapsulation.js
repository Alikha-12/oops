class Delivery {
  constructor(weight) {
    // this.tax = 500 (nilai bisa diganti karena menggunakan "this" bukan "let")
    let tax = 5000;
    let fee = () => {
      return weight * 1000;
    };
    this.totalFee = () => {
      return fee() + tax;
    };
  }
}
const laptop = new Delivery(5); //instance
laptop.tax = 10000;
console.log(laptop.totalFee);
