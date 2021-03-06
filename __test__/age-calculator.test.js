import {GalacticAge} from './../src/js/age-calculator.js';

describe('GalacticAge', ()=> {
  let galAge;

  beforeEach(()=> {
    galAge = new GalacticAge(45,"yes","male","yes");
  });

  test('should return user age converted to mercury years', ()=> {
    expect(galAge.mercAge).toEqual(11);
  });

  test('should return user age converted to venus years', ()=> {
    expect(galAge.venusAge).toEqual(28);
  });

  test('should return user age converted to mars years', ()=> {
    expect(galAge.marsAge).toEqual(85);
  });

  test('should return user age converted to jupiter years', ()=> {
    expect(galAge.jupAge).toEqual(534);
  });

  test('should determine users life expectancy', ()=> {
    galAge.calcAvg();
    expect(galAge.userAvg).toEqual(42);
  });

  test('should determine users life expectancy (other branches)', ()=> {
    let galAge2 = new GalacticAge(4,"no","female","no");
    galAge2.calcAvg();
    expect(galAge2.userAvg).toEqual(61);
  });

  test('should determine users life expectancy (other branches)', ()=> {
    let galAge2 = new GalacticAge(70,"no","other","yes");
    galAge2.calcAvg();
    expect(galAge2.userAvg).toEqual(108);
  });

  test('should determine how many earth years a user has to live on each planet', ()=> {
    galAge.calcAvg();
    galAge.lifeLeft();
    expect(galAge.mercAgeAvg).toEqual(31);
    expect(galAge.venusAgeAvg).toEqual(14);
    expect(galAge.marsAgeAvg).toEqual(-43);
    expect(galAge.jupAgeAvg).toEqual(-492);
  });
});