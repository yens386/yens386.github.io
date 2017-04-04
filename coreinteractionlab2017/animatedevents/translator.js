document.getElementById("color3").addEventListener("click", onOrangeClick)
    

function onOrangeClick(event) {
    console.log(event.target)
    document.getElementById("color3");
    // var box = document.getElementById("circle")

    for (i = 0; i < 25; i++) {
        // make a new div (createElement)
        var newDiv = document.createElement("div");
        
        // add a classname of circle to the div (or whatever was clicked)
        newDiv.classList.add("circle")
        // randomize position
        // set a random top position
        newDiv.style.top = Math.random () * 1580 + 50 + "px";
        // set a random left position
        newDiv.style.left = Math.random () * 1580;
        
        // add element to document
        document.body.appendChild(newDiv)
    }
}