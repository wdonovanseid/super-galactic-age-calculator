import {GalacticAge} from './../src/js/age-calculator.js';

describe('GalacticAge', ()=> {
  let galAge;

  beforeEach(()=> {
    galAge = new GalacticAge(45);
  });

  test('should return user age converted to mercury years', ()=> {
    expect(galAge.mercAge).toEqual(10.8);
  });
});