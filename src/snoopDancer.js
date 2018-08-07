var makeSnoopDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeSnoopDancer.prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src=./snoopDancer.gif>');


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeSnoopDancer.prototype = Object.create(makeDancer.prototype);
makeSnoopDancer.prototype.constructor = makeSnoopDancer;


makeSnoopDancer.prototype.oldStep = makeDancer.prototype.step;

makeSnoopDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.addClass('animated');
};

makeSnoopDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left);
};

