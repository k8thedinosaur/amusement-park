// $(document).ready(function() {
//   var age = parseInt(prompt("How old are you?"));
 
//   if (age > 21) {
//     $("#drinks").show();
//   } else if (age === 21) {
//     alert("Happy birthyear! Go crazy!");
//     $("#drinks").show();
//   } else {
//     $("#under-21").show();
//   }
// });

$(document).ready(function() {
  var height = parseInt(prompt("What is your height in feet?"));

  if (height < 5) {
    $("#under5").show();
  } else if (height <= 5) {
    $("#over5under7").show();
  } else if (height >= 7) {
    $("#over7").show();
  } else {
    console.log("Unexpected input?")
  }
})