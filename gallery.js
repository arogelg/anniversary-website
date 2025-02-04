let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
let autoScroll = setInterval(nextImage, 5000); // Auto-scroll every 5s

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove("center", "left", "right", "far-left", "far-right", "hidden");

    let position = (index - currentIndex + totalItems) % totalItems; 

    if (position === 0) {
      item.classList.add("center");
    } else if (position === 1) {
      item.classList.add("right");
    } else if (position === 2) {
      item.classList.add("far-right");
    } else if (position === totalItems - 1) {
      item.classList.add("left");
    } else if (position === totalItems - 2) {
      item.classList.add("far-left");
    } else {
      item.classList.add("hidden");
    }

    // Show caption only for center image
    const caption = item.querySelector(".caption");
    caption.style.opacity = position === 0 ? "1" : "0";
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

function resetAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = setInterval(nextImage, 5000);
}

// Allow clicking left/right images
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
document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    nextImage();
  } else {
    prevImage();
  }
  resetAutoScroll();
});

document.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

document.addEventListener("touchend", (event) => {
  let touchEndX = event.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) {
    nextImage();
  } else if (touchStartX - touchEndX < -50) {
    prevImage();
  }
  resetAutoScroll();
});

document.querySelectorAll(".carousel-item img").forEach((img, index) => {
  console.log(`Image ${index + 1}: ${img.src}`);
});


// Initialize the carousel
updateCarousel();