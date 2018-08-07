var makeSteveDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeSteveDancer.prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src=./steveDancer.gif>');


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeSteveDancer.prototype = Object.create(makeDancer.prototype);
makeSteveDancer.prototype.constructor = makeSteveDancer;


makeSteveDancer.prototype.oldStep = makeDancer.prototype.step;

makeSteveDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};

makeSteveDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left);
};

makeSteveDancer.prototype.interact = function() {

  this.$node.animate({
    opacity: 0.5
  }, 500);

};