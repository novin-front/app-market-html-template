 $(document).ready(function(){
        if($(window).scrollTop() >= 80) {
            $("#main-nav-bar-id").addClass("scroll");
            $(".navbar-brand").css({
                width: "75px"
            })
        }
        var top = 0;
        $(window).on('scroll', function () {
             
            if ($(window).scrollTop() >= 80){
                 $("#main-nav-bar-id").addClass("scroll");
                 $(".navbar-brand").css({
                     width: "75px"
                 })
            } else if ($("#main-nav-bar-id").hasClass("scroll") && $(window).scrollTop() <= 80) {
                 $("#main-nav-bar-id").removeClass("scroll");
                 $(".navbar-brand").css({
                     width:"100px"
                 })
            }
            $("#main-nav-bar-id").toggleClass("hide", $(window).scrollTop() > top);
            top = $(window).scrollTop();
        });
        // $(".btn-menu").click(function(){
        //     $(".main-menu-header").slideToggle();
        // })


        $('.slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            rtl: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 40000,
            nextArrow: '<button class="screen-shot-btn btn-right-aw"><i class="fa fa-arrow-right"></i></button>',
            prevArrow: '<button class="screen-shot-btn btn-left-aw"><i class="fa fa-arrow-left"></i></button>',
        });

       
        $(window).on("scroll", function () {
            let windowScroll = $(window).scrollTop()
            let counterUp = $(".app-counter-up-section").offset().top
            if (windowScroll >= counterUp && windowScroll < 1350) {
               cuonUpFunction();
            }
        })
       function cuonUpFunction (){
           $('.counter').each(function () {
               var $this = $(this);
               var countTo = $this.attr('data-count');

               $({
                   countNum: $this.text()
               }).animate({
                       countNum: countTo
                   },

                   {

                       duration: 2000,
                       easing: 'linear',
                       step: function () {
                           $this.text(Math.floor(this.countNum));
                       },
                       complete: function () {
                           $this.text(this.countNum + " + ");
                           //alert('finished');
                       }

                   });
           });
       }





 });