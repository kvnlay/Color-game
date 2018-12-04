var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeBtn = document.querySelectorAll(".modeBtn");


init();

function init() {
	setUpSquares();
	selectMode();
	reset();
}


function selectMode(argument) {
	for (var i = 0; i < modeBtn.length; i++) {
		modeBtn[i].addEventListener("click", function() {
			modeBtn[0].classList.remove("active");
			modeBtn[1].classList.remove("active");
			this.classList.add("active");
			this.textContent === "easy" ? numSquares = 3: numSquares = 6;
			reset();


		})
	}	
}

function setUpSquares() {
	for (var i = 0; i < squares.length; i++) {
	// squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				message.textContent = "correct!";
				resetButton.textContent = "play again?";
				changeColor(clickedColor);
				h1.style.backgroundColor = pickedColor;
			}	
			else {
				this.style.backgroundColor = "#232323";
				message.textContent = "try again";
			}
		});
	}
// resetInstance()
}

function resetInstance() {
	resetButton.addEventListener("click", function() {
	reset();

	});
}

function reset() {
	colors = randomColorsArray(numSquares);

	pickedColor = pickRand();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "new colors";
	message.textContent = " ";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else{
			squares[i].style.display = "none";
		}

	}
	h1.style.backgroundColor = "steelblue";
}
resetInstance()

function changeColor(color) {

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickRand() {

	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function randomColorsArray(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
	return rgb;
}















