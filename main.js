stats="";

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 299, 299);
}

function start(){
    document.getElementById("status") = "Detecting objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    stats = true;
}