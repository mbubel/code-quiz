var correct = "Correct!";
var incorrect = "Incorrect!";

// Timer - Credit: "https://stackoverflow.com/questions/41035992/jquery-countdown-timer-for-minutes-and-seconds/46380899"
var timeoutHandle;

  function countdown(minutes, seconds) {
    var seconds = 60;
    var mins = minutes

    function tick() {
      var counter = document.getElementById("Timer");
      var current_minutes = mins - 1
      seconds--;
      counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        timeoutHandle = setTimeout(tick, 1000);
      } else {

        if (mins > 1) {

          // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
          setTimeout(function() {
            countdown(mins - 1);
          }, 1000);

        }
      }
    }
    tick();
  }

  countdown(2);


// Question 1 click events
$(document).ready(function () {
  // Correct response when clicked
  $("#Answer1").on("click", function () {
    $("#user1").text(correct);
  });
  // Incorrect response when clicked
  $("#Answer2").on("click", function () {
    $("#user1").text(incorrect);
  });
  // Incorrect response when clicked
  $("#Answer3").on("click", function () {
    $("#user1").text(incorrect);
  });
  // Incorrect response when clicked
  $("#Answer4").on("click", function () {
    $("#user1").text(incorrect);
  });
});

// Hiding question 2
$("#QuestionTwo").hide();{

};
// Show question 2 on click
$(".buttonQ1").on("click", function(){
  $("#QuestionTwo").show();
});
// Hide Question 1 on click
$(".buttonQ1").on("click", function(){
  $("#QuestionOne").hide();
});



//Question 2 click events
$(document).ready(function () {
  // Incorrect response when clicked
  $("#Answer5").on("click", function () {
    $("#user2").text(incorrect);
  });
  // Incorrect response when clicked
  $("#Answer6").on("click", function () {
    $("#user2").text(incorrect);
  });
  // Correct response when clicked
  $("#Answer7").on("click", function () {
    $("#user2").text(correct);
  });
  // Incorrect response when clicked
  $("#Answer8").on("click", function () {
    $("#user2").text(incorrect);
  });
});

// Hiding question 3
$("#QuestionThree").hide();{

};

// Show question 3 on click
$(".buttonQ2").on("click", function(){
  $("#QuestionThree").show();
});

// Hide Question 2 on click
$(".buttonQ2").on("click", function(){
  $("#QuestionTwo").hide();
});



//Question 3 click events
$(document).ready(function () {
  // Incorrect response when clicked
  $("#Answer9").on("click", function () {
    $("#user3").text(incorrect);
  });
  // Incorrect response when clicked
  $("#Answer10").on("click", function () {
    $("#user3").text(incorrect);
  });
  // Incorrect response when clicked
  $("#Answer11").on("click", function () {
    $("#user3").text(incorrect);
  });
  // Correct response when clicked
  $("#Answer12").on("click", function () {
    $("#user3").text(correct);
  });
});

// Hiding question 4
$("#QuestionFour").hide();{

};

// Show question 4 on click
$(".buttonQ3").on("click", function(){
  $("#QuestionFour").show();
});

// Hide Question 3 on click
$(".buttonQ3").on("click", function(){
  $("#QuestionThree").hide();
});


//Question 4 click events
$(document).ready(function () {
  // Incorrect response when clicked
  $("#Answer13").on("click", function () {
    $("#user4").text(incorrect);
  });
  // Incorrect response when clicked
  $("#Answer14").on("click", function () {
    $("#user4").text(incorrect);
  });
  // Correct response when clicked
  $("#Answer15").on("click", function () {
    $("#user4").text(correct);
  });
  // Incorrect response when clicked
  $("#Answer16").on("click", function () {
    $("#user4").text(incorrect);
  });
});

// Hiding question 5
$("#QuestionFive").hide();{

};

// Show question 5 on click
$(".buttonQ4").on("click", function(){
  $("#QuestionFive").show();
});
// Hide Question 4 on click
$(".buttonQ4").on("click", function(){
  $("#QuestionFour").hide();
});


//Question 5 click events
$(document).ready(function () {
  // Incorrect response when clicked
  $("#Answer17").on("click", function () {
    $("#user5").text(incorrect);
  });
  // Correct response when clicked
  $("#Answer18").on("click", function () {
    $("#user5").text(correct);
  });
  // Incorrect response when clicked
  $("#Answer19").on("click", function () {
    $("#user5").text(incorrect);
  });
  // Incorrect response when clicked
  $("#Answer20").on("click", function () {
    $("#user5").text(incorrect);
  });

  // Hide Question 5 on click
$(".buttonQ5").on("click", function(){
  $("#QuestionFive").hide();
});
});
