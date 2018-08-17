// Business logic

var beepBoop = function(numberInput){
  console.log(typeof numberInput)
  if (isNaN(numberInput) || isNaN(numberInput)) {
    alert("put a number");
  } else if (numberInput < 0 || numberInput < 0){
    alert("put a positive number");
  } else if (numberInput.includes("0")) {
    alert("Beep");
  }
}



// for (var index = numberInput; index >= 1; index -= 1 ) {
//   result*=index;
//   }

// User interface
$(document).ready(function(){
  $("form#numberinput").submit(function(event){
    event.preventDefault();
    var numberInput = $("#number").val();
    var result = beepBoop(numberInput);
      $("#result").append(result);
  });
});
