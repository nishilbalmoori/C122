var speechRec = window.webkitSpeechRecognition;
var recog = new speechRec();
var statusHolder = document.getElementById("status");
var createCircle = false;
var createRectangle = false;
var createSquare = false;

function setup(){
    createCanvas(800,600);
}

function draw(){
    background(255);
    if(createCircle){
        ellipse(width/2, height/2,200,200);
        statusHolder.innerHTML = "Drew a Circle...";
    }
    if(createRectangle){
        rect(width/2,height/2,200,400);
        statusHolder.innerHTML = "Drew a Rectangle...";
    }
    if(createSquare){
        rect(width/2,height/2,200,200);
        statusHolder.innerHTML = "Drew a Square...";
    }
}

function run(){
    statusHolder.innerHTML = "System is listening to you....";
    recog.start();
}

recog.onresult = function(evt){
    console.log(evt);

    var content = evt.results[0][0].transcript;
    statusHolder.innerHTML = "Recognized as " + content;

    if(content == "circle" || "Circle"){
        createCircle = true;
    }
    if(content == "rectangle" || "Rectangle"){
        createRectangle = true;
    }
    if(content == "square" || "Square"){
        createSquare = true;
    }
}