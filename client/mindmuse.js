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
    
    function feedResize(){
        var feedSize = $(window).height() - $('#top-panel').height();
        $('#feed').height(feedSize);
    }
    
    $('#arrow').click(function() {
        //$('#feed').hide();   
        //$('#feed').css('margin-left', -400 + "px");
        alert('hola');
    });
    
    
    
    $(window).resize(feedResize);
    
    window.onload=feedResize;
});