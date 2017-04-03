document.getElementById("circle").addEventListener("click", onCircleClick)
	

function onCircleClick(event) {
	console.log(event.target)
	document.getElementById("circle");
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

document.getElementById("triangleup").addEventListener("click", onTriangleUpClick)

function onTriangleUpClick(event) {
	console.log(event.target)
	document.getElementById("triangleup");
	// var box = document.getElementById("circle")

	for (i = 0; i < 25; i++) {
		// make a new div (createElement)
		var newDiv = document.createElement("div");
		
		// add a classname of circle to the div (or whatever was clicked)
		newDiv.classList.add("triangleup")
		// randomize position
		// set a random top position
		newDiv.style.top = Math.random () * 1580 + 50 + "px";
		// set a random left position
		newDiv.style.left = Math.random () * 1580;
		
		// add element to document
		document.body.appendChild(newDiv)
	}
}

document.getElementById("rectangle").addEventListener("click", onRectangleClick)

function onRectangleClick(event) {
	console.log(event.target)
	document.getElementById("rectangle");
	// var box = document.getElementById("circle")

	for (i = 0; i < 25; i++) {
		// make a new div (createElement)
		var newDiv = document.createElement("div");
		
		// add a classname of circle to the div (or whatever was clicked)
		newDiv.classList.add("rectangle")
		// randomize position
		// set a random top position
		newDiv.style.top = Math.random () * 1580 + 50 + "px";
		// set a random left position
		newDiv.style.left = Math.random () * 1580;
		
		// add element to document
		document.body.appendChild(newDiv)
	}
}

document.getElementById("triangledown").addEventListener("click", onTriangledownClick)

function onTriangledownClick(event) {
	console.log(event.target)
	document.getElementById("triangledown");
	// var box = document.getElementById("circle")

	for (i = 0; i < 25; i++) {
		// make a new div (createElement)
		var newDiv = document.createElement("div");
		
		// add a classname of circle to the div (or whatever was clicked)
		newDiv.classList.add("triangledown")
		// randomize position
		// set a random top position
		newDiv.style.top = Math.random () * 1580 + 50 + "px";
		// set a random left position
		newDiv.style.left = Math.random () * 1580;
		
		// add element to document
		document.body.appendChild(newDiv)
	}
}
