var makeFlipDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeFlipDancer.prototype);
  
  makeDancer.call(this, top, left, timeBetweenSteps);


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeFlipDancer.prototype = Object.create(makeDancer.prototype);
makeFlipDancer.prototype.constructor = makeFlipDancer;


makeFlipDancer.prototype.oldStep = makeDancer.prototype.step;

makeFlipDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  this.oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.addClass('animated');
};



