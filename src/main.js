import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {GalacticAge} from './js/age-calculator';

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
    $("#output").show();
    $("#merc-age").text(userGalAge.mercAge);
    if (userGalAge.mercAgeAvg < 0) {
      $("#merc-age-avg").text("You have lived "+(-userGalAge.mercAgeAvg)+" years past your life expectancy here.");
    } else {
      $("#merc-age-avg").text("You have "+userGalAge.mercAgeAvg+" years left to live.");
    }
  });
});