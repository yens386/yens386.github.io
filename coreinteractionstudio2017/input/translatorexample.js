var wrapper = document.querySelector(".circle");

for (i = 0;i < 23; i++) {
	console.log(i);
	var divtoinsert = document.createElement("div");
	divtoinsert.classList.add("box", "divnumber" + i);
	wrapper.appendChild(divtoinsert);
}