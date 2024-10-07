let invisibleButton = document.getElementById('invisible-button');

invisibleButton.addEventListener('click', e => {
    e.stopPropagation();
    window.location.href = '5.html';
  });