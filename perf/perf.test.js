describe('flux-interactive-perf', function() {
  before(function(done) {
    var self = this;
    require([
      'flux-interactive-perf',
      'flux-print'
    ], function(interactivePerfCreator, print) {
      self.interactivePerfCreator = interactivePerfCreator;
      self.print = print;
      done();
    });
  });

  beforeEach(function() {
    this.performanceSpy = sinon.stub(window.performance, 'now');
    this.logSpy = sinon.spy(this.print, 'log');
    this.debugSpy = sinon.spy(this.print, 'debug');
  });

  afterEach(function() {
    this.performanceSpy.restore();
    this.logSpy.restore();
    this.debugSpy.restore();
  });

  describe('interactivePerfCreator', function() {
    it('should be able to create independent interactivePerfs', function() {
      var interactivePerf1 = this.interactivePerfCreator();
      var interactivePerf2 = this.interactivePerfCreator();

      interactivePerf1.startRecording();

      this.performanceSpy.returns(0);
      interactivePerf1.begin();

      this.performanceSpy.returns(500);
      interactivePerf1.end();
      interactivePerf1.begin();
      interactivePerf2.begin();

      this.performanceSpy.returns(1000);
      interactivePerf1.end();
      interactivePerf2.end('INTERACTIVE PERF 2');

      interactivePerf1.stopRecording();

      expect(this.logSpy).to.have.been.calledWith('Average duration: 500 ms');
      expect(this.logSpy).to.have.been.calledWith('Average FPS: 2.00');
      expect(this.logSpy).to.have.been.calledWith('Number of samples: 2');
      expect(this.logSpy).to.have.been.calledWith('INTERACTIVE PERF 2: 500 ms');
    });
  });

  describe('interactivePerf', function() {
    beforeEach(function() {
      this.interactivePerf = this.interactivePerfCreator();
    });

    describe('when not recording', function() {
      it('should log the time difference between #begin and #end', function() {
        this.performanceSpy.returns(100);
        this.interactivePerf.begin();

        this.performanceSpy.returns(500);
        this.interactivePerf.end('TEST MESSAGE');

        expect(this.logSpy).to.have.been.calledWith('TEST MESSAGE: 400 ms');
      });

      it('#end should log a default message', function() {
        this.performanceSpy.returns(0);
        this.interactivePerf.begin();

        this.performanceSpy.returns(500);
        this.interactivePerf.end();

        expect(this.debugSpy).to.have.been.calledWith('Unrecorded: 500 ms');
      });
    });

    describe('when recording', function() {
      beforeEach(function() {
        this.interactivePerf.startRecording();
      });

      describe('if there are no samples', function() {
        it('should log that there are no results', function() {
          this.interactivePerf.stopRecording();

          expect(this.logSpy).to.have.been.calledWith('Finished recording with no results');
        });
      });

      describe('if there are samples', function() {
        beforeEach(function() {
          this.performanceSpy.returns(0);
          this.interactivePerf.begin();

          this.performanceSpy.returns(1000);
          this.interactivePerf.end();

          this.performanceSpy.returns(2000);
          this.interactivePerf.begin();

          this.performanceSpy.returns(5000);
          this.interactivePerf.end();
        });

        it('should log the results', function() {
          this.interactivePerf.stopRecording();

          expect(this.logSpy).to.have.been.calledWith('Average duration: 2.00 seconds');
          expect(this.logSpy).to.have.been.calledWith('Average FPS: 0.50');
          expect(this.logSpy).to.have.been.calledWith('Number of samples: 2');
        });
      });
    });
  });
});
