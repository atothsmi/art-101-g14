//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollX
function scrollX(width) {
  window.scrollBy(width, 0);
  alert("pageXOffset: " + window.scrollX + ", scrollY: " + window.scrollY);
}

//Find Start Button
var startButtonEl = $('#start');
console.log(startButtonEl);

//Find body
var bodyEl = $('body');
console.log(bodyEl);

//Find Begining of Slideshow
var startEl = $('#first-slide');
console.log(startEl);

//Find all of the divs inside of container
var animalDivEls = $('.animal-div');
console.log(animalDivEls)

//Scroll screen full width to the right
startButtonEl.click(function(){
  console.log('Button clicked')
  bodyEl.removeClass('stopHorizonatalScroll');
  scrollX(window.innerWidth);
});

//Give each of the divs a timeline line
animalDivEls.append("<div class= 'timeline'>");

for (var i = 0; i < animalDivEls.length; i++){
  console.log(animalDivEls[i]);
}
