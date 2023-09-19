var counter = 0

document.getElementById('_pushState').addEventListener('hy-push-state-load', function() {
  // Read the counter value from localStorage (if it exists)
  if (localStorage.getItem('counter') !== null) {
    counter = parseInt(localStorage.getItem('counter'), 10);
  }

  if (localStorage.getItem('counter') === null) {
    localStorage.setItem('counter', '0');
  }

  // Update the visibility of the paragraph marker based on the initial counter value
  if (counter >= 5) {
    document.getElementById('hiddenChoice').style.display = 'block';
  }
});