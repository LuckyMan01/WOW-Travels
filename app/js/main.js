$(function(){

    
$('.header__inner').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 1000,
  });
  $('.content__inner').slick({
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1145,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.img__top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'.location__arrows-next',
    prevArrow:'.location__arrows-prev',
    fade: true,
    asNavFor: '.img__doun'
  });
  $('.img__doun').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.img__top',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });

  $('.img__top-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'.location__arrows-next-1',
    prevArrow:'.location__arrows-prev-1',
    fade: true,
    asNavFor: '.img__doun-1'
  });
  $('.img__doun-1').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.img__top-1',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });

  $('.img__top-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'.location__arrows-next-2',
    prevArrow:'.location__arrows-prev-2',
    fade: true,
    asNavFor: '.img__doun-2'
  });
  $('.img__doun-2').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.img__top-2',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });

  $('.img__top-3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'.location__arrows-next-3',
    prevArrow:'.location__arrows-prev-3',
    fade: true,
    asNavFor: '.img__doun-3'
  });
  $('.img__doun-3').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.img__top-3',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });
  $('.box__menu').on('click',function(){
    $('.menu__list').slideToggle();
  });
  

    new WOW().init();
});