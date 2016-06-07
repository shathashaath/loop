$(document).ready(function() {
  $("form#content").submit(function(event) {

    var friendNames = ["name1", "name2", "name3", "name4", "name5"];

    for (var i=0;i<friendNames.length;i++){
      var userInput = $("input#" + friendNames[i]).val();
      $("#" + friendNames[i] + "result").text(userInput);
      alert("Hello " + userInput);
    }




    $("#results").show();

    event.preventDefault();
  });
});


// var numbers=[1,2,3,4,5]
// var multiplyNumbers=[];
// numbers.forEach(function(number){
//   multiplyNumbers.push (number*5);
//
// });
