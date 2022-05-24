/*
 * Group 14
 * JS for all functions of index.html site
*/

//Define array of all animal info
var animalInfo = [
  {when:'1650 B.C',
    why:'Climate change and hunting ',
    name:'Woolly Mammoth - Mammuthus primigenius',
    habitat:'Tundra of Europe, Asia, and North America'},
  {when:'1768',
    why:'combination of climate change and overhunting by humans',
    name:'Stellers Sea Cow',
    habitat:'Aleutians and the Kamchatka Penninula'},
  {when:'1883',
    why:'Hunted to Extinction to preserve feed for domesticated animals and for their hides',
    name:'Quagga',
    habitat:' South Africa, grasslands/savannas'},
  {when:'1894',
    why:'Hunting pressure for its fur by European settlers',
    name:'Sea Mink',
    habitat:'Atlantic Coast of North America, Massachusetts to Nova  Scotia, rocky coasts/off-shore islands'},
  {when:'1936',
    why:'considered a threat to livestock and a danger to people',
    name:'Tasmanian Tiger',
    habitat:' Australian Mainland/ wetlands/  grasslands/ dry eucalyptus'},
  {when:'1970',
    why:'habitat modifications and the introduction of non-native species',
    name:'Tecopa Pupfish',
    habitat:'Tecopa Hot Springs in California'},
  {when:'1980',
    why:'poaching and habitat destruction and loss of prey',
    name:'Javan Tiger',
    habitat:'Indonisia'},
  {when:'2011',
    why:'poaching & farmers defending their crops',
    name:'West African Black Rhinoceros',
    habitat:'savannahs and dry forests'}
]

//Function scrolls page forward 1 viewport
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollX
function scrollX(width) {
  window.scrollBy(width, 0);
  // alert("pageXOffset: " + window.scrollX + ", scrollY: " + window.scrollY);
}

//Find Start Button
var startButtonEl = $('#start');
// console.log(startButtonEl);

//Find body
var bodyEl = $('body');
// console.log(bodyEl);

//Scroll screen full width to the right
startButtonEl.click(function(){
  // console.log('Button clicked')
  bodyEl.removeClass('stopHorizonatalScroll');
  scrollX(window.innerWidth);
});

/*Place timeline about extinctions*/

//Find all of the divs inside of container
var animalDivEls = $('.animal-div');
// console.log(animalDivEls)

//Give each of the divs a timeline line and date holder
animalDivEls.append("<div class= 'timeline'><div class='dates'><p></p><div class='line-to-date'>");

//Find each of the date holders
var datesEls = $('.dates>p');

//Place info into animal dates holders
for (var i = 0; i < datesEls.length; i++){
  // console.log(animalInfo[i].when)
  datesEls[i].append(animalInfo[i].when);
}


/*Place information about extinctions*/

//Create list of all of the category names
var categories = ['name', 'habitat', 'when', 'why'];

//For every category of info
for (category of categories){

  //Find correct divs
  var detailsEls = $('.details .' + category);

  //For every corresponding animal
  for (var i=0; i < detailsEls.length; i++){
    console.log(detailsEls[i]);
    //Append the correct information
    detailsEls[i].append(animalInfo[i][category]);
  }
}

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
