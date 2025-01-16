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

let currentIndex = Math.floor(images.length / 2); // Start with the center image

// Function to update image positions
function updateSlider() {
  images.forEach((img, index) => {
    const offset = index - currentIndex; // Calculate distance from the center image
    img.style.transform = `translateX(${offset * 150}px) rotateY(${offset * -15}deg)`;
    img.style.opacity = Math.abs(offset) > 2 ? 0 : 1; // Dim distant images
    img.style.pointerEvents = Math.abs(offset) > 2 ? 'none' : 'auto'; // Disable interaction for dimmed images
  });
}

// Add scroll functionality for the slider
document.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    currentIndex = Math.min(currentIndex + 1, images.length - 1); // Scroll down: move right
  } else {
    currentIndex = Math.max(currentIndex - 1, 0); // Scroll up: move left
  }
  updateSlider();
});

// Initialize the slider
updateSlider();