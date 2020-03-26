$(document).ready(function(evt) {
  var btn = document.getElementsByClassName("entypo-menu")[0];
  btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    var temp = $(".mobile-nav").css("display");
    console.log(temp);
    if (temp == "block") {
      console.log("changin to none");
      $(".mobile-nav").css("display", "none");
    } else if (temp == "none") {
      console.log("changin to block");
      $(".mobile-nav").css("display", "block");
    }
  });
});
