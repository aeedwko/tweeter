/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  // add/remove box shadow when hovered on tweet
  $(".tweet").on("mouseenter", function() {
    $(this).addClass("hovered-tweet");
  }).on("mouseleave", function() {
    $(this).removeClass("hovered-tweet");
  });

  // change colour of icon when hovered 
  $(".tweet i").on("mouseenter", function() {
    $(this).addClass("hovered-icon");
  }).on("mouseleave", function() {
    $(this).removeClass("hovered-icon");
  });
});


