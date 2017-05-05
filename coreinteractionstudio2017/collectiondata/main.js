//put single day informtion in holder
//create a back button and put on each page
//make a function to go back to homepage (_.each(data, makeHTML))

_.each(data, makeHTML);


function makeHTML(individualDay) {
	//console.log(individualDay);
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
		displaySingleDay(individualDay);
		
	});

};

function displaySingleDay(day) {
	console.log("day click handler! hello!");

	console.log(day);
	var wrapper = document.getElementById("wrapper");
	wrapper.innerHTML = "";
	// make a new holder
	
	var holder = document.getElementById("holder");
	// holder.innerHTML = "DAY " + day.day + " // " day.date;

	// create the layout


 // 	add to page

 };

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
