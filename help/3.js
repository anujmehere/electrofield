function getFirstParamFromLocation() {
  var pair = window.location.search.substring(1);
  var parts = pair.split("=");
  return parts[1];
}
var nHeight = getFirstParamFromLocation();
try {
  window.top.resizeIframeHeight(height);
} catch (e) {}
