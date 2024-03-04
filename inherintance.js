class Siswa {
  constructor(name, skill, city) {
    this.name = name;
    this.skill = skill;
    this.city = city;
  }
  introduce() {
    console.log(`A student from ${this.name} which is from ${this.city}`);
  }
}

class Concentration extends Siswa {
  //override
  constructor(name, skill, factory) {
    super(name, skill, factory); // Pass factory as city
    this.factory = factory;
  }
  introduce() {
    // Rename from intro to introduce
    console.log(
      `${this.name} is a ${this.skill} who interns at ${this.factory}`
    );
  }
}

const siswa1 = new Concentration(`Aldi`, `Game Dev`, `GameLoft`);
siswa1.introduce(`EA Sport`);
