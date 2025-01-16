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

const mainSlider = new Swiper('.main-slider', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: null, // Will be set later
  },
  on: {
    imagesReady: function () {
      this.el.classList.remove('loading');
    },
    slideChangeTransitionEnd: function () {
      let activeSlide = this.slides[this.activeIndex];
      let caption = activeSlide.querySelector('.caption');
      if (caption) {
        caption.classList.add('show');
      }
    },
    slideChange: function () {
      let captions = this.el.querySelectorAll('.caption');
      captions.forEach(caption => caption.classList.remove('show'));
    },
  },
});

// Thumbnail Navigation Slider
const navSlider = new Swiper('.nav-slider', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  direction: 'vertical',
  centeredSlides: true,
  slideToClickedSlide: true,
  on: {
    imagesReady: function () {
      this.el.classList.remove('loading');
    },
    click: function () {
      mainSlider.autoplay.stop(); // Stops autoplay when clicking thumbnails
    },
  },
});

// Connect Navigation Slider to Main Slider
mainSlider.thumbs.swiper = navSlider;