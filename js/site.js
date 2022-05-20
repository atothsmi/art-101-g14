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
