function hideFeed() {
    $('#search').fadeOut();
    $('#container').fadeOut(); 
    setTimeout(function() {
        $('#feed').css('width', '60px');
    },500);
    
}
function showFeed() {
    $('#feed').css('width', '400px');
    setTimeout(function() {
        $('#search').fadeIn();
        $('#container').fadeIn();
    },500);
 
}
var feedStatus = true;
Template.menu.events({
    'click #arrow': function() {
        if(feedStatus){
            feedStatus = false;
            hideFeed();
        }else{
            feedStatus = true;
            showFeed();
        }
    }
});

function feedResize(){
    var feedSize = $(window).height() - $('#top-panel').height();
    $('#feed').height(feedSize);
}   

    Template.menu.rendered = function() {
        feedResize();
    };  


Meteor.startup(function(){
    //alert('bindings are run.');
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
    
    $(window).resize(feedResize);
    
    window.onload=feedResize;
});


