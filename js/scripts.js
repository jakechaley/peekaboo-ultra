$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#show-image").toggle();
    $("#hide-image").toggle();

  });

    //end walrus start color 

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button.dark-mode, button.light-mode").click(function() {
    $("button.light-mode").toggleClass("hidden")
    $("button.dark-mode").toggleClass("hidden")
    $("body").toggleClass("dark-mode")

  })

  $("p.highlight-target").click(function() {
    $("p.highlight-target").toggleClass("highlight")

  })


  




});

