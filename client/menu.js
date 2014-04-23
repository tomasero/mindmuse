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

