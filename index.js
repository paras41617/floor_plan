var canvas = new fabric.Canvas("c");

canvas.setBackgroundImage("background.jpeg", canvas.renderAll.bind(canvas));

document.getElementById("rect").addEventListener("click", () => {
  rect = new fabric.Rect({
    left: 40,
    top: 40,
    width: 50,
    height: 50,
    fill: "transparent",
    stroke: "green",
    strokeWidth: 5,
  });
  canvas.add(rect);
});

document.getElementById("circ").addEventListener("click", () => {
  circle = new fabric.Circle({
    left: 40,
    top: 40,
    radius: 50,
    fill: "transparent",
    stroke: "green",
    strokeWidth: 5,
  });
  canvas.add(circle);
});

document.getElementById("save").addEventListener("click", () => {
  var svgData = canvas.toSVG();
  var svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = "new.svg";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});