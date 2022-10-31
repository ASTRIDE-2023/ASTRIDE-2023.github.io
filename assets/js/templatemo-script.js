
/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {
    /* FlexSlider */
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false
    });

    $(".rotate").textrotator();

    new WOW().init();
});

$(window).resize(function () {
    var height = $('.navbar').height();
    $('#home').css({
        'padding-top': height
    });
}).trigger('resize');

$(function () {
    $('nav a').click(function () {
        console.log($.attr(this, 'href'))
        $('body, html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.navbar').height()
        }, 500);
        return false;
    });
});

$(function () {
    $('#program a').click(function () {
        console.log($.attr(this, 'href'))
        $('body, html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - $('.navbar').height()
        }, 500);
        return false;
    });
});