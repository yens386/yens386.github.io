$("body").css("background-color","red");

for (var dots = 0; dots < 99; dots++) {
    $(".wrapper").append("<div class='circle'></div>)");
}



var counter = 1;
var cats = [img/cat.jpg]

for (var i = 0; i < 10; i++) {
    $(".wrapper").append("<div class='circle'></div>)");
}

$(".circle").each(function() {
    //this code runs for each instance of circle/
    console.log(counter);
    $(this).html(counter);
    $(this).css("opacity",(counter/100));
    $(this).css("height",(100+counter));
    $(this).css("width",(100+counter));
    $(this).css("font-size",(counter));
    $(this).css("transform","rotate("+ (counter/100)*360 + "deg)");
    $(this).css("top", Math.floor(Math.random()*$(window).height()));
    $(this).css("left", Math.floor(Math.random()*$(window).width()));
    counter++;
    
});

$(window).resize(function() {
    $(".circle").each(function(){
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        var newTop = Math.floor(Math.random)
        var newLeft = Math.floor(Math.random)
        $(this).css("top", newTop);
        $(this).css("left", newLeft);
    }
});


