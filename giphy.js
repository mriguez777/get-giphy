
$(document).ready(function () {
  document.cookie = 'same-site-cookie=foo; SameSite=Lax';
  document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';
  /*First I need to start with an Array so that we can add to it. Then add other global variables that I need to work with
  I chose to break down the API URL so I can mess with the parameters a bit*/
  // var gipher = ["camping", "fishing", "swimming", "Smore", "marshmallow"];
  // var api = "http://api.giphy.com/v1/gifs/search?";
  // var apiKey = "api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=3";
  // var query = "&q=";
  // var search = "fluff";

  // var url = api + apiKey + query + search;
  // console.log(url);

  $("#inputForm").on("submit", function (e) {
    e.preventDefault();

    // var gipher = ["camping", "fishing", "swimming", "Smore", "marshmallow"];
    var api = "http://api.giphy.com/v1/gifs/search?";
    var apiKey = "api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=3";
    var query = "&q=";
    var search = $("input[name='giph']").val();
    var url = api + apiKey + query + search;
    console.log(url);

    $("#query").text("Results: " + search)


    $.get(url, function (output) {
      console.log(output);

      var results = output.data;
    
      for (var i = 0; i < results.length; i++) {
        var newgifDiv = $("<div>");
        var p = $("<p>").text(results[i].title);
    //     // Creating and storing an image tag
        var gifImage = $("<img>");
    //     // Setting the src attribute of the image to a property pulled off the result item
        gifImage.attr("src", results[i].images.original.url);
    //     // Appending the paragraph and image tag to the animalDiv
        newgifDiv.append(p);
        newgifDiv.prepend(gifImage);
    //     // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
        $("#giphArray").prepend(newgifDiv);
      };
    })

  });
});



//Now I am creating a for loop to grab the items in the array and create buttons for them in the "giphArray" div




/* function to make buttons and add to page
function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    for (var i = 0; i < arrayToUse.length; i++) {
      var a = $("<button>");
      a.addClass(classToAdd);
      a.attr("data-type", arrayToUse[i]);
      a.text(arrayToUse[i]);
      $(areaToAddTo).append(a);
    }

  }

  $(document).on("click", ".animal-button", function() {
    $("#animals").empty();
    $(".animal-button").removeClass("active");
    $(this).addClass("active");

    var type = $(this).attr("data-type");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var animalDiv = $("<div class=\"animal-item\">");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var animated = results[i].images.fixed_height.url;
          var still = results[i].images.fixed_height_still.url;

          var animalImage = $("<img>");
          animalImage.attr("src", still);
          animalImage.attr("data-still", still);
          animalImage.attr("data-animate", animated);
          animalImage.attr("data-state", "still");
          animalImage.addClass("animal-image");

          animalDiv.append(p);
          animalDiv.append(animalImage);

          $("#animals").append(animalDiv);
        }
      });
  });

  $(document).on("click", ".animal-image", function() {

    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

  $("#add-animal").on("click", function(event) {
    event.preventDefault();
    var newAnimal = $("input").eq(0).val();

    if (newAnimal.length > 2) {
      animals.push(newAnimal);
    }

    populateButtons(animals, "animal-button", "#animal-buttons");

  });

  populateButtons(animals, "animal-button", "#animal-buttons");
});






var giphURL = "https://api.giphy.com/v1/gifs/trending=" + gipher + "&api_key=Zd1BTpFzI7p63BgaWKqw7qhhfEMpPjis&limit=5"

$.ajax({
    url: giphURL
    method: "GET"
}).then(function(response) {
    var tBody = $("tBody");
    var tRow = $("<tr>");

    var giphTitle = $("<td>").text(response.Title);
    var giphRating = $("<td>").text(response.Rating)
    var giphTD = $("<td>").text(response.giphTD)

    tRow.append(giphTitle, giphRating, giphTD);

    tBody.append(tRow);
});*/