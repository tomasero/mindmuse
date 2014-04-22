$(document).ready(function() {
    $('.button').click(function(){
        $('.panel').hide();
        $('.button').removeClass('active');
        var panel = $(this).parent().attr('href');
        $(panel).fadeIn();
        $(this).addClass('active');
    });
    $('a').click(function(event) {
         event.preventDefault();
    });
    $('.button:first').click();
});