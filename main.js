//<script type="text/javascript">

//Global Variables
var painted;
var content;
var winningCombinations;
var turn = 0;
var myCanvas;
var c;
var context;
var squaresFilled = 0;
var w;
var y;

//Instanciate Arrays
window.onload=function(){
	
	painted = new Array();
	content = new Array();
	winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

	for(var l = 0; l <= 8; l++){
	painted[l] = false;
	content[l]='';
	}
}

//Game methods
function canvasClicked(canvasNumber){
	myCanvas = "canvas"+canvasNumber;
	c = document.getElementById(myCanvas);
	context = c.getContext("2d");

	if(painted[canvasNumber-1] ==false){
		if(turn%2==0){
			context.beginPath();
			context.moveTo(25,25);
			context.lineTo(225,225);
			context.moveTo(225,25);
			context.lineTo(25,225);
			context.lineWidth=10;
			context.strokeStyle="red";
			context.stroke();
			context.closePath();
			content[canvasNumber-1] = 'X';
		}

		else{
			context.beginPath();
			context.arc(125,125,100,0,Math.PI*2,true);
			context.lineWidth=10;
			context.strokeStyle="blue";
			context.stroke();
			context.closePath();
			content[canvasNumber-1] = 'O';
		}

		turn++;
		painted[canvasNumber-1] = true;
		squaresFilled++;
		checkForWinners(content[canvasNumber-1]);

		if(squaresFilled==9){
			alert("The game is over!");
			location.reload(true);
		}
	
	}
	else{
		alert("That Space is already occupied!");
	}

}

function checkForWinners(symbol){
	
	for(var a = 0; a < winningCombinations.length; a++){
	if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==	symbol&&content[winningCombinations[a][2]]==symbol){
		alert(symbol+ " Won!");
		playAgain();
	}
	}

}

function playAgain(){
	y=confirm("Play Again?");
	if(y==true){
		location.reload(true);
	}
	else{
		alert("Bye!");
}

}
