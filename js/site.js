/*
 * Group 14
 * JS for site buttons and other miscellaneous events
*/

//Function scrolls page forward 1 viewport
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollX
function scrollForward(width) {
  window.scrollBy(width, 0);
  //alert("pageXOffset: "  + ", scrollY: " + window.scrollY);
}

//Total number of full length divs - 1
var totalFullWidthDivs = 10-1;

//Find Start Button
var startButtonEl = $('#start');
// console.log(startButtonEl);

//Find body
var bodyEl = $('body');
// console.log(bodyEl);

//Find html
var htmlEl = $('html');
console.log(htmlEl);

//Scroll screen full width to the right on start button click
startButtonEl.click(function(){
  // console.log('Button clicked')
  htmlEl.addClass('smoothScroll');
  bodyEl.removeClass('stopHorizonatalScroll');
  scrollForward(window.innerWidth);
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

$("body").on( 'scroll', function(){
   console.log($('body').prop('scrollTop'))
});
//Everytime it is scrolled
//If not on last page
  //Show right scrolling button
//else hide the scrolling button

//Or increment variable everytime scrolled and when it's a certain length disappear buttons
