export class GalacticAge {
  constructor(userAge) {
    this.earthAge = userAge;
    this.mercAge = Math.round(userAge * 0.24);
    this.venusAge = Math.round(userAge * 0.62);
    this.marsAge = Math.round(userAge * 1.88);
    this.jupAge = Math.round(userAge * 11.86);
  }
}