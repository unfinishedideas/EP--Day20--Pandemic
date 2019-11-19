import { City } from './../src/city.js';

describe('City', () => {
  jest.useFakeTimers();
  let city;

  beforeEach(function() {
    city = new City("Paris", 500, 10);
    city.cityDamage();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should correctly name the City', () => {
    expect(city.name).toEqual("Paris");
  });
  test('should correctly list the population', () => {
    expect(city.currentPop).toEqual(500);
  });
  test('should correctly list the rate', () => {
    expect(city.rate).toEqual(10);
  });
  test('should have a pop of 490 after 1000 milliseconds', () => {
    jest.advanceTimersByTime(1001);
    expect(city.currentPop).toEqual(490);
  });
});
