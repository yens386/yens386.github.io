var numOfClicks = 0;


$(".button").mouseup(function() {
    // do stuff...
    numOfClicks++;
    console.log(numOfClicks);
    $("mark").html(numOfClicks);
    $("body").toggleClass("lime");
});