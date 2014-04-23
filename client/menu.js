Template.menu.events({
    'click #arrow': function() {
        alert('hola');
    }
});


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
    
    
    
    function hideFeed() {
        $('#search').hide();
    }
    
    $('#logo').click(hideFeed);

});

