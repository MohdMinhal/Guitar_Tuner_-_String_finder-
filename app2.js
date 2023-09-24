const model_url =
  'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

let pitch;
let audioContext;
let mic;
let freq = 0;

function setup() {
  createCanvas(windowWidth-600, windowHeight-100);
}

function off() {
  document.getElementById("overlay").style.display = "none";
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);
  audioContext.resume();
}

function listening(){
  console.log('listening');
  pitch = ml5.pitchDetection(
  model_url,
  audioContext,
  mic.stream,
  modelLoaded);
}

function gotPitch(error, frequency){
  if (error){
    console.error(error);
  } else{
    if (frequency){
      freq = frequency;
    }
    console.log(freq);
  }
  pitch.getPitch(gotPitch);
}

function modelLoaded(){
  console.log('model loaded!');
  pitch.getPitch(gotPitch);
}

function draw (){
  background(0)
  stroke(255);
  textAlign(LEFT,CENTER);
  textSize(40);
  text('Pitch = '+freq.toFixed(2),25,windowHeight-125);

  if(freq >= 80.41 && freq <= 84.41){
    stroke(255);
    text('String = E(low)',325,windowHeight-125);}
  if(freq >= 108.00 && freq <= 112.00){
    stroke(255);
    text('String = A',325,windowHeight-125);}
  if(freq >= 144.83 && freq <= 148.83){
    stroke(255);
    text('String = D',325,windowHeight-125);}
  if(freq >= 194.00 && freq <= 198.00){
    stroke(255);
    text('String = G',325,windowHeight-125);}
  if(freq >= 244.94 && freq <= 248.94){
    stroke(255);
    text('String = B',325,windowHeight-125);}
  if(freq >= 327.63 && freq <= 331.63){
    stroke(255);
    text('String = E(high)',325,windowHeight-125);}
  
  if (freq != 327.63){
    stroke(255);
    text('String = ',325,windowHeight-125);
  }
}