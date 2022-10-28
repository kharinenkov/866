let ul;

$(function(){
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        randomStart: true,
        slideWidth: 1140,
        pause: 6000,
        auto: true
    });
    $(window).resize(function() {
        if ($('.footer').css('flex-direction') === 'row') {
            $('.footer-item ul').removeAttr('style');
            $('.footer-item h4').removeClass('border-bottom');
        }
    });
    $('#nav').click(function() {
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $('nav.header').slideDown({
                duration: 'slow',
                start: function () {
                  $(this).css({
                    display: "flex"
                  })
                }
              });
        } else {
            $('nav.header').slideUp('slow');
        } 
	});
    $('h4').on('click', function() {
        if ($(this).children().css('display') == 'block') {
            ul = $(this).next();
            if (ul.css('display') === 'none') {
                $('.footer-item ul').slideUp('slow');
                $('.footer-item h4').removeClass('border-bottom');
                $(this).not('.border-bottom').addClass('border-bottom');
            }
            ul.slideToggle('slow', () => {
                if (ul.css('display') === 'none') {
                    $(this).removeClass('border-bottom');
                }
            });
        }
    });
    console.log('JQuery is done!'); 
});