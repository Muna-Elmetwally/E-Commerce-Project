function scrollCarousel(direction) {
  const carousel = document.querySelector('.slides');
  const scrollAmount = carousel.scrollWidth / carousel.children.length * direction;
  carousel.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
}