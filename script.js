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

function _style (x, y) {
  return ['-webkit-', '-moz-', '-ms-', '-o-', ' ', ''].join(_rotate(x, y));
}

function _rotate (y, x) {
  return "transform:rotateX(" + (-x) + "deg) rotateY(" + y + "deg);"
}

$(function() {
  $("#music").jPlayer( {
    ready: function () {
      $(this).jPlayer("setMedia", {
        ogv: "music.ogg",
        m4a: "music.m4a",
        mp3: "music.mp3"
      }).jPlayer("play");
    },
    swfPath: "bower_components/jplayer/dist/jplayer/jquery.jplayer.swf"
  });
});