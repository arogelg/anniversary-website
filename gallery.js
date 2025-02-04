let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function updateCarousel() {
  const angle = 360 / totalItems;
  
  items.forEach((item, index) => {
    const rotation = angle * (index - currentIndex);
    item.style.transform = `rotateY(${rotation}deg) translateZ(300px)`;
    item.classList.toggle("active", index === currentIndex);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

setInterval(nextImage, 5000); // Auto-scroll every 5 seconds
updateCarousel();