$(document).ready(function() {
  $("form#content").submit(function(event) {

    var friendNames = ["name1", "name2", "name3", "name4", "name5"];

    friendNames.forEach(function(friendName) {
      var userInput = $("input#" + friendName).val();
      $("#" + friendName + "result").text(userInput);
      alert("Hello " + userInput);
    });


    $("#results").show();

    event.preventDefault();
  });
});
