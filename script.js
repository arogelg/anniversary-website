const music = document.getElementById('background-music');
const toggleMusic = document.getElementById('toggle-music');
const video = document.getElementById('background-video');
const sideMenu = document.querySelector('.side-menu');
const menuTrigger = document.querySelector('.menu-trigger');

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