$(document).ready(function() {
  $("form#voterAge").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val())
    console.log(age);
  });
});