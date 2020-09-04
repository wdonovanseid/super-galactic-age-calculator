import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {GalacticAge} from './js/age-calculator';

function displayGalInfo(userGalAge) {
  $("#output").show();
  const planetArray=["mercAge","venusAge","marsAge","jupAge"];
  planetArray.forEach(function(planetAge) {
    $("#"+planetAge).text(userGalAge.planetAge);
    if (userGalAge.planetAge+"Avg" < 0) {
      $("#"+planetAge+"Avg").text("You have lived "+(-userGalAge.planetAge+"Avg")+" years past your life expectancy here.");
    } else {
      $("#"+planetAge+"Avg").text("You have "+userGalAge+"."+planetAge+"Avg"+" years left to live.");
    }
  });
  $("#mercAge").text(userGalAge.mercAge);
  if (userGalAge.mercAgeAvg < 0) {
    $("#merc-age-avg").text("You have lived "+(-userGalAge.mercAgeAvg)+" years past your life expectancy here.");
  } else {
    $("#merc-age-avg").text("You have "+userGalAge.mercAgeAvg+" years left to live.");
  }
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