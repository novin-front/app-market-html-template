 $(document).ready(function(){
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



 });