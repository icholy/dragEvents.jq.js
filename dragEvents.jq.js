(function ($) {
 
  $.fn.registerDragEvents = function (scope) {

    var isMouseDown = false,
        isDragging = false,
        startX, startY,
        $el = this,
        $doc = $(scope || document);

    var mouseMoveHandler = function (e) {
      if (!isDragging) {
        isDragging = true;
        $el.trigger({
          type: 'dragstart',
          x: startX,
          y: startY,
          startX: startX,
          startY: startX,
          offsetX: 0,
          offsetY: 0
        });
      }
      $el.trigger({
        type: 'drag',
        x: e.pageX,
        y: e.pageY,
        startX: startX,
        startY: startY,
        offsetX: startX - e.pageX,
        offsetY: startY - e.pageY
      });
    };

    $el.on('mousedown', function (e) {
      startX = e.pageX;
      startY = e.pageY;
      isMouseDown = true;
      $doc.bind('mousemove', mouseMoveHandler);
    });

    $doc.on('mouseup', function (e) {
      if (isMouseDown) {
        $doc.unbind('mousemove', mouseMoveHandler);
        isMouseDown = false;
      }
      if (isDragging) {
        isDragging = false;
        $el.trigger({
          type: 'dragstop',
          x: e.pageX,
          y: e.pageY,
          startX: startX,
          startY: startY,
          offsetX: startX - e.pageX,
          offsetY: startY - e.pageY
        });
      }
    });
  };

}(jQuery));
