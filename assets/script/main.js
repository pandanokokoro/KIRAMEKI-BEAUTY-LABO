// お客様の声のカルーセル
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    initialSlide: 1,
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
