import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {GalacticAge} from './js/age-calculator';

function displayGalInfo(userGalAge) {
  $("#output").show();
  $("#mercAge").text(userGalAge.mercAge);
  if (userGalAge.mercAgeAvg < 0) {
    userGalAge.mercAgeAvg *= -1;
    $("#mercAgeAvg").text(`You have lived ${userGalAge.mercAgeAvg} years past your life expectancy here.`);
  } else {
    $("#mercAgeAvg").text(`You have ${userGalAge.mercAgeAvg} years left to live.`);
  }
  $("#venusAge").text(userGalAge.venusAge);
  if (userGalAge.venusAgeAvg < 0) {
    userGalAge.venusAgeAvg *= -1;
    $("#venusAgeAvg").text(`You have lived ${userGalAge.venusAgeAvg} years past your life expectancy here.`);
  } else {
    $("#venusAgeAvg").text(`You have ${userGalAge.venusAgeAvg} years left to live.`);
  }
  $("#marsAge").text(userGalAge.marsAge);
  if (userGalAge.marsAgeAvg < 0) {
    userGalAge.marsAgeAvg *= -1;
    $("#marsAgeAvg").text(`You have lived ${userGalAge.marsAgeAvg} years past your life expectancy here.`);
  } else {
    $("#marsAgeAvg").text(`You have ${userGalAge.marsAgeAvg} years left to live.`);
  }
  $("#jupAge").text(userGalAge.jupAge);
  if (userGalAge.jupAgeAvg < 0) {
    userGalAge.jupAgeAvg *= -1;
    $("#jupAgeAvg").text(`You have lived ${userGalAge.jupAgeAvg} years past your life expectancy here.`);
  } else {
    $("#jupAgeAvg").text(`You have ${userGalAge.jupAgeAvg} years left to live.`);
  }
  $("#mayflyAge").text(userGalAge.mayflyAge);
}

function attachListeners() {
  $("button#merc").on("click", function() {
    $("#venus-info").hide();
    $("#mars-info").hide();
    $("#jup-info").hide();
    $("#merc-info").toggle();
  });
  $("button#venus").on("click", function() {
    $("#merc-info").hide();
    $("#mars-info").hide();
    $("#jup-info").hide();
    $("#mayfly-info").hide();
    $("#venus-info").toggle();
  });
  $("button#mars").on("click", function() {
    $("#merc-info").hide();
    $("#venus-info").hide();
    $("#jup-info").hide();
    $("#mayfly-info").hide();
    $("#mars-info").toggle();
  });
  $("button#jup").on("click", function() {
    $("#merc-info").hide();
    $("#venus-info").hide();
    $("#mars-info").hide();
    $("#mayfly-info").hide();
    $("#jup-info").toggle();
  });
  $("button#jup").on("click", function() {
    $("#merc-info").hide();
    $("#venus-info").hide();
    $("#mars-info").hide();
    $("#jup-info").hide();
    $("#mayfly-info").toggle();
  });
}

$(document).ready(function() {
  attachListeners();
  $("form#user-info").submit(function(event) {
    event.preventDefault();
    const userAge = parseInt($("input#user-age").val());
    const userDrink = $("input[name='user-drink']:checked").val();
    const userGender = $("input[name='user-gender']:checked").val();
    const userExercise = $("input[name='user-exercise']:checked").val();
    if (!userAge || !userDrink || !userGender || !userExercise) {
      alert("Enter in all your info before submitting please");
    } else {
      let userGalAge = new GalacticAge(userAge,userDrink,userGender,userExercise);
      userGalAge.calcAvg();
      userGalAge.lifeLeft();
      displayGalInfo(userGalAge);
    }
  });
});