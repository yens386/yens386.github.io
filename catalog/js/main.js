
// are you sure? 
$('.item').on('mouseover', function() {
    var color = $(this).data('color');
    var colorTwo = $(this).data('color-Two');
    
    $('.triangle-up').each(function() {
        if($(this).hasClass('hide')) {
           console.log('lol')
        } else {
            $(this).css('border-bottom', '80px solid' + color);
        }
    })
    
    $('.triangle-down').each(function() {
        if($(this).hasClass('hide')) {
            console.log('lol')
        } else {
            $(this).css('border-top', '80px solid' + color);       
        }
    })
         
});


