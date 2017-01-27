for (var dots = 0; dots < 896; dots++) {
    $(".wrapper").append("<div class='triangle'></div>");
}

var counter = 0;

$('.triangle').each(function() {
    $(this).css("transform","rotate("+ (counter/2000)*300 + "deg)");
    counter++;
});

$('.triangle').click(function() {
 $(this).css("border-bottom","20px","solid black");

})

$(window).scroll(function() {
   $(".triangle").css("transform","rotate("+ $(window).scrollTop() + "deg)");
});