const music = document.getElementById('background-music');
const toggleMusic = document.getElementById('toggle-music');
const video = document.getElementById('background-video');
const sideMenu = document.querySelector('.side-menu');
const menuTrigger = document.querySelector('.menu-trigger');
const slider = document.querySelector('.image-slider');
const images = Array.from(slider.children);

toggleMusic.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleMusic.textContent = "🔊";
  } else {
    music.pause();
    toggleMusic.textContent = "🎵";
  }
});

// Listen for the 'ended' event and remove the video after it plays once
video.addEventListener('ended', () => {
  video.pause(); // Just in case
  video.style.display = 'none'; // Hides the video after playback
});

// Optional: Handle menu toggle on click
menuTrigger.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

// Ensure the menu closes when clicking outside it
document.addEventListener('click', (event) => {
  if (!sideMenu.contains(event.target) && !menuTrigger.contains(event.target)) {
    sideMenu.classList.remove('open');
  }
});

let galleryCurrentIndex = 2; // Start with the center image

function updateGallerySlider() {
  galleryImages.forEach((img, index) => {
    const offset = index - galleryCurrentIndex;
    img.style.transform = `translateX(${offset * 100}px) rotateY(${offset * -15}deg)`;
    img.style.opacity = Math.abs(offset) > 2 ? 0 : 1; // Dim distant images
  });
}

// Add scroll functionality
document.addEventListener('wheel', (e) => {
  if (e.target.closest('.gallery-page')) { // Ensure it only applies in the gallery page
    if (e.deltaY > 0) {
      galleryCurrentIndex = Math.min(galleryCurrentIndex + 1, galleryImages.length - 1);
    } else {
      galleryCurrentIndex = Math.max(galleryCurrentIndex - 1, 0);
    }
    updateGallerySlider();
  }
});

// Initialize the gallery slider
if (gallerySlider) {
  updateGallerySlider();
}