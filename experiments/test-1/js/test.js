var animalInfo = [
  {when:'1650 B.C',why:'Climate change and hunting ', name:'Woolly Mammoth - Mammuthus primigenius', habitat:'Tundra of Europe, Asia, and North America'},
  {when:'1627',why:'habitat loss and hunting', name:'Aurochs', habitat:'northern africa, europe, and some parts of asia'},
  {when:'1768',why:'combination of climate change and overhunting by humans', name:'Stellers Sea Cow', habitat:'Aleutians and the Kamchatka Penninula'},
  {when:'1883',why:'Hunted to Extinction to preserve feed for domesticated animals and for their hides', name:'Quagga', habitat:' South Africa, grasslands and savannas'},
  {when:'1894',why:'Hunting pressure for its fur by European settlers', name:'Sea Mink', habitat:'Atlantic Coast of North America, Massachusetts to Nova  Scotia, rocky coasts or off-shore islands'},
  {when:'1936',why:'considered a threat to livestock and a danger to people', name:'Tasmanian Tiger', habitat:' Australian Mainland/ wetlands/  grasslands/ dry eucalyptus'},
  {when:'1970',why:'habitat modifications and the introduction of non-native species', name:'Tecopa Pupfish', habitat:'Tecopa Hot Springs in California'},
  {when:'1980',why:'poaching and habitat destruction and loss of prey', name:'Javan Tiger', habitat:'Indonisia'},
  {when:'2011',why:'poaching & farmers defending their crops', name:'West African Black Rhinoceros', habitat:'savannahs and dry forests'}
]

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollX
function scrollX(width) {
  window.scrollBy(width, 0);
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

//Give each of the divs a timeline line and date holder
animalDivEls.append("<div class= 'timeline'><div class='dates'><p></p><div class='line-to-date'>");

//Find each of the date holders
var datesEls = $('.dates>p');

//Place info into animal dates holders
for (var i = 0; i < datesEls.length; i++){
  console.log(animalInfo[i].when)
  datesEls[i].append(animalInfo[i].when);
}

var categories = ['name', 'habitat', 'when', 'why']

for (var i = 0; i < 1; i++){
  for (category of categories){
    console.log(category);
    var detailEl = $('.details-example .' + category);
    console.log(detailEl);
    detailEl.append(animalInfo[i][category]);
  };
};

//Find mammoth details else
var detailsEls = $('.details-example');

//Find mammoth image
var mammothEl = $('#mammoth');

//on click, reveal the box with Information
mammothEl.click(function(){
  detailsEls.toggleClass('hidden')
});


//Everytime it is scrolled
//If not on last page
  //Show right scrolling button
//else hide the scrolling button

//Or increment variable everytime scrolled and when it's a certain length disappear buttons
