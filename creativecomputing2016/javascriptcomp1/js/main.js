for (var dots = 0; dots < 960; dots++) {
    $(".wrapper").append("<div class='triangle'></div>");
}

var counter = 0;

$('.triangle').each(function() {
    $(this).html(counter);
    $(this).css("opacity",(counter/960));
    $(this).css("transform","rotate("+ (counter/2000)*360 + "deg)");
    counter++;
});

$(window).scroll(function() {
   $(".triangle").css("transform","rotate("+ $(window).scrollTop() + "deg)");
});