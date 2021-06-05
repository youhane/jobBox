$(document).ready(function () {
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
    $('.recomm').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
    });
    $('.achievements').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
    });
});