var func = {
  "slick": function() {
    $(document).ready(function(){
      var time = 5;
      var $bar1,
          $slick,
          isPause,
          tick,
          percentTime;
      
      $slick = $('.product-slider');
      $slick.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
        pauseOnFocus: false
      });
      
      $bar1 = $('.product__progress-item-1 .product__progress-bar');
      $bar2 = $('.product__progress-item-2 .product__progress-bar');
      $bar3 = $('.product__progress-item-3 .product__progress-bar');
      
      $('.product-slider').on({
        mouseenter: function() {
          isPause = true;
        },
        mouseleave: function() {
          isPause = false;
        }
      })
      
      function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
      }

      
      function interval() {
        if(isPause === false) {
          percentTime += 1 / (time+0.1);
          if ($('.slick-slide.slick-current.slick-active').attr('data-slick-index') == 0) {
            $bar1.css({
              width: percentTime+"%"
            });
          } else if ($('.slick-slide.slick-current.slick-active').attr('data-slick-index') == 1) {
            $bar2.css({
              width: percentTime+"%"
            });
          } else if ($('.slick-slide.slick-current.slick-active').attr('data-slick-index') == 2) {
            $bar3.css({
              width: percentTime+"%"
            });
          }
          
          if(percentTime >= 100)
            {
              $slick.slick('slickNext');
              startProgressbar();
            }
        }
      }
      
      function resetProgressbar() {
        $bar1.css({
         width: 0+'%' 
        });
        $bar2.css({
          width: 0+'%' 
        });
        $bar3.css({
          width: 0+'%' 
        });
        clearTimeout(tick);
      }

      startProgressbar();
      
      $('.product-slider').on('beforeChange', function(slick, currentSlide){
        if ($('.slick-slide.slick-current.slick-active').attr('data-slick-index') == 0){
          $(".hero_bg").css("background", "url(assets/images/header_bg/hotasia.jpg) center center no-repeat").fadeIn()
        } else if ($('.slick-slide.slick-current.slick-active').attr('data-slick-index') == 1) {
          $(".hero_bg").css("background", "url(assets/images/header_bg/korean.jpg) center center no-repeat").fadeIn()
        } else if ($('.slick-slide.slick-current.slick-active').attr('data-slick-index') == 2) {
          $(".hero_bg").css("background", "url(assets/images/header_bg/professional.jpg) center center no-repeat").fadeIn()
        }
      });
      
      $(".nav__item").click(function(e) {
        e.preventDefault;
        indexItem = $(this).index();
        $('.product-slider').slick("slickGoTo", indexItem)
        resetProgressbar()
        startProgressbar();
      })
      $(".product__progress-item").click(function(e) {
        e.preventDefault;
        indexItem = $(this).index();
        $('.product-slider').slick("slickGoTo", indexItem)
        resetProgressbar()
        startProgressbar();
      })
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
  },
  "readyAnimate": function() {
    $(".ready__item_info_1").waypoint(function() {
      let aminatedItems = $(".ready__animated");
      let animatedArray = Array.from(aminatedItems);
      var i = 0;
      function delayedLoop(){
      $(animatedArray[i]).addClass("fadeInDown")
      if(++i == animatedArray.length)
      { return; }
      window.setTimeout(delayedLoop, 500);
      }
      delayedLoop();
    } , { offset: '60%'});
  },
  "advantagesAnimate": function() {
    $(".advantages__image").waypoint(function() {
      $(".advantages__image").addClass("fadeInLeft")
    } , { offset: '50%'});
  },
  "sliderMenuHover": function() {
    /* $(".slider__menu-item").hover(function() {
      if ($(this).hasClass("slider__menu-item_korean")) {
        $(this).find(".slider__menu-item-bg").css("background",  "url(assets/images/menu_hovers/pk_a.jpg)").animate({opacity: 1},{duration:300});
      } else if ($(this).hasClass("slider__menu-item_hotasia")) {
        $(this).find(".slider__menu-item-bg").css("background",  "url(assets/images/menu_hovers/ph_a.jpg)").animate({opacity: 1},{duration:300});
      } else if ($(this).hasClass("slider__menu-item_prof")) {
        $(this).find(".slider__menu-item-bg").css("background",  "url(assets/images/menu_hovers/pp_a.jpg)").animate({opacity: 1},{duration:300});
      }
    }) */
    /* $(".slider__menu-item").mouseleave(function() {
      if ($(this).hasClass("slider__menu-item_korean")) {
        $(this).find(".slider__menu-item-bg").stop().animate({opacity: 0},{duration:300});
      } else if ($(this).hasClass("slider__menu-item_hotasia")) {
        $(this).find(".slider__menu-item-bg").stop().animate({opacity: 0},{duration:300});
      } else if ($(this).hasClass("slider__menu-item_prof")) {
        $(this).find(".slider__menu-item-bg").stop().animate({opacity: 0},{duration:300});
      }
    }) */
  },
  "sliderMenuClick": function() {
    $(".slider__menu-item").click(function() {
      if ($(this).hasClass("slider__menu-item_korean")) {
        $(".slider__menu-item_korean").addClass("slider__menu-item_korean-active")
        $(".slider__menu-item_hotasia").removeClass("slider__menu-item_hotasia-active")
        $(".slider__menu-item_prof").removeClass("slider__menu-item_prof-active")
        /* $(".slider__menu-item_korean").find(".slider__menu-item-bg").css("background",  "url(assets/images/menu_hovers/pk_a.jpg)").animate({opacity: 1},{duration:300});
        $(".slider__menu-item_hotasia").find(".slider__menu-item-bg").css("background",  "none")
        $(".slider__menu-item_prof").find(".slider__menu-item-bg").css("background",  "none") */
      } else if ($(this).hasClass("slider__menu-item_hotasia")) {
        $(".slider__menu-item_korean").removeClass("slider__menu-item_korean-active")
        $(".slider__menu-item_hotasia").addClass("slider__menu-item_hotasia-active")
        $(".slider__menu-item_prof").removeClass("slider__menu-item_prof-active")
        /* $(".slider__menu-item_hotasia").find(".slider__menu-item-bg").css("background",  "url(assets/images/menu_hovers/ph_a.jpg)").animate({opacity: 1},{duration:300});
        $(".slider__menu-item_korean").find(".slider__menu-item-bg").css("background",  "none")
        $(".slider__menu-item_prof").find(".slider__menu-item-bg").css("background",  "none") */
      } else if ($(this).hasClass("slider__menu-item_prof")) {
        $(".slider__menu-item_korean").removeClass("slider__menu-item_korean-active")
        $(".slider__menu-item_hotasia").removeClass("slider__menu-item_hotasia-active")
        $(".slider__menu-item_prof").addClass("slider__menu-item_prof-active")
        /* $(".slider__menu-item_prof").find(".slider__menu-item-bg").css("background",  "url(assets/images/menu_hovers/pp_a.jpg)").animate({opacity: 1},{duration:300});
        $(".slider__menu-item_korean").find(".slider__menu-item-bg").css("background",  "none")
        $(".slider__menu-item_hotasia").find(".slider__menu-item-bg").css("background",  "none") */
      }
    })
  },
  "swiperSlider": function() {
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      /* loop: true, */
      slidesPerView: 4,
  
      /* // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      }, */
  
      /* // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }, */
  
      // And if we need scrollbar
      scrollbar: {
        el: '.slider__scroll',
        /* snapOnRelease: true, */
        /* dragClass: "slider__drag", */
        /* draggable: true, */
        dragSize: 30
      },
    })
  }
}

var app = {
  'init': function() {
    func.slick();
    func.headerHover();
    func.socialHover();
    func.readyAnimate();
    func.advantagesAnimate();
    func.sliderMenuHover();
    func.sliderMenuClick();
    func.swiperSlider();
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