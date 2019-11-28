// recreation of a Roland TR-808 using p5.js
// by aaron montoya-moraga
// november 2019

// sequencer variables
let tempo = 90;
let stepCurrent = 0;
const stepNumber = 16;

// drawing variables and constants
const levelNumbers = 12;
const levelDiameter = 18;
const widthLarge = 1200;
const heightLarge = 720;
const sizeFactor = 1.5;
const widthSmall = widthLarge / sizeFactor;
const heightSmall = heightLarge / sizeFactor;

const instrumentNamesShort = ["AC", "BD", "SD", "LT", "MT", "HT", "RS", "CP", "CB", "CY", "OH", "CH", "LC", "MC", "HC", "CL", "MA"];
const instrumentNamesLong = ["ACcent", "BassDrum", "SnareDrum", "LowTom", "MidTom", "HiTom", "RimShot", "handClaP", "CowBell", "CYmbal", "OpenHihat", "ClsdHihat", "LowConga", "MidConga", "HiConga", "CLaves", "MAracas"];

// color constants
let colorStepRed;
let colorStepOrange;
let colorStepYellow;
let colorStepWhite;
let colorTextRed;
let colorTextBlack;
let colorPanelGray;
let colorKnobRed;

function setup() {

    createCanvas(widthLarge, heightLarge);

    // initial settings
    rectMode(CORNER);
    ellipseMode(CENTER);
    textAlign(CENTER);

    // define colors
    colorStepRed = color(255, 0, 0);
    colorStepOrange = color(255, 255 / 2, 0);
    colorStepYellow = color(255, 255, 0);
    colorStepWhite = color(255, 255, 255);
    colorPanelGray = color(130, 130, 130);
    colorKnobRed = color(255, 0, 0);

    // black square for instrument
    fill(0);
    rect(0, 0, width, height);

    // level knobs
    push();
    for (let i = 0; i < levelNumbers; i++) {
        // red ellipse
        fill(colorKnobRed);
        ellipse((30 + (i + 0.5) * 65 / 12) * width / 100, 25 * height / 100, levelDiameter, levelDiameter);
        // white text
        fill(255, 255, 255);
        textSize(8);
        text("LEVEL", (30 + (i + 0.5) * 65 / 12) * width / 100, 23 * height / 100);
    }
    pop();

    // sequencer
    push();
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
        rect(10 * width / 100 + 5 * i * width / 100, 80 * height / 100, 20, 40);
    }
    pop();

    push();
    fill(colorPanelGray);
    stroke(colorPanelGray)
    strokeWeight(4);
    // upper long gray line
    line(5 * width / 100, 15 * height / 100, 95 * width / 100, 15 * height / 100);
    // lower long gray line
    line(5 * width / 100, 66 * height / 100, 95 * width / 100, 66 * height / 100);
    //  left and right long gray lines
    strokeWeight(1);
    line(30 * width / 100, 15 * height / 100, 30 * width / 100, 66 * height / 100);
    line(95 * width / 100, 15 * height / 100, 95 * width / 100, 66 * height / 100);
    for (let i = 1; i <= 11; i++) {
        line((30 + i * 65 / 12) * width / 100,
            15 * height / 100,
            (30 + i * 65 / 12) * width / 100,
            50 * height / 100);
    }
    pop();

    // "Roland" - red letters
    push();
    fill(255, 0, 0);
    textSize(30);
    text("Roland", 70 * width / 100, 12 * height / 100);
    pop();

    // "Rhythm Composer" - red letters
    push();
    fill(255, 0, 0);
    textSize(20);
    text("Rhythm Composer   TR-808", 70 * width / 100, 55 * height / 100);
    pop();

    // "Computer Controlled" - white letters
    push();
    fill(255, 255, 255);
    textSize(15);
    text("Computer Controlled", 77 * width / 100, 60 * height / 100);
    pop();

}

function draw() {


    // sequencer buttons;


}