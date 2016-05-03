<!doctype html>
<html>
<head>
  <script src="../webcomponentsjs/webcomponents.js"></script>
  <script src="../web-component-tester/browser.js"></script>
  <link rel="import" href="three-viewport-helpers.html">
</head>
<body>
  <script>

    // DOM element used to test three-viewport-helpers
    var elt;

    // Test suite
    describe('three-viewport-helpers', function() {

      // Add the element to be tested
      beforeEach(function() {
        elt = document.createElement("three-viewport-helpers");
      });

      it('should update grid when properties change', function () {

        elt.updateGrid = sinon.spy();
        expect(elt.updateGrid.callCount).to.equal(0);

        elt.gridColor1 = new THREE.Color(0x111111);
        expect(elt.updateGrid.callCount).to.equal(1);

        elt.gridColor1.r = 0.5;
        // Notification required for binding to update!
        elt.notifyPath('gridColor1.r', elt.gridColor1.r);

        expect(elt.updateGrid.callCount).to.equal(2);

      }); // end it

    }); // end describe

  </script>

</body>
</html>
