/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  
  renderTweets(data);

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

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    console.log(tweet);
    let $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  }
};
