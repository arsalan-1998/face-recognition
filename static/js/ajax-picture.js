$(function() {
    $('#picture').bind('click', function() {
        $.ajax({ 
            url: '/picture', 
            type: 'POST', 
            success: function(){ 
                console.log('opening camera'); 
            } 
        });
    });
});