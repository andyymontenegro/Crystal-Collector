// global variables
// --------------------------------------------------------------------------
//crystal variables
var crystal = {
	blue:
	{
		name: "Blue",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
	yellow:
	{
		name: "Yellow",
		value: 0
	}
};
//scores
var currentScore = 0;
var targetScore = 0;

//win/losses

var winCount = 0;
var lossCount = 0;

//functions
// ------------------------------------------------------------------------
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min * 1)) * min;
}

var startGame = function() {
	//reset current score
	 currentScore = 0;

	//set a target score
	targetScore = getRandom(2, 60);

	//set values of crystals between 1-12

	crystal.blue.value 			= getRandom(1, 12);
	crystal.red.value 			= getRandom(1, 12);
	crystal.green.value 		= getRandom(1, 12);
	crystal.yellow.value 		= getRandom(1, 12);

	//change html to reflect the score
	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);

//testing
console.log("--------------------------------------");
console.log("Target Score: " + targetScore);
console.log("Blue: " + crystal.blue.value + " | Green " + crystal.green.value + " | Red " + crystal.red.value + " | Yellow " + crystal.yellow.value);
console.log("--------------------------------------");
}
//responds to clicks on crystals
var addValues = function(crystal) {
	//change current score
	currentScore = currentScore + crystal.value;

	//change current score in the html
	$("#yourScore").html(currentScore);

	//call the check win function
	checkWin();

	//testing
	console.log("Your Score: " + currentScore);
}

//check if user win-loss + reset
var checkWin = function(){
	//check if current score if larger than target score
	if(currentScore > targetScore){
		alert("GAME OVER!");
		console.log("you lost");
		//add to losscount
		lossCount++;
		//change in the html
		$("#lossCount").html(lossCount);
		//restart the game 
		startGame();
	}

	else if (currentScore == targetScore) {
		alert("YOU WIN!");
		console.log("good job");
		//add to wincount
		winCount++;
		//change in the html
		$("#winCount").html(winCount);	

		//restart the game 
		startGame();
	}
}

//main processes 
//----------------------------------
startGame();

$("#blue").click(function() {
	addValues(crystal.blue);
})
$("#green").click(function() {
	addValues(crystal.green);
})
$("#red").click(function() { 
	addValues(crystal.red);
})
$("#yellow").click(function(){
	addValues(crystal.yellow);
});




