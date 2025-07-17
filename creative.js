// Lightbox logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const imageBoxes = document.querySelectorAll('.img-box img');

imageBoxes.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = image.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
