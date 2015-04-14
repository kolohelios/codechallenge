'use strict';

$(document).ready(init);

function init(){
  $('#getnums').click(getRandomNums);
  $('.even').click(squareEvenNums);
}

function getRandomNums(){
  var arrayOfNums = [];
  $.getJSON('https://qrng.anu.edu.au/API/jsonI.php?length=20&type=uint16', function(response){
    arrayOfNums = response.data;
    filterNums(arrayOfNums);
  });
}

function filterNums(array){
  var evensArray = [], threesArray = [], othersArray = [];
  array.forEach(function(num){
    if(num%2 === 0){
      evensArray.push(num);
    }
    else{
      if(num%3 === 0){
        threesArray.push(num);
      }
      else{
        othersArray.push(num);
      }
    }
  });
  var threesString = threesArray.join(', ');
  var othersString = othersArray.join(', ');
  displayNums(evensArray, threesString, othersString);
}

function squareEvenNums(){
  $(this).text(Math.sqrt($(this).text()));
}

function displayNums(evensArray, threes, others){
  // evens
  //var $outerDiv = '<div>';
  evensArray.forEach(function(num){
    var $div = '<div>';
    $($div).text(num);
    $($div).addClass('even');
    $(''#evens').append($div);
  });
  //$('#evens').append($outerDiv);

  //odds
  var $div = '<div>';
  $($div).text(threes);
  $('#threes').append(threes);

  //others
  var $div = '<div>';
  $($div).text(others);
  $('#others').append(others);


}
