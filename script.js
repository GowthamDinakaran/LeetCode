function filterGallery(category) {
  const images = document.querySelectorAll('.gallery .image');
  images.forEach(img => {
    img.style.display = (category === 'all' || img.classList.contains(category)) ? 'block' : 'none';
  });
}
