var giphy = ("https://api.giphy.com/v1/gifs/trending?api_key=Zd1BTpFzI7p63BgaWKqw7qhhfEMpPjis&limit=10&rating=G");

$.ajax({
  url: giphy,
  method: "GET"
}).then(function (response) {
  console.log(response.data);
});

//Creating an Array or stings:
var strings = ["love", "cheese", "pizza", "virus"]

//creating a loop that will create a button for each
for (var i = 0; i < strings.length; i++)
  //creating button 
  var newButtonDiv = $("<button>");


