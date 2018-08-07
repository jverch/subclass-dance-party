describe('steveDancer', function() {

  var steveDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    steveDancer = new makeSteveDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(steveDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a lineup function', function() {
    expect(steveDancer.lineUp).to.exist
  });

  it('should have an interact function', function() {
    expect(steveDancer.interact).to.exist
  });


  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(steveDancer, 'step');
      expect(steveDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(steveDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(steveDancer.step.callCount).to.be.equal(2);
    });
  });
});
