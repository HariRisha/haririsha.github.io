let invisibleButton = document.getElementById('invisible-button');
let backbtn = document.getElementById('back-btn');

// Invisible button
invisibleButton.addEventListener('click', e => {
    e.stopPropagation();
    window.location.href = '5.html';
  });

// Back to the beginning
backbtn.addEventListener('click', e => {
  window.location.href = 'index.html';
})