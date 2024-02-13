function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleAreaSpan = document.getElementById("triangle-area");

  const triangleBase = parseFloat(triangleBaseInput.value);
  const triangleHeight = parseFloat(triangleHeightInput.value);

  const area = 0.5 * triangleBase * triangleHeight;

  triangleAreaSpan.innerHTML = area;
}
