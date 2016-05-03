<!doctype html>
<html>
<head>
  <script src="../webcomponentsjs/webcomponents.js"></script>
  <script src="../web-component-tester/browser.js"></script>
  <link rel="import" href="three-viewport-controls.html">
</head>
<body>
  <script>

    // DOM element used to test three-viewport-controls
    var elt;

    // Test suite
    describe('three-viewport-controls', function() {

      // Add the element to be tested
      beforeEach(function() {
        elt = document.createElement("three-viewport-controls");
        document.body.appendChild(elt);
      });

      // Remove the tested element
      afterEach(function() {
        elt.remove();
      });

      it('should create controls after a camera is set', function () {
        expect(elt.controls).to.not.exist
        elt.camera = new THREE.PerspectiveCamera(30, 1, 0.1, 10000);
        expect(elt.controls).to.exist;
      }); // end it

      it('should fire an event when controls are changed', function (done) {
        elt.camera = new THREE.PerspectiveCamera(30, 1, 0.1, 10000);
        var obj = new THREE.Object3D();
        var sphere = new THREE.SphereBufferGeometry(1.0, 42, 42);
        obj.geometry = sphere;

        var callback = sinon.spy();
        elt.controls.addEventListener('change', callback);

        elt.focusObject(obj,true);

        flush( function () {
          expect(callback.callCount).to.equal(1);
          done();
        });

      }); // end it

      it('should be able to find the right object for listeners', function () {
        //Polymer 1.0 way of getting reference to three-viewport
        expect(elt.parentNode).to.exist;
        //Polymer 0.5 way of getting reference to three-viewport
        expect(elt.parentNode.host).to.not.exist;
      }); // end it

    }); // end describe

  </script>

</body>
</html>
