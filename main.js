function preload() {
	//world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");

	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on("pose",gotPoses);
}

function modelLoaded(){
	console.log("model Loaded");
	//document.getElementById("STATUS").innerHTML = "Model is Loaded";
}

function gotPoses(result){

	if(result.length>0){
		console.log(result);
		noseX = result[0].pose.nose.x;
		noseY = result[0].pose.nose.y;

		console.log(noseX);
		console.log(noseY);
	}

      
	
}

//Half of X is 400, Half of Y is 200

function draw() {
	game()
	
}






