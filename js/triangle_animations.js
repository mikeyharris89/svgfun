(function($) {
  $previousSize = window.innerWidth;

  window.addEventListener('resize', function() {
    updateTriangles();
    updateRight();
  });

  var updateTriangles = function() {
    var currentWidth = window.innerWidth;
    $previousSize = currentWidth;
    var changeWidths = $previousSize - currentWidth;

    var triangle = $('.triangle'),
        width = triangle.outerWidth();
    var newWidth = changeWidths + width;


    var height = newWidth / Math.sqrt(3);
    var newPath = "0 100%, 0 " + (800 - height) + "px, " + "100% 100%";
    var ratio = "0 1, 0 " + ((800 - height) / 1000) + ", 1 1";
    $('polygon#left-triangle').attr('points', ratio);
    triangle.css({"clip-path": newPath});
  }

  var updateRight = function() {
    var currentWidth = window.innerWidth;
    var changeWidth = $previousSize - currentWidth;

    var rightTriangle = $('.right-triangle'),
        width = rightTriangle.outerWidth(),
        newWidth = changeWidth + width,
        height = newWidth / Math.sqrt(3),
        newPath = "100% 100%, 0 100%, 100% " + (800 - height) + "px",
        ratio = "1 1, 0 1, 1 " + ((800 - height) / 1000);

        $('polygon#right-triangle').attr('points', ratio);
        rightTriangle.css({"clip-path": newPath});
  }

}(jQuery));
