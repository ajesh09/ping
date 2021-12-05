function preload() {
	setSprites();
	PingPongAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(pingpong);
}

function draw() {
	game()
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(pingpong);
}