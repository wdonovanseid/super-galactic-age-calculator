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
    expect(galAge.userAvg).toEqual(42)
  });

  test('should determine users life expectancy', ()=> {
    let galAge2 = new GalacticAge(33,"no","female","no")
    galAge2.calcAvg();
    expect(galAge2.userAvg).toEqual(42)
  });

  test('should determine how many earth years a user has to live on each planet', ()=> {
    expect().toEqual()
  });
});