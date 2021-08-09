bedroom_image="";
bedroom_status="";
objects=[];
function back(){
    window.location="index.html";
}
function setup(){
    canvas=createCanvas(700,450);
    canvas.center();
    canvas.position(450,400);
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("bedroom_status").innerHTML="Status: Detecting Objects";
}
function preload(){
    bedroom_image=loadImage("Bedroom.jpg");
}
function draw(){
    image(bedroom_image,0,0,700,450);
   if(status !=""){
    for(i=0; i<objects.length; i++){
        document.getElementById("bedroom_status").innerHTML="Status: Detecting Objects";
        fill("#ffffff");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label + " " + percent + "%", objects[i].x+15, objects[i].y+15);
        noFill();
        stroke("#ffffff")
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
} 
} 
}
function modelLoaded(){
    console.log("Model Loaded.");
    bedroom_status=true;
    objectDetector.detect(bedroom_image,gotResult)
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    if(results){
        console.log(results);
        objects=results;
    }
}