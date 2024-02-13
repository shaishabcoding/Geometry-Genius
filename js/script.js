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
  const rectangleBaseInput = document.getElementById("rectangle-base");
  const rectangleHeightInput = document.getElementById("rectangle-height");
  const rectangleAreaSpan = document.getElementById("rectangle-area");

  const rectangleBase = parseFloat(rectangleBaseInput.value);
  const rectangleHeight = parseFloat(rectangleHeightInput.value);

  const area = rectangleBase * rectangleHeight;

  rectangleAreaSpan.innerHTML = area;
}
