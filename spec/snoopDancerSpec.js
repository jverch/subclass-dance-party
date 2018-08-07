describe('snoopDancer', function() {

  var snoopDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    snoopDancer = new makeSnoopDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(snoopDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(snoopDancer.$node, 'toggle');
    snoopDancer.step();
    expect(snoopDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(snoopDancer, 'step');
      expect(snoopDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(snoopDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(snoopDancer.step.callCount).to.be.equal(2);
    });
  });
});
