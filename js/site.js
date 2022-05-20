//Find Start Button
var startButtonEl = $('#start');
console.log(startButtonEl);

//Find body
var bodyEl = $('body');
console.log(bodyEl);

//Find Begining of Slideshow
var startEl = $('#first-slide');
console.log(startEl);

//Scroll screen full width to the right
startButtonEl.click(function(){
  console.log('Button clicked')
  bodyEl.removeClass('stopHorizonatalScroll');
});

//Find Mammoth Element
var mammothEl = $('#mammoth');

//On when mammoth is clicked, do something
mammothEl.click(function(){
  console.log('Button clicked')
  //Show a div that is already there
});
