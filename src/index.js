
// import jquery
import $ from 'jquery'; 

// make a component factory
function component (msg) {

  let element = document.createElement('div');
  element.id = 'my-component';
  element.innerHTML = msg;
  return element;
  
}

// after a moment, turn it red with a style
setTimeout(() => {

  // append a new component to the body
  document.body.appendChild(component('Hey mutha fucker'));

  $('#my-component').css('color','red');

}, 1000);
