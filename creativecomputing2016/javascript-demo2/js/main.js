console.log("Hello World");

$("body").css("background-color","black");

var hasClicked = false;

$("button").click(function() {
    console.log(hasClicked);
    $("body").css("background-color","red");
    hasClicked = true;
});

for (var i = 0; i < 100; i++) {
    $("body").append("<div class='go'></div>");
}

var counter = 0;

$("go").each(function() {
    console.log(counter);
    console.log("found a div with class go...");
    $(this).css("border-radius", counter + "%");
    counter++;
})

$(".go").click(function() {
   console.log("you clicked it...");
   $(this).css("background-color", "lime");
   $(this).html("hello");
   
});
