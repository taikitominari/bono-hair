'use strict';
{
// スクロール
    $(function(){
        $('a').click(function(){
            let speed = 800;
            let href= $(this).attr("href");
            let target = $(href == "#" || href == "" ? 'html' : href);
            let position = target.offset().top;
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
            let targetElement = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            
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
        let w = $(window).width();
        if(w < 780) {
            $("body").removeClass("open-menu");
        }
    });
}
