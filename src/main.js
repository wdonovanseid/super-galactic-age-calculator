import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {GalacticAge} from './js/age-calculator';

$(document).ready(function() {
  $("form#userInfo").submit(function(event) {
    event.preventDefault();
    const userAge = parseInt($("input#user-age").val());
    const userDrink = $("input#user-drink").val();
    const userGender = $("input#user-gender").val();
    const userExercise = $("input#user-exercise").val();
    let userGalAge = new GalacticAge(userAge,userDrink,userGender,userExercise);
    userGalAge.calcAvg();
    userGalAge.lifeLeft();
    $("#output").show();
    $("#merc-age").text(userGalAge.mercAge);
    if (userGalAge.mercAgeAvg < 0) {
      $("#merc-age-avg").text("You have lived "+(-userGalAge.mercAgeAvg)+" years past your life expectancy here.")
    } else {
      $("#merc-age-avg").text("You have "+userGalAge.mercAgeAvg+" years left to live.")
    }
  });
});