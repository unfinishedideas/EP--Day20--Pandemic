export class City {
  constructor (name, pop, rate){
    this.name = name;
    this.pop = pop;
    this.rate = rate;
  }
  cityDamage(){
    setInterval(() => {
      this.pop -= this.rate;
    }, 1000);
  }
}
