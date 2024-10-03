document.addEventListener('DOMContentLoaded', () => {
  const text = document.querySelector('p'); // Replace 'p' with the actual tag you want to move

  text.addEventListener('click', () => {
    text.style.position = 'absolute';
    text.style.left = `${Math.random() * window.innerWidth}px`;
    text.style.top = `${Math.random() * window.innerHeight}px`;
  });
});