/*
 * Group 14
 * JS for placing information on the website
*/

//Define array of all animal info
var animalInfo = [
  {when:'1650 B.C.',
    why:'Climate change and hunting ',
    name:'Woolly Mammoth - Mammuthus primigenius',
    habitat:'Tundra of Europe, Asia, and North America',
    img: '<img src="img/irl/mammoth.jpg">'
  },
  {when:'1768',
    why:'Climate change and overhunting by humans',
    name:'Stellers Sea Cow',
    habitat:'Aleutians and the Kamchatka Penninula',
    img: '<img src="img/irl/walrus.jpg">'
  },
  {when:'1883',
    why:'Overhunted to preserve feed for domesticated animals and for their hides',
    name:'Quagga',
    habitat:' South Africa, grasslands/savannas',
    img: '<img src="img/irl/zebra.jpg">'
  },
  {when:'1894',
    why:'Overhunted for its fur by European settlers',
    name:'Sea Mink',
    habitat:'Atlantic Coast of North America, Massachusetts to Nova  Scotia, rocky coasts/off-shore islands',
    img: '<img src="img/irl/otter.jpg">'
  },
  {when:'1936',
    why:'Considered a threat to livestock and a danger to people',
    name:'Tasmanian Tiger',
    habitat:' Australian Mainland/ wetlands/  grasslands/ dry eucalyptus'
  },
  {when:'1970',
    why:'Habitat modifications and the introduction of non-native species',
    name:'Tecopa Pupfish',
    habitat:'Tecopa Hot Springs in California'
  },
  {when:'1980',
    why:'Poaching, habitat destruction and loss of prey',
    name:'Javan Tiger',
    habitat:'Indonisia'
  },
  {when:'2011',
    why:'Poaching and farmers defending their crops',
    name:'West African Black Rhinoceros',
    habitat:'savannahs and dry forests'
  }
]

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
    //console.log(detailsEls[i]);
    //Append the correct information
    detailsEls[i].append(animalInfo[i][category]);
  }
}
