/*
<div class="day">
	<h1>DAY 1</h1>
	<p>4/11/17</p>
</div>
*/

_.each(data, makeHTML);
function makeHTML(individualDay) {
	console.log(individualDay);
	// body...

	var dayText = "DAY " + individualDay.day;
	var dateText = individualDay.date;

	var myDay = document.createElement("div");
	var theLink = document.createElement("a");
	var myDate = document.createElement("p");

	theLink.innerHTML = dayText;

	myDate.innerHTML = dateText;

	myDay.id = individualDay.day;
	myDay.classList.add("day");

	myDay.appendChild(theLink); 
	myDay.appendChild(myDate);

	var wrapper = document.getElementById("wrapper");

	wrapper.appendChild(myDay);


	myDay.addEventListener("click", function(event) {
		displaySingleDay(event);
		
	});

};

function displaySingleDay(the_clicked_event) {
	console.log("day click handler! hello!");

	console.log(the_clicked_event.currentTarget.id);
	var holder = document.getElementById("holder");
	holder.innerHTML = "";
	// make a new holder
	var holder = document.getElementById("holder");
	holder.innerHTML = "DAY " + the_clicked_event.currentTarget.id + " // " + ;

	// create the layout


 	// add to page
}

// var hamburger = document.getElementById("menuToggle");
// hamburger.innerHtml = ""; 

	




// document.querySelector("#nav-toggle")
// addEventListener("click", function() {
// 	this.classList.toggle("active");
// });

// var sortMode = "day";
// var filterMode = "filter"

// var sortSelect = document.getElementsByClassName("day");

// for (var i = 0; i < sortSelect.length; i++) {
// 	sortSelect[i].addEventListener("change", function(e){
// 	if (sortSelect.value == "day") {
// 		sortMode = "day";
// 		update();
// 	};
// });

// var filterSelect = document.getElementsByClassName("filter");
// filterSelect.addEventListener("change", function (e) {
// 	filterMode = filterSelect.value;
// 	update();
// });

// function update() {
// 	var filtered = _.filter(data, function (p) {
// 		return p.type.includes(filterMode);
// 	});

// 	var sorted = _.sortBy(filtered, sortMode);

// 	var wrapper = document.getElementById("wrapper");
// 	wrapper.innerHTML = "";

// 	for (var i = 0; i < sorted.length; i++) {
// 		var day = sorted[i];
// 		var dayText = "DAY " + sorted[i].day;
// 		var dateText = sorted[i].date;

// 		var myDay = document.getElementsByClassName("a");

// 		myDay.addEventListener("click", function() {
// 			displaySingleDay(day);
// 		});

// 		myDay.innerHTML = dayText;

// 		var myDate = document.getElementsByClassName("p");
// 		myDate.innerHTML = dateText;

// 		var myDiv = document.getElementById("wrapper");
// 		myDiv.classList.add("day");

// 		myDiv.appendChild(myDay); 
// 		myDiv.appendchild(myDate);

// 		wrapper.appendChild(myDiv);
// 	}
// }

// function displaySingleDay(day) {
// 	// make a new holder
// 	var myDay = document.getElementById("day");
// 	// create the layout

// 	// add to page
// }
