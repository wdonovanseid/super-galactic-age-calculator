export class GalacticAge {
  constructor(userAge,userDrink,userGender,userExercise) {
    this.earthAge = userAge;
    this.mercAge = Math.round(userAge * 0.24);
    this.venusAge = Math.round(userAge * 0.62);
    this.marsAge = Math.round(userAge * 1.88);
    this.jupAge = Math.round(userAge * 11.86);
    this.userAvg = 70;
    this.userDrink = userDrink;
    this.userGender = userGender;
    this.userExercise = userExercise;
  }

  calcAvg() {
    if (this.userDrink === "yes") {
      this.userAvg *= 0.5;
    }
    if (this.userGender === "male") {
      this.userAvg *= 0.85;
    } else if (this.userGender === "female") {
      this.userAvg *= 1.25;
    } else {
      this.userAvg *= 1.1;
    }
    if (this.userExercise === "yes") {
      this.userAvg *= 1.4;
    } else {
      this.userAvg *= 0.7;
    }
    this.userAvg = Math.round(this.userAvg);
  }
}