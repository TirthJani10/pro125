noseX = 0;
noseY = 0;
difference = 0;
leftWristX=0;
rightWristX=0;
function preload() {

}
function setup() {
    
canvas = createCanvas(500,500);
// canvas.center()
video = createCapture(VIDEO);
video.size(550, 550);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getPoses);
}
function draw() {
background('#fff');
document.getElementById("font_size").innerHTML = "Font Size:" + difference + "px | X position of font = " + floor(noseX) + " Y position of font = " + floor(noseY);
fill('#66CDAA');
stroke('#000');
text('Tirth 😁', noseX, noseY, difference);
textSize(difference);
}
function modelLoaded() {
    console.log("Model Loaded!");
}
function getPoses(results) {

    
        if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + "nose y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist x = " + leftWristX + "right wrist x = " + rightWristX + "difference"+difference);

        }
    }
    
   
