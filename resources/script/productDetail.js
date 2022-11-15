var productNavSlider = new Swiper(".product-nav-slider", {
    loop: !1,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: !0,
    watchSlidesProgress: !0,
 }),
productThubnailSlider = new Swiper(".product-thumbnail-slider", {
    loop: !1,
    spaceBetween: 24,
    navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
    },
    thumbs: { swiper: productNavSlider },
 });


 $('.similar_product_slider').owlCarousel({
    margin:10,
    nav:true,
    // dots: true,
    // loop: true,
    responsive:{
        0:{
            items:2
        },
        900:{
            items:2
        },
        1000:{
            items:3,
        },
        1200:{
            items:4
        }
    }

})