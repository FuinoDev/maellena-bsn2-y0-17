const images = ["img/hero1.avif", "img/hero2.avif", "img/hero3.webp"];
let current = 0;
const imgElement = document.getElementById("slider-img");

function showImage(index) {
  imgElement.src = images[index];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

// Auto-slide every 3 seconds
setInterval(nextImage, 3000);
