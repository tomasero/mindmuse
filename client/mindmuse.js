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
    

    
    function hideFeed() {
        $('#search').hide();
    }
    
    $('#logo').click(hideFeed);
    
    
    
    $(window).resize(feedResize);
    
    window.onload=feedResize;
});