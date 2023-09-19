var counter = 0

// Read the counter value from localStorage (if it exists)
if (localStorage.getItem('counter') !== null) {
  counter = parseInt(localStorage.getItem('counter'), 10);
}

if (localStorage.getItem('counter') === null) {
  localStorage.setItem('counter', '0');
}

function incrementCounter(){
  // increment counter
  counter++;

  // update localStorage
  localStorage.setItem('counter', counter.toString());
}