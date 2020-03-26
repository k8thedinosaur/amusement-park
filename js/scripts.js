$(document).ready(function() {
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

  $("#submit").submit(function() {
    event.preventDefault();
    var height = $("select#height").val();
    console.log(height);
    
    // if (height === "#under5") {
    //   $("#under5").show();
    // } else if (height === "#over5under7") {
    //   $("#over5under7").show();
    // } else if (height === "#over7") {
    //   $("#over7").show();
    // }
  });
});