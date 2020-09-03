var mic;
var vol;

function setup() {
    createCanvas(0,0);
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  vol = mic.getLevel();

}

function touchStarted() { getAudioContext().resume(); }
