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