/*
 * Group 14
 * JS for site buttons and other miscellaneous events
*/

//Function scrolls page forward 1 viewport
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollX
function scrollForward(width) {
  window.scrollBy(width, 0);
  //alert("pageXOffset: " + window.scrollX + ", scrollY: " + window.scrollY);
}

//Total number of full length divs - 1
var totalFullWidthDivs = 11-1;

//Find Start Button
var startButtonEl = $('#start');
// console.log(startButtonEl);

//Create boolean to see if start button has been clicked
var startClicked = false;

//Find body
var bodyEl = $('body');
// console.log(bodyEl);

//Find html
var htmlEl = $('html');
console.log(htmlEl);

//Number of times advanced
var timesAdvanced = 0;

//Find forward buttons
var forwardEl = $('#forward');
forwardEl.hide();

//Scroll to right until at end
forwardEl.click(function(){
  // console.log('Button clicked')
  if (timesAdvanced < totalFullWidthDivs - 2 ){
    scrollForward(window.innerWidth);
    timesAdvanced += 1;
  } else {
    scrollForward(window.innerWidth);
    startClicked = false;
    forwardEl.hide();
    timesAdvanced = 0;
  }

});

//Scroll screen full width to the right on start button click
startButtonEl.click(function(){
  // console.log('Button clicked')
  htmlEl.addClass('smoothScroll');
  //bodyEl.removeClass('stopHorizonatalScroll');
  scrollForward(window.innerWidth);
  startClicked = true;
  forwardEl.show();
});

//Find restart buttons
var restartEl = $('#restart');
// console.log(bodyEl);

//Scroll screen full width to the right
restartEl.click(function(){
  // console.log('Button clicked')
  htmlEl.removeClass('smoothScroll');
  scrollForward(-window.innerWidth * totalFullWidthDivs);
});

//Make audio play and stop

//Find button controlling audio and hide it to start
var audioControlEl = $('#audioControl');
audioControlEl.hide();

//Find audio element
var audioBkgEl = $('#background-music');

audioControlEl.click(function(){
  if (audioBkgEl[0].paused){
    audioBkgEl[0].play();
  } else {
    audioBkgEl[0].pause();
  };
  console.log(audioBkgEl[0].paused);
});

//Hide Toggle Buttons at start
var toggleButtonsEl = $('#toggleButtons');
toggleButtonsEl.hide();

//Show Settings buttons
var settingButtonEl = $('#settings');
settingButtonEl.click(function(){
  toggleButtonsEl.toggle();
  audioControlEl.toggle();
});

//Toggle navigation Buttons
toggleButtonsEl.click(function(){
  //Change out starting button for instructions
  if (startButtonEl.is(":visible")){
    $('#title').append('<p id="slideInstruct"> Scroll to View =>');
  } else {
    $('#slideInstruct').remove();
  };

  //If Start was clicked at some point, bring back forward navigation
  if (startClicked == true){
    forwardEl.toggle();
  };

  //Toggle Start and Restart Button and allow free scrolling
  startButtonEl.toggle();
  bodyEl.toggleClass('stopHorizonatalScroll');
  restartEl.toggle();
});
