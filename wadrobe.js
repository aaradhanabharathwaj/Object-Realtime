wadrobe_image="";
wadrobe_status="";
objects=[];
function back(){
    window.location="index.html";
}
function setup(){
    canvas=createCanvas(700,400);
    canvas.center();
    canvas.position(450,400);
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("wadrobe_status").innerHTML="Status: Detecting Objects";
}
function preload(){
    wadrobe_image=loadImage("Wadrobe.jpg");
}
function draw(){
    image(wadrobe_image,0,0,700,400);
   if(status !=""){
    for(i=0; i<objects.length; i++){
        document.getElementById("wadrobe_status").innerHTML="Status: Detecting Objects";
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
    wadrobe_status=true;
    objectDetector.detect(wadrobe_image,gotResult)
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