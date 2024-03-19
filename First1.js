var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroundWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigator: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
  });