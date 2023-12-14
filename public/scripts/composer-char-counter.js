$(document).ready(() => {
  $("#tweet-text").on("input", function() {
    const maxCount = 140;
    const parentElement = $(this).parent();
    const counterElement = parentElement.children().children().get(1);
    
    let inputLength = $(this).val().length;

    $(counterElement).val(maxCount - inputLength);

    // grab text after length of input is subtracted from maxCount
    let counter = Number($(counterElement).text());

    if (counter < 0) {
      $(counterElement).addClass("red");
    } else {
      $(counterElement).removeClass("red");
    }
  });
});