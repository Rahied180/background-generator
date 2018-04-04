var body = document.querySelector("body");
var h2 = document.querySelector("h2");
var h3 = document.querySelector("h3");
var colorLeft = document.querySelector(".colorLeft");
var colorRight = document.querySelector(".colorRight");
var random = document.querySelector("button");

colorLeft.addEventListener("input", changeColor);
colorRight.addEventListener("input", changeColor);

random.addEventListener("click", function(){
	var color1 = generateRandomColor();
	var color2 = generateRandomColor();
	body.style.background = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
	changeText();
})

function changeColor() {
	body.style.background = "linear-gradient(to right, " + colorLeft.value + ", " + colorRight.value + ")";
	changeText();
}

function generateRandomColor() {
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function changeText() {
	h2.textContent = "Current CSS Background:";
	h3.textContent = body.style.background + ";";
}