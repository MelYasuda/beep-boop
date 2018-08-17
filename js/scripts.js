// Business logic
var beepBoop = function(numberInput){
  if (isNaN(numberInput) || isNaN(numberInput)) {
    alert("put a number");
  } else if (numberInput < 0 || numberInput < 0){
    alert("put a positive number");
  }

  var numbers = [];
  for (var i = 0; i <= numberInput; i += 1) {
    numbers.push(i.toString(), " <br>");
   }

   numbers.forEach(function(number){
     if (number==="0") {
      numbers.splice(numbers.indexOf(number), 1, "Beep");
     } else if (parseInt(number) % 3 === 0) {
      numbers.splice(numbers.indexOf(number), 1, "I'm sorry, Dave. I'm afraid I can't do that.");
      } else if (number.includes("1")) {
      numbers.splice(numbers.indexOf(number), 1, "Boop");
      } else if (number.includes("0")) {
      numbers.splice(numbers.indexOf(number), 1, "Beep");
      }
   });

   return numbers;
}


// User interface
$(document).ready(function(){
  $("form#numberinput").submit(function(event){
    event.preventDefault();
    result = "";
    var numberInput = parseInt($("#number").val());
    var result = beepBoop(numberInput);
      $("#result").text(" ");
      $("#result").append(result);
  });
});
