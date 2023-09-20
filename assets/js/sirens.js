// sirens.js

document.getElementById('_pushState').addEventListener('hy-push-state-load', function() {
  // initialize achievement variables. If they do not exist, set to false

  if (localStorage.getItem('a01') === null) {
    localStorage.setItem('a01', 'false');
  }

  if (localStorage.getItem('a02') === null) {
    localStorage.setItem('a02', 'false');
  }

  if (localStorage.getItem('a03') === null) {
    localStorage.setItem('a03', 'false');
  }

  if (localStorage.getItem('a04') === null) {
    localStorage.setItem('a04', 'false');
  }

  if (localStorage.getItem('a05') === null) {
    localStorage.setItem('a05', 'false');
  }

  if (localStorage.getItem('a06') === null) {
    localStorage.setItem('a06', 'false');
  }

  if (localStorage.getItem('a07') === null) {
    localStorage.setItem('a07', 'false');
  }

  if (localStorage.getItem('a08') === null) {
    localStorage.setItem('a08', 'false');
  }

  if (localStorage.getItem('a09') === null) {
    localStorage.setItem('a09', 'false');
  }

  if (localStorage.getItem('a10') === null) {
    localStorage.setItem('a10', 'false');
  }

  if (localStorage.getItem('a11') === null) {
    localStorage.setItem('a11', 'false');
  }

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

  // Listen for changes to buttons
  var buttonB01 = document.getElementById('b01');
  var buttonB02 = document.getElementById('b02');
  var buttonB03 = document.getElementById('b03');
  var buttonB04 = document.getElementById('b04');
  var buttonB05 = document.getElementById('b05');
  var buttonB06 = document.getElementById('b06');
  var buttonB07 = document.getElementById('b07');
  var buttonB08 = document.getElementById('b08');
  var buttonB09 = document.getElementById('b09');
  var buttonB10 = document.getElementById('b10');
  var buttonB11 = document.getElementById('b11');
  var buttonReset = document.getElementById('bReset');

  if (buttonB01){
    buttonB01.addEventListener('click',function(){
      localStorage.setItem('a01', 'true');
      a01 = true;

      buttonB01.disabled = true;
      buttonB01.textContent = '✅ Collected';
    });
    if (a01) {
      buttonB01.disabled = true;
      buttonB01.textContent = '✅ Collected';
    }
  }

  if (buttonB02){
    buttonB02.addEventListener('click',function(){
      localStorage.setItem('a02', 'true');
      a02 = true;

      buttonB02.disabled = true;
      buttonB02.textContent = '✅ Collected';
    });
    if (a02) {
      buttonB02.disabled = true;
      buttonB02.textContent = '✅ Collected';
    }
  }

  if (buttonB03){
    buttonB03.addEventListener('click',function(){
      localStorage.setItem('a03', 'true');
      a03 = true;

      buttonB03.disabled = true;
      buttonB03.textContent = '✅ Collected';
    });
    if (a03) {
      buttonB03.disabled = true;
      buttonB03.textContent = '✅ Collected';
    }
  }

  if (buttonB04){
    buttonB04.addEventListener('click',function(){
      localStorage.setItem('a04', 'true');
      a04 = true;

      buttonB04.disabled = true;
      buttonB04.textContent = '✅ Collected';
    });
    if (a04) {
      buttonB04.disabled = true;
      buttonB04.textContent = '✅ Collected';
    }
  }

  if (buttonB05){
    buttonB05.addEventListener('click',function(){
      localStorage.setItem('a05', 'true');
      a05 = true;
      
      buttonB05.disabled = true;
      buttonB05.textContent = '✅ Collected';
    });
    if (a05) {
      buttonB05.disabled = true;
      buttonB05.textContent = '✅ Collected';
    }
  }

  if (buttonB06){
    buttonB06.addEventListener('click',function(){
      localStorage.setItem('a06', 'true');
      a06 = true;
      
      buttonB06.disabled = true;
      buttonB06.textContent = '✅ Collected';
    });
    if (a06) {
      buttonB06.disabled = true;
      buttonB06.textContent = '✅ Collected';
    }
  }

  if (buttonB07){
    buttonB07.addEventListener('click',function(){
      localStorage.setItem('a07', 'true');
      a07 = true;
      
      buttonB07.disabled = true;
      buttonB07.textContent = '✅ Collected';
    });
    if (a07) {
      buttonB07.disabled = true;
      buttonB07.textContent = '✅ Collected';
    }
  }

  if (buttonB08){
    buttonB08.addEventListener('click',function(){
      localStorage.setItem('a08', 'true');
      a08 = true;
      
      buttonB08.disabled = true;
      buttonB08.textContent = '✅ Collected';
    });
    if (a08) {
      buttonB08.disabled = true;
      buttonB08.textContent = '✅ Collected';
    }
  }

  if (buttonB09){
    buttonB09.addEventListener('click',function(){
      localStorage.setItem('a09', 'true');
      a09 = true;
      
      buttonB09.disabled = true;
      buttonB09.textContent = '✅ Collected';
    });
    if (a09) {
      buttonB09.disabled = true;
      buttonB09.textContent = '✅ Collected';
    }
  }

  if (buttonB10){
    buttonB10.addEventListener('click',function(){
      localStorage.setItem('a10', 'true');
      a10 = true;
      
      buttonB10.disabled = true;
      buttonB10.textContent = '✅ Collected';
    });
    if (a10) {
      buttonB10.disabled = true;
      buttonB10.textContent = '✅ Collected';
    }
  }

  if (buttonB11){
    buttonB11.addEventListener('click',function(){
      localStorage.setItem('a11', 'true');
      a11 = true;
      
      buttonB11.disabled = true;
      buttonB11.textContent = '✅ Collected';
    });
    if (a11) {
      buttonB11.disabled = true;
      buttonB11.textContent = '✅ Collected';
    }
  }

  if (buttonReset){
    buttonReset.addEventListener('click',function(){
      localStorage.setItem('a01', 'false');
      localStorage.setItem('a02', 'false');
      localStorage.setItem('a03', 'false');
      localStorage.setItem('a04', 'false');
      localStorage.setItem('a05', 'false');
      localStorage.setItem('a06', 'false');
      localStorage.setItem('a07', 'false');
      localStorage.setItem('a08', 'false');
      localStorage.setItem('a09', 'false');
      localStorage.setItem('a10', 'false');
      localStorage.setItem('a11', 'false');
      localStorage.setItem('counter', '0');

      a01 = false;
      a02 = false;
      a03 = false;
      a04 = false;
      a05 = false;
      a06 = false;
      a07 = false;
      a08 = false;
      a09 = false;
      a10 = false;
      a11 = false;

      counter = 0;

      location.reload();
    });
  }
});