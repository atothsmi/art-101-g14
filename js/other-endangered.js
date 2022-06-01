/*
 * Contains API Call to US Fish and Wildlife Service of Endangered/Threatened species, Places Associated Information on Page
 */

 //Define Endpoint
 var endpoint = "https://ecos.fws.gov/ecp/pullreports/catalog/species/report/species/export?format=json&distinct=true&columns=%2Fspecies%40cn%2Csn%2Cstatus%2Clisting_date&sort=%2Fspecies%40cn%20asc%3B%2Fspecies%40sn%20asc&filter=%2Fspecies%40dps%20%3D%20true&filter=%2Fspecies%40status%20%3D%20'Endangered'"

 //Current number of max comics
 //Function to retrieve and place info from API
 function getAndPutData(endpoint) {
   $.ajax({
     // The URL for the request (from the api docs)
     url: endpoint,
     // Whether this is a POST or GET request
     type: "GET",
     //Data Given to API
     data: {
       taxonid: 100
     },
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
         // Get information from JSON object
         console.log(data.data);
         //Set Current Animal to 0;
         var currentAnimal = 0;
         var windowHeight = window.innerHeight;
         for (animal of data.data){
           //Construct Div to display data from API
           var display = '<div class="currently-endangered" id='+ currentAnimal + '>';
           //Add link to website with more info to animal Name
           display += '<a href="' + animal[1].url +'" target="_blank">' + animal[0] + '</a>'
           //Add endangered status
           display += '<p>Status: ' + animal[2] + '</p>'
           $('#call-to-action').append(display);

           //Set Random Distance from right side of screen
           var randomWidth = Math.floor(Math.random() * (window.innerWidth - 200));
           //Set Random Distance from the top of the screen
           var randomHeight = Math.floor(Math.random() * (windowHeight - 200))
           //Place div random distance in containing div
           $('#' + currentAnimal).css('top', randomHeight);
           $('#' + currentAnimal).css('right', randomWidth);
           currentAnimal +=1
         }
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // Error Message
         console.log("Error:", textStatus, errorThrown);
         $('#call-to-action').append("API Didn't Load");
     }
 })
 }

//Find Question Element
var questionEl = $('#question');

//On click, summon info from api
questionEl.click(function(){
   getAndPutData(endpoint);
});
