class kubus {
  constructor(sisi) {
    this.sisi = sisi;
    this.permukaan = () => {
      return 6 * this.sisi * this.sisi;
    };
  }
}

const cube = new kubus(420);
console.log(cube.permukaan());
