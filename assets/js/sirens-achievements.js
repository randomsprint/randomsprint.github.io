// sirens-achievements.js

function countTrueBooleans() {
  let trueCount = 0;
  for (let i = 1; i <= 11; i++) {
    const key = `a${i.toString().padStart(2, '0')}`;
    const value = localStorage.getItem(key);
    if (value === 'true') {
      trueCount++;
    }
  }
  return trueCount;
}


document.getElementById('_pushState').addEventListener('hy-push-state-load', function() {
  // Convert current localStorage values to javascript booleans
  var a01 = localStorage.getItem('a01') === 'true';
  var a02 = localStorage.getItem('a02') === 'true';
  var a03 = localStorage.getItem('a03') === 'true';
  var a04 = localStorage.getItem('a04') === 'true';
  var a05 = localStorage.getItem('a05') === 'true';
  var a06 = localStorage.getItem('a06') === 'true';
  var a07 = localStorage.getItem('a07') === 'true';
  var a08 = localStorage.getItem('a08') === 'true';
  var a09 = localStorage.getItem('a09') === 'true';
  var a10 = localStorage.getItem('a10') === 'true';
  var a11 = localStorage.getItem('a11') === 'true';
  var aTotal = countTrueBooleans();


  // Report achievements
  var d01 = document.getElementById('d01');
  var d02 = document.getElementById('d02');
  var d03 = document.getElementById('d03');
  var d04 = document.getElementById('d04');
  var d05 = document.getElementById('d05');
  var d06 = document.getElementById('d06');
  var d07 = document.getElementById('d07');
  var d08 = document.getElementById('d08');
  var d09 = document.getElementById('d09');
  var d10 = document.getElementById('d10');
  var d11 = document.getElementById('d11');
  var dTotal = document.getElementById('dTotal');
  var dPunc = document.getElementById('dPunc');

  if (a01) {
    d01.textContent = 'Victory?';
  } else {
    d01.textContent = "???";
  }

  if (a02) {
    d02.textContent = 'First Blood';
  } else {
    d02.textContent = "???";
  }

  if (a03) {
    d03.textContent = 'Burial at Sea';
  } else {
    d03.textContent = "???";
  }

  if (a04) {
    d04.textContent = 'Classic?';
  } else {
    d04.textContent = "???";
  }

  if (a05) {
    d05.textContent = 'Smells like Fish';
  } else {
    d05.textContent = "???";
  }

  if (a06) {
    d06.textContent = 'Storge';
  } else {
    d06.textContent = "???";
  }

  if (a07) {
    d07.textContent = 'Dead End?';
  } else {
    d07.textContent = "???";
  }

  if (a08) {
    d08.textContent = 'The Grim Reefer';
  } else {
    d08.textContent = "???";
  }

  if (a09) {
    d09.textContent = 'How did I get here?';
  } else {
    d09.textContent = "???";
  }

  if (a10) {
    d10.textContent = 'Diabolus Ex Machina';
  } else {
    d10.textContent = "???";
  }

  if (a11) {
    d11.textContent = 'Groundhog Day';
  } else {
    d11.textContent = "???";
  }

  dTotal.textContent = aTotal;

  if (aTotal === 11) {
    dPunc.textContent = '!';
  } else {
    dPunc.textContent = '.';
  }

});

document.getElementById('twitterShareButton').addEventListener('click', function() {
  var aTotal = countTrueBooleans();
  const pageUrl = encodeURIComponent('RandomSprint.com/Sirens');
  if (aTotal === 0) {
    commentary = encodeURIComponent('I am about to start the Siren\'s Symphony, a Choose Your Own Adventure Book set in the Odyssey. Let\'s see who can complete all achievements first!');
  } else {
    commentary = encodeURIComponent('I have unlocked ' + aTotal + ' of 11 achievements in the Siren\'s Symphony! It\'s a Choose Your Own Adventure Book set in the Odyssey.');
  }
  const intentUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${commentary}`;
  
  // Open the Twitter Web Intent URL in a new window or tab
  window.open(intentUrl, '_blank');
});