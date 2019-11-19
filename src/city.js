export class City {
  constructor (name, pop, rate){
    this.name = name;
    this.currentPop = pop;
    this.originalPop = pop; 
    this.rate = rate;
  }
  cityDamage(){
    setInterval(() => {
      this.currentPop -= this.rate;
    }, 1000);
  }
}
