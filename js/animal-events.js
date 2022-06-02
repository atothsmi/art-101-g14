/*
 * Group 14
 * JS for events that happend when animals are clicked index.html site
*/

/*Add Mouse click event for every animal to show animal info*/

//Find mammoth image
var mammothEl = $('#mammoth');

//on click, reveal the box with Information
mammothEl.click(function(){
  console.log('Mammoth Clicked')
  //Find info box in details els
  var infoBoxEl = $('#mammothDetails');
  infoBoxEl.toggleClass('hidden');
});

//Find walrus image
var walrusEl = $('#walrus');

//on click, reveal the box with Information
walrusEl.click(function(){
  console.log('Walrus Clicked')
  //Find info box in details els
  var infoBoxEl = $('#walrusDetails');
  infoBoxEl.toggleClass('hidden');
});

//Find zebra image
var zebraEl = $('#zebra');

//on click, reveal the box with Information
zebraEl.click(function(){
  console.log('Zebra Clicked')
  //Find info box in details els
  var infoBoxEl = $('#zebraDetails');
  infoBoxEl.toggleClass('hidden');
});

//Find otter image
var otterEl = $('#otter');

//on click, reveal the box with Information
otterEl.click(function(){
  console.log('Otter Clicked')
  //Find info box in details els
  var infoBoxEl = $('#otterDetails');
  infoBoxEl.toggleClass('hidden');
});

//Find fish image
var fishEl = $('#fish');

//on click, reveal the box with Information
fishEl.click(function(){
  console.log('Fish Clicked')
  //Find info box in details els
  var infoBoxEl = $('#fishDetails');
  infoBoxEl.toggleClass('hidden');
});

//Find tiger2 image
var tiger2El = $('#tiger2');

//on click, reveal the box with Information
tiger2El.click(function(){
  console.log('Tiger2 Clicked')
  //Find info box in details els
  var infoBoxEl = $('#tiger2Details');
  infoBoxEl.toggleClass('hidden');
});

//Find tiger1 image
var tiger1El = $('#tiger1');

//on click, reveal the box with Information
tiger1El.click(function(){
  console.log('Tiger1 Clicked')
  //Find info box in details els
  var infoBoxEl = $('#tiger1Details');
  infoBoxEl.toggleClass('hidden');
});

//Find rhino image
var rhinoEl = $('#rhino');

//on click, reveal the box with Information
rhinoEl.click(function(){
  console.log('Rhino Clicked')
  //Find info box in details els
  var infoBoxEl = $('#rhinoDetails');
  infoBoxEl.toggleClass('hidden');
});

//Array of all animalDivEls
var animalDivEls = [mammothEl, walrusEl, zebraEl, otterEl, fishEl, tiger2El, tiger1El, rhinoEl];

//Array of left or right placement
var xAxis = ['balloons-right', 'balloons-right', 'balloons-left', 'balloons-left']

//Array of top, bottom, or middle placement
var yAxis = ['balloons-bottom', 'balloons-top', 'balloons-bottom', 'balloons-top']

//Place a whole bunch of balloons
function placeBalloons(){

  //number of current div
  var currentDiv = 0;

  //For each animal div
  for (animalDiv of animalDivEls){
    //number of balloons 4
    var numBalloons = 4

    for (var i = 0; i < numBalloons; i++){
      //Create id for balloon
      var idBalloon = 'balloon' + currentDiv + '' + i;

      //Insert the balloons after the first element of the divs
      //Style it with a certain class to determine placement
      animalDiv.after('<div class="balloons '+ xAxis[i] + ' ' + yAxis[i] + '" id="' + idBalloon + '">');

      //Give each balloon an event that makes it play a sound and dissappear on click
      popClick("#" + idBalloon);

      // console.log(currentDiv);
      // console.log(randomNumBalloons);
    };

    currentDiv++
  };

}

var audioSfxEl = $('#sfx1');

function popClick(id){
  //console.log($('#' + num));
  $(id).click(function(){
    audioSfxEl[0].play();
    $(id).hide();
  });
};

placeBalloons()

// .then(
//  $('.balloons').on('click', function(){
//    $('.balloons').hide();
//  }));
