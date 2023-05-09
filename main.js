/** @format */

$(document).ready(function () {
  function activateMaps() {
    let zoomMap = $('.maps-container-inner').ZoomArea({
      zoomLevel: 1,
      minZoomLevel: 1,
      maxZoomLevel: 15,
      parentOverflow: 'auto',
      exceptionsZoom: ['marker-all'],
      hideWhileAnimate: ['map-area', 'marker-all'],
      externalIncrease: '.map-control-zoomin',
      externalDecrease: '.map-control-zoomout',
      virtualScrollbars: false,
      usedAnimateMethod: 'jquery',
    });
  }
  activateMaps();
});
