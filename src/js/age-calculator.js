export class GalacticAge {
  constructor(userAge) {
    this.earthAge = userAge;
    this.mercAge = Math.round(userAge * 0.24);
    this.venusAge;
    this.jupAge;
  }
}