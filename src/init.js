$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var top = 40 * Math.random();
    var left = $("body").width() * Math.random();
    var dancer = new dancerMakerFunction(
      top,
      left,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


  // Line Up dancers

  $(".lineUpDancers").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }

  });

  // Bust a move
  $(".bustMoves").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].bustMoves();
    }

  });
});

