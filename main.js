function preload(){

}
function setup(){
  canvas=createCanvas(450,400);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  posenet=ml5.posenet(video,modelLoaded);
  posenet.on('pose',gotpose);
}

function draw(){
  image(video, 0, 0, 500, 400);
}

function takesnapshot(){
    
}

function modelLoaded(){
  console.log('posenet is initialized');
}

function gotpose(results){
  if(results.length > 0){
    console.log(results);
    console.log("nosex = " +results[0].pose.nose.x);
    console.log("nosey = " +results[0].pose.nose.y);
  }
}