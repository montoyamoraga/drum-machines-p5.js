// recreation of a Roland TR-808 using p5.js
// by aaron montoya-moraga
// november 2019

// sequencer variables
let tempo;
let stepCurrent;
let stepNumber = 16;

// drawing variables
let levelNumbers = 12;
let levelDiameter = 12;


function setup() {

    createCanvas(800, 400);

    rectMode(CORNER);
    textAlign(CENTER);

    // black square
    fill(0);
    rect(0, 0, width, height);

    // level knobs
    for (let i = 0; i < levelNumbers; i++) {
        // red ellipse
        fill(255, 0, 0);
        ellipse(25 * width / 100 + 6 * i * width / 100, 25 * height / 100, levelDiameter, levelDiameter);
        // white text
        fill(255, 255, 255);
        textSize(10);
        text("LEVEL", 25 * width / 100 + 6 * i * width / 100, 22 * height / 100);
    }

    // sequencer
    for (let i = 0; i < stepNumber; i++) {
        if (i < 4) {
            fill(255, 0, 0);
        } else if (i < 8) {
            fill(255, 255, 0);
        } else if (i < 12) {
            fill(0, 255, 0);
        } else {
            fill(255, 0, 255);
        }
        rect(10 * width / 100 + 5 * i * width / 100, 80 * height / 100, 10, 20);
    }


    // "Roland" - red letters
    fill(255, 0, 0);
    textSize(20);
    text("Roland", 70 * width / 100, 10 * height / 100);

    // "Rhythm Composer" - red letters
    fill(255, 0, 0);
    textSize(20);
    text("Rhythm Composer   TR-808", 70 * width / 100, 50 * height / 100);

    // "Computer Controlled" - white letters
    fill(255, 255, 255);
    textSize(15);
    text("Computer Controlled", 77 * width / 100, 60 * height / 100);


}

function draw() {





    // sequencer buttons;




}