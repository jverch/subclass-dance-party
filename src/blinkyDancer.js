var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(makeBlinkyDancer.prototype);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img src=./leftShark.gif>');


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
  // this.$node.removeClass('animated wobble');
  // this.$node.addClass('animated wobble');
};

makeBlinkyDancer.prototype.lineUp = function(top, left) {
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
};

makeBlinkyDancer.prototype.interact = function() {
  // if (this.$node.hasClass('animated')) {
  //   this.$node.toggleClass('animated rubberBand');
  // }
  //this.$node.toggleClass('animated rubberBand');
  // this.$node.addClass("animated wobble")
  this.$node.fadeToggle(500);

};


