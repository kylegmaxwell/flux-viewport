<!doctype html>
<html>
<head>
  <script src="../webcomponentsjs/webcomponents.js"></script>
  <script src="../web-component-tester/browser.js"></script>
  <link rel="import" href="three-viewport.html">
</head>
<body>
  <script>

    // DOM element used to test three-viewport
    var elt;

    // Test suite
    describe('three-viewport', function() {

      // Add the element to be tested
      beforeEach(function() {
        elt = document.createElement('three-viewport');
        elt.setAttribute('id', 'test');
      });

      it('should already exist in dom and be created per test', function (done) {
        // Check for element created for this test
        expect(elt).to.exist;
        expect(elt.getAttribute('id')).to.equal('test');
        done();
      }); // end it

    it('should render and save after focus', function (done) {
        elt.renderLater = sinon.spy(elt.renderLater);
        elt.serializeCameraStates = sinon.spy(elt.serializeCameraStates);

        expect(elt.renderLater.callCount).to.equal(0);
        expect(elt.serializeCameraStates.callCount).to.equal(0);

        var obj = new THREE.Object3D;
        obj.geometry = new THREE.SphereBufferGeometry(1.0, 42, 42);
        elt.focusObject(obj);

        expect(elt.renderLater.callCount).to.equal(2);
        expect(elt.serializeCameraStates.callCount).to.equal(1);

        done();
      }); // end it

    }); // end describe

  </script>

</body>
</html>
