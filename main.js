song1="";

song2="";

left_wrist_x=0;

left_wrist_y=0;

right_wrist_x=0;

right_wrist_y=0;

function preload(){
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}

function setup(){
canvas=createCanvas(400,350);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotPoses);
}

function modelloaded(){
console.log("Modal is Loaded!");
}

function draw(){
image(video,0,0,400,350);
}

function gotPoses(results){
if(results.length>0){
console.log(results);

right_wrist_x=results[0].pose.rightWrist.x;
right_wrist_y=results[0].pose.rightWrist.y;
console.log(right_wrist_x,right_wrist_y);

left_wrist_x=results[0].pose.leftWrist.x;
left_wrist_y=results[0].pose.leftWrist.y;
console.log(left_wrist_x,left_wrist_y);
}
}