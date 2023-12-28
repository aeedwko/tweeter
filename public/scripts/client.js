/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {

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
      <span>${timeago.format(data.created_at)}</span>
      <div>
        <a href=""><i class="fa-solid fa-flag"></i></a>
        <a href=""><i class="fa-solid fa-retweet"></i></a>
        <a href=""><i class="fa-solid fa-heart"></i></a>
      </div>
    </footer>
    </article>  
  `);
  };

  const renderTweets = function(tweets) {
    $("#tweets-container").empty(); 

    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  };
  
  // GET request for all 
  const loadTweets = () => {
    $.get("/tweets", (data) => {
      renderTweets(data);
    })
  }

  loadTweets();

  // listen for post tweet to server on submit
  $("form").on("submit", function(event) {
    event.preventDefault();
    
    const tweet = $("form #tweet-text").val();

    if (tweet.length > 140) {
      alert("The tweet exceeds the 140 character limit.");
    } else if (tweet.length === 0) {
      alert("The tweet area is empty.")
    } else {
      $.post("/tweets", $(this).serialize(), () => {
        $("#tweet-text").val("");
        loadTweets();
      }); 
    }
  });

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