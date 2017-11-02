$(document).ready(function() {
  var list = []

  $("form#FavoriteForm").submit(function(event) {
    event.preventDefault();
    var color = $("#color").val()
    var food = $("#food").val()
    var animal = $("#animal").val()
    list.push(color)
    list.push(food)
    list.push(animal)

    $("#item1").append(list[0])
    $("#item2").append(list[1])
    $("#item3").append(list[2])

    $(".result").show() 

  });

});
