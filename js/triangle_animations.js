(function($) {
  $previousSize = window.innerWidth;

  window.addEventListener('resize', function() {
    updateTriangles();
  });

  var updateTriangles = function() {
    var currentWidth = window.innerWidth;
    var changeWidths = $previousSize - currentWidth;

    var triangle = $('.triangle'),
        width = triangle.outerWidth();
    var newWidth = changeWidths + width;


    var height = newWidth / Math.sqrt(3);
    var newPath = "0 100%, 0 " + (800 - height) + "px, " + newWidth + "px 100%"
    triangle.css({"clip-path": newPath})
  }

}(jQuery));
