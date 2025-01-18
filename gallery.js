document.addEventListener("DOMContentLoaded", () => {
    let mainSliderSelector = ".main-slider";
    let navSliderSelector = ".nav-slider";
  
    // Main Slider
    let mainSlider = new Swiper(mainSliderSelector, {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      grabCursor: true,
      watchSlidesVisibility: true, // Fixes visibility issues
      watchSlidesProgress: true, // Ensures smooth progress tracking
      loopAdditionalSlides: 5, // Ensures enough slides are preloaded
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    // Thumbnail Slider
    let navSlider = new Swiper(navSliderSelector, {
      loop: true,
      slidesPerView: 5, // Show 5 thumbnails at a time
      spaceBetween: 5,
      direction: "vertical", // Align vertically
      centeredSlides: true, // Center the active thumbnail
      slideToClickedSlide: true, // Navigate to slide on thumbnail click
    });
  
    // Link the sliders
    mainSlider.controller.control = navSlider;
    navSlider.controller.control = mainSlider;
  });