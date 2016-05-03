<!doctype html>
<html>
<head>
  <script src="../webcomponentsjs/webcomponents.js"></script>
  <script src="../web-component-tester/browser.js"></script>
  <link rel="import" href="three-viewport-renderer.html">
</head>
<body>
  <script src="js/Detector.js"></script>

  <script>
    // DOM element used to test three-viewport-renderer
    var elt;
    var elt2;

    // Test suite
    describe('three-viewport-renderer', function() {

      var glEnabled = true;
      before( function () {
        if (!Detector.webgl) {
          glEnabled = false;
        }
      });

      // Add the element to be tested
      beforeEach(function() {
        elt = document.createElement("three-viewport-renderer");
        elt.glEnabled = glEnabled;
        elt2 = document.createElement("three-viewport-renderer");
        elt2.glEnabled = glEnabled;
        // Have to attach element, or else it will not render
        document.body.appendChild(elt);
        document.body.appendChild(elt2);
      });

      // Remove the tested element
      afterEach(function() {
        elt.remove();
        elt2.remove();
      });

      it('should create renderer when gl is enabled', function () {
        if (glEnabled) {
          expect(elt._context.renderer).to.exist;
        } else {
          expect(elt._context).to.not.exist;
        }
      });

      it('should update renderer when size changes', function () {
        expect(elt.classList.length).to.equal(0);
        elt.setRendererSize = sinon.spy(elt.setRendererSize);
        expect(elt.setRendererSize.callCount).to.equal(0);
        elt.width = 500;
        expect(elt.setRendererSize.callCount).to.equal(1);
        elt.height = 500;
        expect(elt.setRendererSize.callCount).to.equal(2);
      }); // end it

      it('should update host', function () {
        var callCount = 2;
        if (!glEnabled) {
          callCount = 0;
        }
        // render first host
        expect(elt.scene).to.exist;

        elt.setHost = sinon.spy(elt.setHost);
        elt.camera = new THREE.PerspectiveCamera();
        elt.doRender();
        elt.doRender();
        expect(elt.setHost.callCount).to.equal(callCount);

        // render second host
        elt2.setHost = sinon.spy(elt2.setHost);
        elt2.camera = new THREE.PerspectiveCamera();
        elt2.doRender();
        elt.doRender();
        elt2.doRender();
        expect(elt2.setHost.callCount).to.equal(callCount);
        //make sure host is updated
        if (glEnabled) {
          expect(elt2._context.currentHost).to.equal(elt2);
        }
      }); // end it

    }); // end describe

  </script>

</body>
</html>
