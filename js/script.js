function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleAreaSpan = document.getElementById("triangle-area");

  const triangleBase = parseFloat(triangleBaseInput.value);
  const triangleHeight = parseFloat(triangleHeightInput.value);

  const area = 0.5 * triangleBase * triangleHeight;

  triangleAreaSpan.innerHTML = area.toFixed(2);
}

function calculateRectangleArea() {
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleAreaSpan = document.getElementById("rectangle-area");

  const rectangleWidth = parseFloat(rectangleWidthInput.value);
  const rectangleLength = parseFloat(rectangleLengthInput.value);

  const area = rectangleWidth * rectangleLength;

  rectangleAreaSpan.innerHTML = area.toFixed(2);
}

function calculateParallelogramArea() {
  const parallelogramBaseInput = document.getElementById("parallelogram-base");
  const parallelogramHeightInput = document.getElementById(
    "parallelogram-height"
  );
  const parallelogramAreaSpan = document.getElementById("parallelogram-area");

  const parallelogramBase = parseFloat(parallelogramBaseInput.value);
  const parallelogramHeight = parseFloat(parallelogramHeightInput.value);

  const area = parallelogramBase * parallelogramHeight;

  parallelogramAreaSpan.innerHTML = area.toFixed(2);
}

function calculateRhombusArea() {
  const rhombusBaseInput = document.getElementById("rhombus-base");
  const rhombusBase2Input = document.getElementById("rhombus-base2");
  const rhombusAreaSpan = document.getElementById("rhombus-area");
  const rhombusBase = parseFloat(rhombusBaseInput.value);
  const rhombusBase2 = parseFloat(rhombusBase2Input.value);
  const area = 0.5 * rhombusBase * rhombusBase2;
  rhombusAreaSpan.innerHTML = area.toFixed(2);
}

function calculatePentagonArea() {
  const pentagonBaseInput = document.getElementById("pentagon-base");
  const pentagonPerimeterInput = document.getElementById("pentagon-perimeter");
  const pentagonAreaSpan = document.getElementById("pentagon-area");
  const pentagonBase = parseFloat(pentagonBaseInput.value);
  const pentagonPerimeter = parseFloat(pentagonPerimeterInput.value);
  const area = 0.5 * pentagonBase * pentagonPerimeter;
  pentagonAreaSpan.innerHTML = area.toFixed(2);
}

function calculateEllipseArea() {
  const ellipseBaseInput = document.getElementById("ellipse-base");
  const ellipseAreaValueInput = document.getElementById("ellipse-area-value");
  const ellipseAreaSpan = document.getElementById("ellipse-area");
  const ellipseBase = parseFloat(ellipseBaseInput.value);
  const ellipseAreaValue = parseFloat(ellipseAreaValueInput.value);
  const area = Math.PI * ellipseBase * ellipseAreaValue;
  ellipseAreaSpan.innerHTML = area.toFixed(2);
}
