/*
 * Accessing More Complicated JSON and APIs
 * Author: Alia Toth-Smith
 * Date: 5/26/2022
 */

//Define Endpoint
var endpoint = 'http://apps.des.qld.gov.au/species/?op=getspeciesbyid'

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
        console.log(data);
        console.log(data.Species.ConservationStatus.ConservationSignificant);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // Error Message
        console.log("Error:", textStatus, errorThrown);
        $('#output').html("Comic Not Found");
    }
})
}

getAndPutData(endpoint);
