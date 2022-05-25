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
    forwardEl.hide();
    timesAdvanced = 0;
  }

});

//Scroll screen full width to the right on start button click
startButtonEl.click(function(){
  // console.log('Button clicked')
  htmlEl.addClass('smoothScroll');
  bodyEl.removeClass('stopHorizonatalScroll');
  scrollForward(window.innerWidth);
  forwardEl.show();
});

//Find restart buttons
var restartEl = $('#restart');
// console.log(bodyEl);

//Scroll screen full width to the right
restartEl.click(function(){
  // console.log('Button clicked')
  htmlEl.removeClass('smoothScroll');
  scrollForward(-window.innerWidth * totalFullWidthDivs)
});
