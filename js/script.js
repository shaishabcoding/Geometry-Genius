function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleAreaSpan = document.getElementById("triangle-area");

  const triangleBase = parseFloat(triangleBaseInput.value);
  const triangleHeight = parseFloat(triangleHeightInput.value);

  const area = 0.5 * triangleBase * triangleHeight;

  triangleAreaSpan.innerHTML = area;
}

function calculateRectangleArea() {
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleAreaSpan = document.getElementById("rectangle-area");

  const rectangleWidth = parseFloat(rectangleWidthInput.value);
  const rectangleLength = parseFloat(rectangleLengthInput.value);

  const area = rectangleWidth * rectangleLength;

  rectangleAreaSpan.innerHTML = area;
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

  parallelogramAreaSpan.innerHTML = area;
}
