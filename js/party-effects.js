/*
 * Place party elements into divs randomly
 *<div class="balloons" id='balloon1'></div>

 var randomWidth = Math.floor(50 + (Math.random() * (window.innerWidth - 300)));
 */


 //Get every animal-div
var animalDivEls = $('.animal-div');

//Current div in loop
var currentDiv = 1;

async function placeBalloons(){

 //For each animal div
 for (animalDiv of animalDivEls){
   //Pick a random number of balloons 2-5
   var randomNumBalloons = 2 +  Math.floor(Math.random() * 4);

   for (var i = 0; i < randomNumBalloons; i++){
     //Insert the balloons after the first element of the divs

     //Style it with a certain class to determine infoPlacement

     //Give each balloon an event that makes it play a sound and dissappear on click
     // console.log(currentDiv);
     // console.log(randomNumBalloons);
   };

   currentDiv++
 };

}

placeBalloons().then(
  $('.balloons').on('click', function(){
    $('.balloons').hide();
  }));
