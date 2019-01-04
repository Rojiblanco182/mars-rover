// Rover Object Goes Here
// ======================
var rover = {
  direction: 'N', //default direction
	x: 0, //horizontal
	y: 0, //vertical
	travelLog: []
};

// Grid
var gridSize = {
	x: 10,
	y: 10
};

var grid = [];

//function to generate a bidimensional array

function generateGrid(grid, gridSize, rover) {
  for (var i = 0; i < gridSize.x; i++) {
    grid[i] = [];//this will create another array inside grid
    for (var j = 0; j < gridSize.y; j++) {
				grid[i][j] = null; //no initial content inside the cells.
		}
	}
	grid[0][0] = 'rov'; //to show the rover's starting point, so that the user can see where it is in order to move it.
}

generateGrid(grid, gridSize, rover); //to initialize the grid
console.table(grid);
console.log("Please insert your command. Left = 'l', Right ='r', Forward = 'f' and Backwards = 'b'. Example: doCommands('lfffrff').");

//Function to move forward
function moveForward(rover, grid) {
	switch(rover.direction) {
		case 'N':
			rover.y--;
			break;
		case 'E':
			rover.x++;
			break;
		case 'S':
			rover.y++;
			break;
		case 'W': 
			rover.x--;
			break;
	}
}

//Function to move backwards
function moveBackwards(rover, grid) {
	switch(rover.direction) {
		case 'N':
			rover.y++;
			break;
		case 'E':
			rover.x--;
			break;
		case 'S':
			rover.y--;
			break;
		case 'W':
			rover.x++;
			break;
	}
}

//Function to turn left

function turnLeft (rover){
	switch(rover.direction){
		case 'N': 
			rover.direction = 'W';
			break;
		case 'E':
			rover.direction ='N';
			break;
		case 'S':
			rover.direction = 'E';
			break;
		case 'W':
			rover.direction = 'S';
			break;
	}
}

//Function to turn right

function turnRight(rover) {
	switch(rover.direction) {
		case 'N': 
			rover.direction = 'E';
			break;
		case 'E':
			rover.direction = 'S';
			break;
		case 'S':
			rover.direction = 'W';
			break;
		case 'W':
			rover.direction = 'N';
			break;
	}
}

//function to execute the commands given by the user

var command = '';
function doCommands (command) {
	for (var i = 0; i < command.length; i++) {
		switch(command[i]) {
			case 'f':
				console.log("moveForward was called");
				moveForward(rover, grid);
				console.log("New position: " + rover.x + ", " + rover.y);
				showMovements(rover, grid);
				break;
			case 'b':
        console.log("moveBackwards was called");
				moveBackwards(rover, grid);
				console.log("New position: " + rover.x + ", " + rover.y);
				showMovements(rover, grid);
				break;
			case 'l':
				console.log("turnLeft was called!");
				turnLeft(rover);
				break;
			case 'r':
				console.log("turnRight was called!");
				turnRight(rover);
				break;
			default:
				console.log("Invalid command. Please try again.");
				break;
		}
	}
	console.table(grid); //to show the grid once the movements have been done.
}

//function to show the rover's movements on the map
function showMovements(rover, grid) {
	var newX = rover.x;
	var newY = rover.y;
	grid[newY][newX] = 'X'; 
}
// ======================
