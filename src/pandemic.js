export class Pandemic{
  constructor (name) {
    this.name = name;
    this.totalHealth = 1000;
    this.rate = 5;
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
      this.totalHealth -= this.rate;
    }, 1000);
  }
  rapidSpread(){
    if (this.totalHealth <= 500){
      this.rate = 25;
    }
  }
}
