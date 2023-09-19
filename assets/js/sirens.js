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
    });
  }

  if (buttonB02){
    buttonB02.addEventListener('click',function(){
      localStorage.setItem('a02', 'true');
      a02 = true;
    });
  }

  if (buttonB03){
    buttonB03.addEventListener('click',function(){
      localStorage.setItem('a03', 'true');
      a03 = true;
    });
  }

  if (buttonB04){
    buttonB04.addEventListener('click',function(){
      localStorage.setItem('a04', 'true');
      a04 = true;
    });
  }

  if (buttonB05){
    buttonB05.addEventListener('click',function(){
      localStorage.setItem('a05', 'true');
      a05 = true;
    });
  }

  if (buttonB06){
    buttonB06.addEventListener('click',function(){
      localStorage.setItem('a06', 'true');
      a06 = true;
    });
  }

  if (buttonB07){
    buttonB07.addEventListener('click',function(){
      localStorage.setItem('a07', 'true');
      a07 = true;
    });
  }

  if (buttonB08){
    buttonB08.addEventListener('click',function(){
      localStorage.setItem('a08', 'true');
      a08 = true;
    });
  }

  if (buttonB09){
    buttonB09.addEventListener('click',function(){
      localStorage.setItem('a09', 'true');
      a09 = true;
    });
  }

  if (buttonB10){
    buttonB10.addEventListener('click',function(){
      localStorage.setItem('a10', 'true');
      a10 = true;
    });
  }

  if (buttonB11){
    buttonB11.addEventListener('click',function(){
      localStorage.setItem('a11', 'true');
      a11 = true;
    });
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