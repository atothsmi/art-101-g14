/*
 * Group 14
 * JS for site buttons
 * Author: Alia Toth-Smith
*/

//Function scrolls page forward 1 viewport width
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollX
function scrollForward(width) {
  window.scrollBy(width, 0);
}

//Total number of full length divs - 1
var totalFullWidthDivs = 11-1;

//Find Start Button
var startButtonEl = $('#start');

//Create boolean to see if start button has been clicked
var startClicked = false;

//Find body
var bodyEl = $('body');

//Find html
var htmlEl = $('html');

//Number of times advanced
var timesAdvanced = 0;

//Find instructions button
var instructEl = $('#instruct');

//When clicked toggle showing instruction text
instructEl.click(function(){
  $('#textInstruct').toggle();
});

//Find forward buttons
var forwardEl = $('#forward');
//Hide the button at first
forwardEl.hide();

//Scroll to right until at end when clicked
forwardEl.click(function(){
  //If not on the second to last page, scroll forward
  if (timesAdvanced < totalFullWidthDivs - 2 ){
    scrollForward(window.innerWidth);
    timesAdvanced += 1;
  //Otherwise, stop showing and reset after scrolling forward once
  } else {
    scrollForward(window.innerWidth);
    startClicked = false;
    forwardEl.hide();
    timesAdvanced = 0;
  }

});

//Scroll screen full width to the right on start button click
startButtonEl.click(function(){
  //Allow the page to scroll
  htmlEl.addClass('smoothScroll');
  //Scroll forward once
  scrollForward(window.innerWidth);
  //Signal the start button has been clicked
  startClicked = true;
  //If there is background music is playing
  if (playing == true){
    //Stop old background music
    audioBkgEl[0].pause();
    //Start new background music
    audioBkg2El[0].play();
  };

  //If background music is playing
  if (playing == true){
    //Change appearance of button to on
    audioControlEl.html('Background Music: ON');
  } else {
    //Change appearnce of button to off
    audioControlEl.html('Background Music: OFF');
  }

  //Set audio button to control other track
  musicTrack = 1;
  //Show forward button
  forwardEl.show();
  //Hide instruction buttons
  instructEl.hide();
});

//Find restart buttons
var restartEl = $('#restart');

//Scroll screen full width to the right
restartEl.click(function(){
  //Disable user scrolling
  htmlEl.removeClass('smoothScroll');
  //Scroll back to the begining of the timeline
  scrollForward(-window.innerWidth * totalFullWidthDivs);
  //If audio is playing
  if (playing == true){
    //Stop old background music
    audioBkg2El[0].pause();
    //Start new background music
    audioBkgEl[0].play();
  };
  //Set audio button to control other track
  musicTrack = 0
  //Show instructiosn
  instructEl.show();
});

//Make audio play and stop controlled by a button

//Find button controlling audio and hide it to start
var audioControlEl = $('#audioControl');
audioControlEl.hide();

//Find audio elements
var audioBkgEl = $('#background-music');
var audioBkg2El = $('#background-music2');

//Create variable to set what music is currently playing
var musicTrack = 0;

//Create variable to track if music is playing
var playing = true;

//When control button is pushed, alternate pausing/playing sound
audioControlEl.click(function(){
  //Control the bkgmusic 1 if music track == 0
  if (musicTrack == 0){
    if (audioBkgEl[0].paused){
      audioBkgEl[0].play();
      playing = true;
    } else {
      audioBkgEl[0].pause();
      playing = false;
    };
  // else control track background music 2
  } else {
    if (audioBkg2El[0].paused){
      audioBkg2El[0].play();
      playing = true;
    } else {
      audioBkg2El[0].pause();
      playing = false;
    };
  };

  //If music is playing, change appearnce of button to on
  if (playing == true){
    audioControlEl.html('Background Music: ON');
  //Else turn it off
  } else {
    audioControlEl.html('Background Music: OFF');
  }

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
