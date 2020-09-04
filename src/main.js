import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {GalacticAge} from './js/age-calculator';

function displayGalInfo(userGalAge) {
  $("#output").show();
  // const planetArrayAge=["mercAge","venusAge","marsAge","jupAge"];
  // const planetArrayAgeAvg=["mercAgeAvg","venusAgeAvg","marsAgeAvg","jupAgeAvg"];
  //! Attempt 2
  //   for (let i=0; i<4; i++) {
  //   $("#"+planetArrayAge[i]).text(userGalAge.planetArrayAge[i]);
  //   if (userGalAge.planetArrayAgeAvg[i] < 0) {
  //     userGalAge.planetArrayAgeAvg[i] *= -1;
  //     $("#"+planetArrayAgeAvg[i]).text("You have lived "+userGalAge.planetAgeAvg+" years past your life expectancy here.");
  //   } else {
  //     $("#"+planetArrayAgeAvg[i]).text("You have "+userGalAge.planetAgeAvg+" years left to live.");
  //   }
  // }
  //! Attempt 1
  // let i=0;
  // planetArrayAge.forEach(function(planetAge) {
  //   $("#"+planetAge).text(userGalAge.planetAge);
    // if (userGalAge.planetArrayAgeAvg[i] < 0) {
    //   planetArrayAgeAvg;
    //   userGalAge.planetArrayAgeAvg[i] *= -1;
    //   $("#"+planetAge+"Avg").text("You have lived "+userGalAge.planetArrayAgeAvg[i]+" years past your life expectancy here.");
    // } else {
    //   $("#"+planetAge+"Avg").text("You have "+userGalAge.planetArrayAgeAvg[i]+" years left to live.");
    // }
    // i++;
  // });
  $("#mercAge").text(userGalAge.mercAge);
  console.log(userGalAge.mercAgeAvg)
  if (userGalAge.mercAgeAvg < 0) {
    $("#mercAgeAvg").text("You have lived "+userGalAge.mercAgeAvg+" years past your life expectancy here.");
  } else {
    $("#mercAgeAvg").text("You have "+userGalAge.mercAgeAvg+" years left to live.");
  }
  $("#venusAge").text(userGalAge.venusAge);
  if (userGalAge.venusAgeAvg < 0) {
    $("#venusAgeAvg").text("You have lived "+userGalAge.venusAgeAvg+" years past your life expectancy here.");
  } else {
    $("#venusAgeAvg").text("You have "+userGalAge.venusAgeAvg+" years left to live.");
  }
  $("#marsAge").text(userGalAge.marsAge);
  if (userGalAge.marsAgeAvg < 0) {
    $("#marsAgeAvg").text("You have lived "+userGalAge.marsAgeAvg+" years past your life expectancy here.");
  } else {
    $("#marsAgeAvg").text("You have "+userGalAge.marsAgeAvg+" years left to live.");
  }
  $("#jupAge").text(userGalAge.jupAge);
  if (userGalAge.jupAgeAvg < 0) {
    $("#jupAgeAvg").text("You have lived "+userGalAge.jupAgeAvg+" years past your life expectancy here.");
  } else {
    $("#jupAgeAvg").text("You have "+userGalAge.jupAgeAvg+" years left to live.");
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
    console.log(userGalAge)
    displayGalInfo(userGalAge);
  });
});