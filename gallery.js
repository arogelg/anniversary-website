let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove("center", "left", "right", "far-left", "far-right", "hidden");

    if (index === currentIndex) {
      item.classList.add("center");
    } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
      item.classList.add("left");
    } else if (index === (currentIndex + 1) % totalItems) {
      item.classList.add("right");
    } else if (index === (currentIndex - 2 + totalItems) % totalItems) {
      item.classList.add("far-left");
    } else if (index === (currentIndex + 2) % totalItems) {
      item.classList.add("far-right");
    } else {
      item.classList.add("hidden");
    }

    // Handle captions visibility
    const caption = item.querySelector(".caption");
    if (index === currentIndex) {
      caption.style.opacity = "1"; // Show caption for center image
    } else {
      caption.style.opacity = "0"; // Hide other captions
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

setInterval(nextImage, 5000); // Rotate every 5 seconds
updateCarousel();
