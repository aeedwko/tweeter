/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {

  // GET request for all 
  const loadTweets = () => {
    $.get("/tweets", (data) => {
      console.log(data);
      renderTweets(data);
    })
  }

  loadTweets();

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

  $("form").on("submit", function(event) {
    event.preventDefault();
    
    $.post("/tweets", $(this).serialize());
  });
});

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    console.log(tweet);
    let $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  }
};

const createTweetElement = function(data) {
  return $(
    `<article class="tweet">
  <header>
    <div>
      <img src="${data.user.avatars}">
      <span>${data.user.name}</span>
    </div>          
    <span>${data.user.handle}</span>
  </header>
  <article>${data.content.text}</article>
  <footer>
    <span>${data.created_at}</span>
    <div>
      <a href=""><i class="fa-solid fa-flag"></i></a>
      <a href=""><i class="fa-solid fa-retweet"></i></a>
      <a href=""><i class="fa-solid fa-heart"></i></a>
    </div>
  </footer>
  </article>  
`);
};