## Simple jQuery drag events

```javascript

var $foo = $('#foo');

$foo.registerDragEvents();

$foo.on('dragstart', function (e) {
   console.log('dragstart', e);
});

$foo.on('drag', function (e) {
    console.log('drag', e);
});

$foo.on('dragstop', function (e) {
    console.log('dragstop', e);
});

```

### Event Properties

Each of the event objects passed into the drag callbacks have the following properties.

```javascript

{
  x: <current pageX>,
  y: <current pageY>,
  startX: <pageX on dragstart>,
  startY: <pageY on dragstart>,
  offsetX: <difference between x and startX>,
  offsetY: <difference between y and startY>
}

```
