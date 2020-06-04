$(document).ready(function() {
  $("form#voterAge").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val())

if (age >= 18) {
  $("#adult").show();
} else if ( age < 18) {
  $("#minor").show();
} 
  });
});