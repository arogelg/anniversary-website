document.addEventListener("DOMContentLoaded", () => {
    let mainSliderSelector = ".main-slider";
    let mainSliderOptions = {
      loop: true, // Enable looping for smoother navigation
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        init: function () {
          console.log("Swiper initialized");
        },
        imagesReady: function () {
          this.el.classList.remove("loading");
        },
      },
    };
  
    // Initialize Swiper
    let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
  });
  