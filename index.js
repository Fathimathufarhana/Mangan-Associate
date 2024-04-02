/*
** With Slick Slider Plugin : https://github.com/marvinhuebner/slick-animation
** And Slick Animation Plugin : https://github.com/marvinhuebner/slick-animation
*/

// Init slick slider + animation
$('.slider').slick({
    autoplay: false,
    speed: 800,
    lazyLoad: 'progressive',
    arrows: true,
    navigation: true,
    dots: false,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    adaptiveHeight: true,
      // prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
      // nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
  });
  
  



//section-6
  $(document).ready(function(){
    $('.carousel').slick({
    // slidesToShow: 3,
    dots:true,
      arrows:false,
    // centerMode: false,
      autoplay:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          infinite: true,
          centerMode: false,
          vertical: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          infinite: true,
          centerMode: false,
          vertical: false,
        }
      },
      

    ]
    });

    
  });
  
  // Slick version 1.5.8