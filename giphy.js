


/* 
I really disected this and built it piece by piece with numerous example reviews. 
I did get:
-the data to pull from the input button
-giphs to display from the input received
-buttons to generate for each search and with a predefined list

Missing:
-functionality to click on each "pre-defined" button and see the giphs displayed as well as the newly created ones. For now they are just show as I am trying to manage time. 
*/

$(document).ready(function () {
  document.cookie = 'same-site-cookie=foo; SameSite=Lax';
  document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
  /*First I need to start with an Array so that we can add to it. Then add other global variables that I need to work with
  I chose to break down the API URL so I can mess with the parameters a bit*/
  var gipher = ["camping", "fishing", "swimming", "Smore", "marshmallow"];

  for (var i = 0; i < gipher.length; i++) {
    var creatingButtons = $('<button class="btn btn-success">');
    creatingButtons.text(gipher[i]);
    $("#giphButtons").append(creatingButtons)
  }
  ;


  $("#inputForm").on("submit", function (e) {
    e.preventDefault();

    var api = "http://api.giphy.com/v1/gifs/search?";
    var apiKey = "api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=3";
    var query = "&q=";
    var search = $("input[name='giph']").val();
    var url = api + apiKey + query + search;
    // console.log(url);

    $("#query").text("Results: " + search)



    $.get(url, function (output) {
      // console.log(output);
      var results = output.data;

      for (var i = 0; i < results.length; i++) {
        var newgifDiv = $("<div>");
        var p = $("<p>").text(results[i].title);
        var gifImage = $("<img>");

        gifImage.attr("src", results[i].images.original.url);
        newgifDiv.append(p);
        newgifDiv.prepend(gifImage);
        $("#giphArray").prepend(newgifDiv);

      };
    }).then(function () {
      var buttonGiph = $('<button class="btn btn-success">');
      var data = $(buttonGiph).text(search)
        $("#giphButtons").append(buttonGiph)

    })

  });
});


