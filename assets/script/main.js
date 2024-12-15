const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    initialSlide: 1.5,
    spaceBetween: 10,
    breakpoints: {
      // 768px以上の場合
      768: {
        slidesPerView: 3,
        allowTouchMove: false,
      }
    },
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets', //ページネーションの種類
        clickable: true, //クリックに反応させる
      },
});

// PC表示のときに2番目のスライドをアクティブにする
const mdSize = 768
const mediaQueryList = window.matchMedia(`(min-width: ${mdSize}px)`)
    mediaQueryList.addEventListener("change", (event) => {
      if (event.matches) {
        swiper.slideTo(1)
      }
})