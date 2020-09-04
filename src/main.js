import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {GalacticAge} from './js/age-calculator';

function displayGalInfo(userGalAge) {
  $("#output").show();
  const planetArrayAge=["mercAge","venusAge","marsAge","jupAge"];
  const planetArrayAgeAvg=["mercAgeAvg","venusAgeAvg","marsAgeAvg","jupAgeAvg"];
  for (let i=0; i<4; i++) {
    $("#"+planetArrayAge[i]).text(userGalAge.planetArrayAge[i]);
    if (userGalAge.planetArrayAgeAvg[i] < 0) {
      userGalAge.planetArrayAgeAvg[i] *= -1;
      $("#"+planetArrayAgeAvg[i]).text("You have lived "+userGalAge.planetAgeAvg+" years past your life expectancy here.");
    } else {
      $("#"+planetArrayAgeAvg[i]).text("You have "+userGalAge.planetAgeAvg+" years left to live.");
    }
  }
  // planetArray.forEach(function(planetAge) {
  //   $("#"+planetAge).text(userGalAge.planetAge);
  //   if (userGalAge.planetAge+"Avg" < 0) {
  //     $("#"+planetAge+"Avg").text("You have lived "+(userGalAge.planetAge+"Avg")+" years past your life expectancy here.");
  //   } else {
  //     $("#"+planetAge+"Avg").text("You have "+userGalAge.planetAgeAvg+" years left to live.");
  //   }
  // });
  // $("#merc-age").text(userGalAge.mercAge);
  // if (userGalAge.mercAgeAvg > 0) {
  //   userGalAge.mercAgeAvg;
  //   $("#merc-age-avg").text("You have lived "+(-userGalAge.mercAgeAvg)+" years past your life expectancy here.");
  // } else {
  //   $("#merc-age-avg").text("You have "+userGalAge.mercAgeAvg+" years left to live.");
  // }
}

$(document).ready(function() {
  $("form#user-info").submit(function(event) {
    event.preventDefault();
    const userAge = $("input#user-age").val();
    const userDrink = $("input[name='user-gender']:checked").val();
    const userGender = $("input[name='user-drink']:checked").val();
    const userExercise = $("input[name='user-exercise']:checked").val();
    let userGalAge = new GalacticAge(userAge,userDrink,userGender,userExercise);
    userGalAge.calcAvg();
    userGalAge.lifeLeft();
    displayGalInfo(userGalAge);
  });
});