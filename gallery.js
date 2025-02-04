let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
let autoScroll = setInterval(nextImage, 5000); // Auto-scroll every 5s

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
    caption.style.opacity = index === currentIndex ? "1" : "0";
  });
}

// Move to the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

// Move to the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

// Reset auto-scroll when user interacts
function resetAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = setInterval(nextImage, 5000);
}

// Click event to move manually
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("right")) {
      nextImage();
    } else if (item.classList.contains("left")) {
      prevImage();
    }
    resetAutoScroll();
  });
});

// Scroll event for manual navigation
let touchStartX = 0;

document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    nextImage(); // Scroll down moves forward
  } else {
    prevImage(); // Scroll up moves backward
  }
  resetAutoScroll();
});

document.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

document.addEventListener("touchend", (event) => {
  let touchEndX = event.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) {
    nextImage(); // Swipe left moves forward
  } else if (touchStartX - touchEndX < -50) {
    prevImage(); // Swipe right moves backward
  }
  resetAutoScroll();
});

// Initialize the carousel
updateCarousel();