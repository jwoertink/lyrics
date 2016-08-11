function getTextWidth(text) {
  var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  context.font = "Helvetica 18px";
  var metrics = context.measureText(text);
  return metrics.width;
}

function getLongestLine(textBlock) {
  var lines = textBlock.split("\n");
  var line = lines.sort(function(a, b) { return b.length - a.length; });
  return line[0];
}

document.getElementById("material-app-bar").style.display = "none";
document.querySelector("#main-content-container .header.track").style.display = "none";

var titles = document.querySelectorAll("#main-content-container .title");

for(var i=0; i < titles.length; i++) {
  titles[i].style.display = "none";
}

var container = document.querySelector("#main-content-container .content-container.lyrics");
container.style.margin = "0px";

var lyricBlocks = document.querySelectorAll("#main-content-container .content-container.lyrics p");

for(var i=0; i < lyricBlocks.length; i++) {
  var p = lyricBlocks[i];
  var text = getLongestLine(p.innerText);
  var width = getTextWidth(text);
  p.style.float = "left";
  p.style.width = width + "px";
  p.style.marginRight = "10px";
  p.style.padding = "10px";
  p.style.border = "1px solid #eeeeee";
  p.style.position = "relative";

  var node = document.createElement("SPAN");
  var textNode = document.createTextNode(i + 1);
  node.appendChild(textNode);
  node.style.position = "absolute";
  node.style.left = "1px";
  node.style.top = "1px";
  node.style.color = "black";
  node.style.fontSize = "8px";
  p.appendChild(node);
}

