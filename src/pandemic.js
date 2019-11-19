export class Pandemic{
  constructor (name) {
    this.name = name;
    this.totalHealth = 1000;
    this.rate = 5;
    this.rateDeath = 0;
    this.cityArray = [];
  }
  loseCheck(){
    if (this.totalHealth < 1){
      return true;
    }
    else {
      return false;
    }
  }
  attritionDamage(){
    setInterval(() => {
      this.rateDeath += this.rate;
    }, 1000);
  }
  rapidSpread(){
    if (this.totalHealth <= 500){
      this.rate = 25;
    }
  }
  // See game.test.js for these tests
  addCity(city1, city2, city3){
    this.cityArray.push(city1, city2, city3);
  }
  removePop(city1, city2, city3){
    setInterval(() => {
      this.totalHealth = 1000;
      this.totalHealth -= this.rateDeath;
      this.totalHealth -= (city1.originalPop - city1.currentPop);
      this.totalHealth -= (city2.originalPop - city2.currentPop);
      this.totalHealth -= (city3.originalPop - city3.currentPop);
      this.rapidSpread();
    }, 1000);
  }
}
