Template.index.events({
    'click .button': function(event) {
        $('.panel').hide();
        $('.button').removeClass('active');
        var panel = $(event.target).parent().attr('href');
        console.log(panel);
        $(panel).fadeIn();
        $(this).addClass('active');
    },
    'click a': function(event) {
        event.preventDefault();
    }
});
