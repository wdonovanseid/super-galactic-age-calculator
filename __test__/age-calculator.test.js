import {GalacticAge} from './../src/js/age-calculator.js';

describe('GalacticAge', ()=> {
  let galAge;

  beforeEach(()=> {
    galAge = new GalacticAge(45);
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
});