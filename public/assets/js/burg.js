$(document).ready(function() {
  // update devour value
  $(".devour").on("click", function (event) {
    var id = $(this).data("id");
  
    var eatenState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenState
    }).then(function () {
      console.log("changed eat to: true");
      location.reload();
    });
  });

  $("#submit").on("click", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim()
    }

    $.post("api/burgers/", newBurger, function () {
      console.log("created new burger");
      location.reload();
    });
  });



});