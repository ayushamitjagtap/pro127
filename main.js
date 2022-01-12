var song="";
var song2="";
function preload(){
    song=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function setup(){
    Canvas=createCanvas(500,600);
    Canvas.center();
    var  video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,600);
}
function play(){
    song.play();
}
