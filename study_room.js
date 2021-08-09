study_room_image="";
study_room_status="";
objects=[];
function back(){
    window.location="index.html";
}
function setup(){
    canvas=createCanvas(700,400);
    canvas.center();
    canvas.position(450,400);
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("study_room_status").innerHTML="Status: Detecting Objects";
}
function preload(){
    study_room_image=loadImage("Study Room.jpg");
}
function draw(){
    image(study_room_image,0,0,700,400);
   if(status !=""){
    for(i=0; i<objects.length; i++){
        document.getElementById("study_room_status").innerHTML="Status: Detecting Objects";
        fill("#000000");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label + " " + percent + "%", objects[i].x+15, objects[i].y+15);
        noFill();
        stroke("#000000")
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
} 
} 
}
function modelLoaded(){
    console.log("Model Loaded.");
    study_room_status=true;
    objectDetector.detect(study_room_image,gotResult)
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