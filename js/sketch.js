// recreation of a Roland TR-808 using p5.js
// by aaron montoya-moraga
// november 2019

// sequencer variables
let tempo;
let stepCurrent;
let stepNumber = 16;

// drawing variables and constants
const levelNumbers = 12;
const levelDiameter = 12;
const widthLarge = 1200;
const heightLarge = 720;
const sizeFactor = 1.5;
const widthSmall = widthLarge / sizeFactor;
const heightSmall = heightLarge / sizeFactor;

// color constants
let colorStepRed;
let colorStepOrange;
let colorStepYellow;
let colorStepWhite;
let colorTextRed;
let colorTextBlack;
let colorPanelGray;

function setup() {

    createCanvas(widthLarge, heightLarge);

    // initial settings
    rectMode(CORNER);
    textAlign(CENTER);

    // define colors
    colorStepRed = color(255, 0, 0);
    colorStepOrange = color(255, 255 / 2, 0);
    colorStepYellow = color(255, 255, 0);
    colorStepWhite = color(255, 255, 255);
    colorPanelGray = color(130, 130, 130);

    // black square for instrument
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
            fill(colorStepRed);
        } else if (i < 8) {
            fill(colorStepOrange);
        } else if (i < 12) {
            fill(colorStepYellow);
        } else {
            fill(colorStepWhite);
        }
        rect(10 * width / 100 + 5 * i * width / 100, 80 * height / 100, 10, 20);
    }

    push();
    fill(colorPanelGray);
    stroke(colorPanelGray)
    strokeWeight(4);
    // upper gray line
    line(5 * width / 100, 15 * height / 100, 95 * width / 100, 15 * height / 100);
    // lower gray line
    line(5 * width / 100, 66 * height / 100, 95 * width / 100, 66 * height / 100);
    // 
    strokeWeight(1);
    line(30 * width / 100, 15 * height / 100, 30 * width / 100, 66 * height / 100);
    line(95 * width / 100, 15 * height / 100, 95 * width / 100, 66 * height / 100);
    pop();

    // "Roland" - red letters
    fill(255, 0, 0);
    textSize(20);
    text("Roland", 70 * width / 100, 8 * height / 100);

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