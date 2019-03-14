if ($('.js-image-wrapper').length > 0) {
    objectFitImages('.js-image-wrapper');
}

$('.sl-main').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: $('.prev-sl'),
    nextArrow: $('.next-sl')
})


$('.sl-maybe-main').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
})

