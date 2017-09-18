$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var groceries = ["item1", "item2", "item3"];

    groceries.forEach(function(grocery) {
      var userInput = $("input#" + grocery).val();
      $("ul#grocerylist").append("<li>" +userInput+ "</li>");
      $("li#1").text(grocery);

    });

    event.preventDefault();
  });
});
