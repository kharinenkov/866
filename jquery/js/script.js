$(document).ready(function() {
    $('#popup-wrapper').on('click', () => {
        $('.gift').fadeOut(1000);
        $('#popup-wrapper').fadeOut(500);
    });
    $('.gift').on('click', () => {
        $('.gift').fadeOut(1000);
        $('#popup-wrapper').fadeOut(500);
    });
    $('#get-gift').on('click', () => {
        $('.gift').fadeIn(1000);
        $('#popup-wrapper').fadeIn(500);
    });
});
