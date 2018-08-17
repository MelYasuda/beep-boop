$(document).ready(function(){
  $("form#numberinput").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("#number").val());
    var result = 1;
    for (var index = numberInput; index >= 1; index -= 1 ) {
      result*=index;
      }
      $("#result").append(" " + result);
  });
});
