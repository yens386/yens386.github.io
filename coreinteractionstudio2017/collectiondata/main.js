/*

<div class="day">
	<h1>DAY 1</h1>
	<p>4/11/17</p>

</div>

*/

for (var i = 0; i < sorted.length; i++) {
	var day = sorted[i];
	var dayText = "DAY " + sorted[i].day;
	var dateText = sorted[i].date;

	var myDay = document.createElement("a");
	
	myDay.addEventListener("click", function() {
		displaySingleDay(day);
	});

	myDay.innerHTML = dayText;

	var myDate = document.createElement("p");
	myDate.innerHTML = dateText;



	var myDiv = document.createElement("div");
	myDiv.classList.add("day");

	myDiv.appendChild(myDay); 
	myDiv.appendchild(myDate);
	
	wrapper.appendChild(myDiv);
}

function displaySingleDay(day) {
	// make a new holder
	// create the layout
	// add to page
}
