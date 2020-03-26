$(document).ready(function() {
  
  $("form").submit(function(event) {
    event.preventDefault();
    var height = $("#height").val();
    console.log(height);

    if (height === "under5") {
      $("#over5under7").hide();
      $("#over5under7").hide();
      $("#under5").show();
    } else if (height === "over5under7") {
      $("#under5").hide();
      $("#over7").hide();
      $("#over5under7").show();
    } else if (height === "over7") {
      $("#under5").hide(); 
      $("#over5under7").hide();
      $("#over7").show();
    };
  });
});

// var height = parseInt(prompt("What is your height in feet?"));

// if (height >= 7) {
//   $("#over7").show();
// } else if (height >= 5) {
//   $("#over5under7").show();
// } else if (height < 5) {
//   $("#under5").show();
// } else {
//   console.log("Unexpected input?")
// }
