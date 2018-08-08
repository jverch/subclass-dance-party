$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() * 0.85,
      $('body').width() * Math.random() * 0.9,
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    var startPosition = -20;
    var increment = $('body').width() / window.dancers.length;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp($('body').height() * .4, startPosition);
      startPosition += increment;
    }
  });

  $('body').on('mouseover', 'div.dancer', function() {
    // This refers to the dancer div
    var closestDancer;
    var secondClosestDancer;
    var currentDancer = $(this);

    console.log('dancers first: ', window.dancers);

    var currTopPos = Math.floor(currentDancer.position().top);
    var currLeftPos = Math.floor(currentDancer.position().left);

    var shortestDistance = 0;
    var secondShortestDistance = 0;

    //   var distanceCheck = Math.sqrt(Math.pow(currLeftPos - Math.floor(window.dancers[i].left), 2) + 
    //   Math.pow(currTopPos - Math.floor(window.dancers[i].top), 2))

    var compare = function(dancer1, dancer2) {
      var dancer1Distance = Math.sqrt(Math.pow(currLeftPos - Math.floor(dancer1.left), 2) + 
        Math.pow(currTopPos - Math.floor(dancer1.top), 2));
      var dancer2Distance = Math.sqrt(Math.pow(currLeftPos - Math.floor(dancer2.left), 2) + 
        Math.pow(currTopPos - Math.floor(dancer2.top), 2));

      if (dancer1Distance < dancer2Distance) {
        return -1;
      }
      if (dancer1Distance > dancer2Distance) {
        return 1;
      }
      return 0;
    }

    window.dancers.sort(compare);
    // console.log('dancers second: ', window.dancers);

    // for (var i = 0; i < window.dancers.length; i++) {
    //   var distanceCheck = Math.sqrt(Math.pow(currLeftPos - Math.floor(window.dancers[i].left), 2) + 
    //   Math.pow(currTopPos - Math.floor(window.dancers[i].top), 2))

    //   if (shortestDistance === 0) {
    //     shortestDistance = distanceCheck;
    //     closestDancer = window.dancers[i];
    //   } else if (distanceCheck < shortestDistance && distanceCheck !== 0) {
    //     shortestDistance = distanceCheck;
    //     closestDancer = window.dancers[i];
    //   }
    // }

    
    // currentDancer.interact()
    if (window.dancers[1] !== undefined) {
      window.dancers[1].interact();
    }

    if (window.dancers[2] !== undefined) {
      window.dancers[2].interact();
    }
  });
});

