<!doctype html>
<html>
<head>
  <script src="../webcomponentsjs/webcomponents.js"></script>
  <script src="../web-component-tester/browser.js"></script>
  <link rel="import" href="three-viewport-camera.html">
</head>
<body>
  <script>

    // DOM element used to test three-viewport-camera
    var elt;

    // Test suite
    describe('three-viewport-camera', function() {

      // Add the element to be tested
      beforeEach(function() {
        elt = document.createElement("three-viewport-camera");
      });

      it('should update camera when view changes', function () {
        // default should be perspective
        expect(elt.camera.top).to.not.exist;
        expect(elt.camera.type).to.equal('PerspectiveCamera');

        // Try changing to an orthographic view
        elt.view = 'top';
        // see if things updated due to property observer execution
        expect(elt.camera).to.equal(elt.cameras[elt.view]);
        expect(elt.camera.type).to.equal('OrthographicCamera');
        expect(elt.camera.top).to.exist;
      }); // end it

    }); // end describe

  </script>

</body>
</html>
