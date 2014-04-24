function hideFeed() {
    $('#search').fadeOut("fast");
    $('#container').fadeOut("fast"); 
    setTimeout(function() {
        $('#feed').css('width', '60px');
        slideProjectLeft();
    },500);
}

function slideProjectLeft() {
    $('#project').css('margin-left', '60px');
}

function showFeed() {
    $('#feed').css('width', '400px');
    slideProjectRight();
    setTimeout(function() {
        $('#search').fadeIn("fast");
        $('#container').fadeIn("fast");
    },500);
}

function slideProjectRight() {
    $('#project').css('margin-left', '400px');
}

var feedStatus = true;
var svgStatus = false;

Template.menu.events({
    'click #arrow': function() {
        if(feedStatus){
            feedStatus = false;
            hideFeed();
        }else{
            feedStatus = true;
            showFeed();
        }
    },
    'click .left': function() {
        if(!svgStatus){
            svgStatus = true;
            $('.up').css('fill','green');
        }else{
            svgStatus = false;
            $('.up').css('fill','black');
        }
    }
    
});

