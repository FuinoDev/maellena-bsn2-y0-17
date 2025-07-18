const images = ["img/dt5.jpg", "img/dt3.jpg", "img/dt7.jpg", 
  "img/dt1.jpg", "img/dt2.jpg", "img/dt4.jpg", "img/dt6.jpg", "img/dt5.jpg"];
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
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => link.classList.remove('active')); // Remove from all
    this.classList.add('active'); // Add to clicked
  });
});

// Auto-slide every 3 seconds
setInterval(nextImage, 2000);
