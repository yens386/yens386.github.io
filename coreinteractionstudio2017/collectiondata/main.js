//put single day informtion in holder
//create a back button and put on each page
//make a function to go back to homepage (_.each(data, makeHTML))

_.each(data, makeHTML);


function makeHTML(individualDay) {
	//console.log(individualDay);

	var dayText = "DAY " + individualDay.day;
	var dateText = individualDay.date;
	var dayDateText = individualDay.dayDate;

	var myDay = document.createElement("div");
	var theLink = document.createElement("a");
	var myDate = document.createElement("p");

	theLink.innerHTML = dayText;

	myDate.innerHTML = dateText;

	myDay.id = individualDay.day;
	myDay.classList.add("day");

	var total = data.length;
	var thisOne = individualDay.day;
	var hue = (thisOne / total) * 360;
	individualDay["color"] = "background-color:hsl(" + hue + ",70%,60%)";
	console.log(data);

	myDay.style.cssText = individualDay.color;

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

	console.log(day.transactions);

	var wrapper = document.getElementById("wrapper");
	wrapper.innerHTML = "";

	var singleDay = document.createElement("h1");
	singleDay.innerHTML = "DAY " + day.day + " // " + day.dayDate;
	singleDay.classList.add("title");
	wrapper.appendChild(singleDay);

	wrapper.style.cssText = day.color;

	var theTransaction = document.createElement("div");

			var theTitle = document.createElement("h2");
			var titleText = "WHAT " + " AMOUNT " + " WHERE " + " TIME " + " PEOPLE ";
			theTitle.classList.add("header");
			theTitle.innerHTML = titleText;
			theTransaction.appendChild(theTitle);


	if (typeof day.transactions !== "undefined") {
		for (var i=0; i<day.transactions.length;i++) {
			var transaction = day.transactions[i];

			myWhat = document.createElement("p");
			var whatText = transaction.what;
			myWhat.innerHTML = whatText;

			myAmount = document.createElement("p");
			var amountText = transaction.amount;
			myAmount.innerHTML = amountText;

			myWhere = document.createElement("p");
			var whereText = transaction.where;
			myWhere.innerHTML = whereText;

			myTime = document.createElement("p");
			var timeText = transaction.time;
			myTime.innerHTML = timeText;

			myPeople = document.createElement("p");
			var peopleText = transaction.people;
			myPeople.innerHTML = peopleText;

			theTransaction.classList.add("transaction");
			
			theTransaction.appendChild(myWhat);
			theTransaction.appendChild(myAmount);
			theTransaction.appendChild(myWhere);
			theTransaction.appendChild(myTime);
			theTransaction.appendChild(myPeople);

			wrapper.appendChild(theTransaction);


		}
	}	

	var placeWrap = document.createElement("div");
	placeWrap.classList.add("placeWrap");

		var placesIWent = document.createElement("h2");
		var iWentText = "PLACES I WENT";
		placesIWent.classList.add("places");
		placesIWent.innerHTML = iWentText;
		placeWrap.appendChild(placesIWent);

	var map = document.createElement("img");
	map.src = "images/day" + day.day + ".png";
	wrapper.appendChild(map);

	for (var i=0; i<day.places.length;i++) {
		var place = day.places[i];
		var thePlace = document.createElement("p");
		thePlace.innerHTML = place;

		thePlace.classList.add("place");

		placeWrap.appendChild(thePlace);
		wrapper.appendChild(placeWrap);
	}

	var peopleWrap = document.createElement("div");
	peopleWrap.classList.add("peopleWrap");

		var peopleISaw = document.createElement("h2");
		var iSawText = "PEOPLE I SAW";
		peopleISaw.classList.add("people");
		peopleISaw.innerHTML = iSawText;
		peopleWrap.appendChild(peopleISaw);

	for (var i=0; i <day.people.length;i++) {
		var people = day.people[i];
		var thePeople = document.createElement("p");
		thePeople.innerHTML = people;

		thePeople.classList.add("people");

		peopleWrap.appendChild(thePeople);
		wrapper.appendChild(peopleWrap);
	}

	var total = document.createElement("h2");
	total.innerHTML = day.total;
	total.classList.add("total");
	wrapper.appendChild(total);

	var backButton = document.createElement("h3");
	var goBack = "GO BACK";
	backButton.classList.add("back");
	backButton.innerHTML = goBack;
	wrapper.appendChild(backButton);

	backButton.addEventListener("click", function() {
		makeHTML(individualday);
	});
 };
