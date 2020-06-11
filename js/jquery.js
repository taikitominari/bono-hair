'use strict';
{
// スクロール
    $(function(){
        $('a').click(function(){
            var speed = 800;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
    });

// fadein
    $(function() {
        setTimeout(function(){
            $('.top-fadein').fadeIn(800);
        },300);
    });

    $(function() {
    $(window).scroll(function (){
        $('.fadein').each(function() {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll > targetElement - windowHeight + 300){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
    });
// h-menu 項目選択したら閉じる
    $('.m-item').click(function() {
        $("body").removeClass("open-menu");
    });

// width780でメニュー閉じる
    $(window).on("resize", function() {
        var w = $(window).width();
        if(w < 780) {
            $("body").removeClass("open-menu");
        }
    });
}
