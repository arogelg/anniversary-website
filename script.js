const music = document.getElementById('background-music');
const toggleMusic = document.getElementById('toggle-music');
const video = document.getElementById('background-video');

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
