// sirens.js
document.addEventListener("DOMContentLoaded", function() {
  const incrementButton = document.getElementById("increment-button");
  const resetButton = document.getElementById("reset-button");
  const showCounterButton = document.getElementById("show-counter-button");
  const counterValueElement = document.getElementById("counter-value");

  // Load the counter value from local storage or initialize it to 0
  let counter = parseInt(localStorage.getItem("counter")) || 0;
  counterValueElement.textContent = counter;

  incrementButton.addEventListener("click", function() {
    counter++;
    localStorage.setItem("counter", counter);
    counterValueElement.textContent = counter;
  });

  resetButton.addEventListener("click", function() {
    counter = 0;
    localStorage.setItem("counter", counter);
    counterValueElement.textContent = counter;
  });

  showCounterButton.addEventListener("click", function() {
    alert("Counter Value: " + counter);
  });
});