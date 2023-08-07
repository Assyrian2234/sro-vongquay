$(".btn_mboli").click(function() {
  $(this).toggleClass( "ac_show" );
  $(".ls_menutop").toggleClass( "ac_show" );
});




$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.btn_totop').slideDown();
        } else {
            $('.btn_totop').slideUp();
        }
    });
    $('.btn_totop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 200);
        return false;
    });
});
