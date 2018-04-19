var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var div = document.querySelector("div");
var btn = document.createElement("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getColor(){
	var set = ["a","b","c","d","e","f"];
		for (var i = 0; i < 10; i++) {
		set.push(i);	
		}
	var tint = "#";
		for (var i = 0; i < 6; i++) {
		tint += set[Math.floor(Math.random()*set.length)];
		}	
	return tint;
	return console.log(tint);
}

function setColor(){
	color1.value  = getColor();
	color2.value  = getColor();
	setGradient();
	
}

function createBtn(){
	btn.appendChild(document.createTextNode("Just pick One For Me"));
	btn.classList.add("btn", "btn-outline-light","btn-lg","p5");
	div.appendChild(btn);
}

// To create random button
createBtn()

// To set the background with the colors input.
setGradient();


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener('click', setColor);
