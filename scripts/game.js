function game() {

	$('<div/>').attr('id', 'content').appendTo('body');
	$('<div/>').attr('id', 'game').appendTo('#content');
	$('<div/>').attr('id', 'ball').appendTo('#game');
	$('<div/>').attr('id', 'paddleA').appendTo('#game')
	$('<div/>').attr('id', 'paddleB').appendTo('#game')

	var ball = {
		speed: 3,
		x: 290,
		y: 140,
		directionX: 1,
		directionY: 1,
		width: $("#ball").width(),
		height: $("#ball").height()
	};

	var score = {
		playerA: 0,
		playerB: 0
	};

	var pA = {
		speed: 3,
		x1: $('#paddleA').position().left,
		x2: $('#paddleA').position().left + $('#paddleA').width(),
		y1: $('#paddleA').position().top,
		y2: $('#paddleA').position().top + $('#paddleA').height()

	};

	var pB = {
		speed: 3,
		x1: $('#paddleB').position().left,
		x2: $('#paddleB').position().left + $('#paddleB').width(),
		y1: $('#paddleB').position().top,
		y2: $('#paddleB').position().top + $('#paddleB').height()

	};

	console.log(pA, pB);

	$(document).ready(function () {
		// Set main loop to be called on the desired frame rate
		setInterval(gameLoop, 1000 / 60);
	});

	// Main loop of the game
	function gameLoop() {
		moveBall();
	}


	// Control movement of the ball doing collision checking
	function moveBall() {
		var gameWidth = parseInt($("#game").width());
		var gameHeight = parseInt($("#game").height());

		// Check collision to the bottom border and change the moving orientation on Y axis
		if (ball.y + ball.speed * ball.directionY > (gameHeight - parseInt($("#ball").height()))) {
			ball.directionY = -1
		}

		// Check collision to the top border and change the moving orientation on Y axis
		if (ball.y + ball.speed * ball.directionY < 0) {
			ball.directionY = 1
		}

		// Check collision to the left border and change the moving orientation on X axis
		if (ball.x + ball.speed * ball.directionX > (gameWidth - parseInt($("#ball").width()))) {
			ball.directionX = -1
		}

		// Check collision to the right border and change the moving orientation on X axis
		if (ball.x + ball.speed * ball.directionX < 0) {
			ball.directionX = 1
		}

		if (ball.x + ball.speed * ball.directionX < pA.x2 &&
			ball.y + ball.speed * ball.directionY > pA.y1 &&
			ball.y + ball.speed * ball.directionY < pA.y2) {
			ball.directionX = 1
		}

		if (ball.x + ball.speed * ball.directionX + ball.width > pB.x1 &&
			ball.y + ball.speed * ball.directionY > pB.y1 &&
			ball.y + ball.speed * ball.directionY < pB.y2) {
			ball.directionX = -1
		}

		// Update ball position on X and Y axes based on speed and orientation
		ball.x += ball.speed * ball.directionX;
		ball.y += ball.speed * ball.directionY;
		
		// Render the updated ball position
		$("#ball").css({ "left": ball.x, "top": ball.y });


	};

}