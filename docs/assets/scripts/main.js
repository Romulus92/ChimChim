var func = {
  "slick": function() {
    $('.product-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      fade: true,
      pauseOnFocus: false
    });
    $('.product-slider').on('beforeChange', function(slick, currentSlide){
      if ($('.slick-slide.slick-current.slick-active').attr('data-slick-index') == 0){
        $(".hero_bg").css("background", "url(assets/images/header_bg/hotasia.jpg) center center no-repeat").fadeIn()
      } else if ($('.slick-slide.slick-current.slick-active').attr('data-slick-index') == 1) {
        $(".hero_bg").css("background", "url(assets/images/header_bg/korean.jpg) center center no-repeat").fadeIn()
      } else if ($('.slick-slide.slick-current.slick-active').attr('data-slick-index') == 2) {
        $(".hero_bg").css("background", "url(assets/images/header_bg/professional.jpg) center center no-repeat").fadeIn()
      }
    });
  },
  "headerHover": function() {
    $(".nav__item").hover(function() {
      if ($(this).hasClass("nav__item_korean")) {
        $(this).find(".nav__item_bg").css("background",  "url(assets/images/menu_hovers/k_a.jpg)").animate({opacity: 1},{duration:300});
      } else if ($(this).hasClass("nav__item_hotasia")) {
        $(this).find(".nav__item_bg").css("background",  "url(assets/images/menu_hovers/h_a.jpg)").animate({opacity: 1},{duration:300});
      } else if ($(this).hasClass("nav__item_prof")) {
        $(this).find(".nav__item_bg").css("background",  "url(assets/images/menu_hovers/p_a.jpg)").animate({opacity: 1},{duration:300});
      }
    })
    $(".nav__item").mouseleave(function() {
      if ($(this).hasClass("nav__item_korean")) {
        $(this).find(".nav__item_bg").stop().animate({opacity: 0},{duration:300});
      } else if ($(this).hasClass("nav__item_hotasia")) {
        $(this).find(".nav__item_bg").stop().animate({opacity: 0},{duration:300});
      } else if ($(this).hasClass("nav__item_prof")) {
        $(this).find(".nav__item_bg").stop().animate({opacity: 0},{duration:300});
      }
    })
  },
  "socialHover": function() {
    $(".social__item").hover(function(){
      $(this).addClass("social__item_active")
    })
    $(".social__item").mouseleave(function(){
      $(this).removeClass("social__item_active")
    })
  }
}

var app = {
  'init': function() {
    func.slick();
    func.headerHover();
    func.socialHover();
  },
  'scroll': function() {
    
  },
  'load': function() {
    
  },
  'resize': function() {

  }, 
};

$(function() {
  app.init();
  $(window).on('load', function() { app.load(); });
  $(window).on('resize', function() { app.resize(); });
  $(window).on('scroll', function(){app.scroll();})
})