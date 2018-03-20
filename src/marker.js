const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotel: "http://i.imgur.com/D9574Cu.png",
  restaurant: "http://i.imgur.com/cqR6pUI.png",
  activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type,coords){
  let pictureUrl = iconURLs[type];
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = 'url('+pictureUrl+')';
  return new mapboxgl.Marker(markerDomEl).setLngLat(coords); // [-87.6354, 41.8885] for Chicago
}


module.exports = buildMarker;
