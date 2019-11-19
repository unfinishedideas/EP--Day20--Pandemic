import { Pandemic } from './../src/pandemic.js';
import { City } from './../src/city.js';

describe('Game', () => {
  jest.useFakeTimers();
  let virus;
  let city1;
  let city2;
  let city3;

  beforeEach(function() {
    city1 = new City("Paris", 200, 10);
    city2 = new City("New York", 400, 10);
    city3 = new City("Berlin", 400, 10);
    city1.cityDamage();
    city2.cityDamage();
    city3.cityDamage();

    virus = new Pandemic("Elvirus");
    virus.addCity(city1, city2, city3);
    virus.attritionDamage();
    virus.rapidSpread();
    virus.removePop(city1, city2, city3);

  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should add city1 to Virus cityArray', () => {
    expect(virus.cityArray[0]).toEqual(city1);
  });
  test('should add city2 to Virus cityArray', () => {
    expect(virus.cityArray[1]).toEqual(city2);
  });
  test('should add city3 to Virus cityArray', () => {
    expect(virus.cityArray[2]).toEqual(city3);
  });
  test('should set virus totalHealth to 965 after 1 second from attrition + city damages', () => {
    jest.advanceTimersByTime(1001);
    expect(virus.totalHealth).toEqual(965);
  });
  test('should set virus totalHealth to 930 after 2 seconds from attrition + city damages', () => {
    jest.advanceTimersByTime(2001);
    expect(virus.totalHealth).toEqual(930);
  });
  test('should set virus totalHealth to 455 after 15 seconds from attrition + city damages', () => {
    jest.advanceTimersByTime(16000);
    expect(virus.totalHealth).toEqual(420);
  });

});
