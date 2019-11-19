import { Pandemic } from './../src/pandemic.js';

describe('Pandemic', () => {
  jest.useFakeTimers();
  let virus;

  beforeEach(function() {
    virus = new Pandemic("Elvirus");
    virus.attritionDamage();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });
  test('should correctly name the Pandemic', () => {
    expect(virus.name).toEqual("Elvirus");
  });
  test('should return true if Pandemic loseCheck total is less than 1', () => {
    virus.totalHealth = 0;
    expect(virus.loseCheck()).toEqual(true);
  });
  test('should return false if Pandemic loseCheck total is more than 1', () => {
    virus.totalHealth = 100;
    expect(virus.loseCheck()).toEqual(false);
  });
  // test('should have a totalHealth of 995 after 1000 milliseconds', () => {
  //   jest.advanceTimersByTime(1001);
  //   expect(virus.totalHealth).toEqual(995);
  // });
  test('rapidSpread should change rate to 25 if totalHealth is under 500', () => {
    virus.totalHealth = 499;
    virus.rapidSpread();
    expect(virus.rate).toEqual(25);
  });
});
