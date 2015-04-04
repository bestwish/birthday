interact('#tridiv').draggable({
  onmove: function (event) {
    var x = $('#tridiv .scene').data('x') || 0;
    var y = $('#tridiv .scene').data('y') || 0;
    x += event.dx;
    y += event.dy;
    $('#tridiv .scene').data('x', x).data('y', y);
    $('#tridiv .scene').attr('style', _style(x, y));
  }
});
console.log(_style(40,10));
function _style (x, y) {
  return ['-webkit-', '-moz-', '-ms-', '-o-', ' ', ''].join(_rotate(x, y));
}

function _rotate (y, x) {
  return "transform:rotateX(" + (-x) + "deg) rotateY(" + y + "deg);"
}