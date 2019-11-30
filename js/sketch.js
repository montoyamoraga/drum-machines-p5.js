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

const instrumentNamesShort = ["AC", "BD", "SD", "LT", "MT", "HT", "RS", "CP",
    "CB", "CY", "OH", "CH", "LC", "MC", "HC", "CL", "MA"
];
const instrumentNamesLong = ["ACcent", "BassDrum", "SnareDrum", "LowTom", "MidTom", "HiTom", "RimShot", "handClaP",
    "CowBell", "CYmbal", "OpenHihat", "ClsdHihat", "LowConga", "MidConga", "HiConga", "CLaves", "MAracas"
];

// color constants
let colorBackground;
let colorStepRed;
let colorStepOrange;
let colorStepYellow;
let colorStepWhite;
let colorTextRed;
let colorTextBlack;
let colorPanelGray;
let colorKnobRed;
let colorKnobWhite;

function setup() {

    createCanvas(widthLarge, heightLarge);

    // initial settings
    rectMode(CORNER);
    ellipseMode(CENTER);
    textAlign(CENTER);

    // define colors
    colorBackground = color(15, 15, 15);
    colorStepRed = color(220, 20, 0);
    colorStepOrange = color(240, 120, 0);
    colorStepYellow = color(220, 220, 0);
    colorStepWhite = color(230, 230, 120);
    colorPanelGray = color(130, 130, 130);
    colorKnobRed = color(230, 80, 0);
    colorKnobWhite = color(220, 220, 220);
    colorKnobBlack = color(30, 30, 30);

    // black square for instrument
    fill(colorBackground);
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

    drawLettersRed();

    drawLettersWhite();

    drawPanelLines();

    drawSequencerPanel();

    drawSequencerSteps();

    drawKnobMasterVolume();

    drawKnobTempo();

}

function draw() {

}

function drawPanelLines() {
    push();
    fill(colorPanelGray);
    stroke(colorPanelGray)
    strokeWeight(4);
    // upper long gray line
    line(5 * width / 100,
        15 * height / 100,
        95 * width / 100,
        15 * height / 100);
    // lower long gray line
    line(5 * width / 100,
        66 * height / 100,
        95 * width / 100,
        66 * height / 100);
    //  left and right long gray lines
    strokeWeight(4);
    line(30 * width / 100,
        15 * height / 100,
        30 * width / 100,
        66 * height / 100);
    line(95 * width / 100,
        15 * height / 100,
        95 * width / 100,
        66 * height / 100);
    for (let i = 1; i <= 11; i++) {
        line((30 + i * 65 / 12) * width / 100,
            15 * height / 100,
            (30 + i * 65 / 12) * width / 100,
            50 * height / 100);
    }
    pop();
}

function drawLettersRed() {
    push();
    fill(255, 0, 0);
    // "Roland" - red letters
    textSize(30);
    text("Roland", 70 * width / 100, 12 * height / 100);
    // "Rhythm Composer TR-808" - red letters
    textSize(20);
    text("Rhythm Composer   TR-808", 70 * width / 100, 55 * height / 100);
    // red line under 
    stroke(255, 0, 0);
    strokeWeight(4);
    line(31 * width / 100,
        57 * height / 100,
        89 * width / 100,
        57 * height / 100);
    pop();
}

function drawLettersWhite() {
    // "Computer Controlled" - white letters
    push();
    fill(255, 255, 255);
    textSize(12);
    text("Computer Controlled",
        76 * width / 100,
        60 * height / 100);
    pop();
}

function drawSequencerPanel() {
    push();
    noStroke();
    rectMode(CORNER);
    fill(colorPanelGray);
    // lower left gray panel
    rect(5 * width / 100,
        68 * height / 100,
        15 * width / 100,
        27 * height / 100);
    // lower left panel under steps 1-12
    rect(20 * width / 100,
        91 * height / 100,
        52 * width / 100,
        4 * height / 100);
    // lower right panel under steps 13-16
    rect(73 * width / 100,
        91 * height / 100,
        20 * width / 100,
        4 * height / 100);
    // lower right panel
    rect(88 * width / 100,
        68 * height / 100,
        7 * width / 100,
        27 * height / 100);
    // 1-12 letters under steps
    fill(0);
    textAlign(CENTER);
    textSize(22);
    for (let i = 0; i < 12; i++) {
        text(i + 1,
            (30 + i * 3.7) * width / 100,
            94 * height / 100);
    }
    // 1-4 letters under steps 13-16
    fill(0);
    textAlign(CENTER);
    textSize(22);
    for (let i = 0; i < 4; i++) {
        text(i + 1,
            (74.5 + i * 3.7) * width / 100,
            94 * height / 100);
    }
    pop();
}

function drawSequencerSteps() {
    push();
    rectMode(CENTER);
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
        rect((30 + 3.7 * i) * width / 100,
            86 * height / 100,
            30,
            50);
        fill(255, 255, 255);
        noStroke();
        textAlign(CENTER);
        textSize(10);
        text(i + 1,
            (30 + 3.7 * i) * width / 100,
            82 * height / 100);
    }
    pop();
}

function drawKnobMasterVolume() {
    push();
    ellipseMode(CENTER);
    noStroke();
    fill(colorKnobBlack);
    ellipse(92 * width / 100,
        57 * height / 100,
        50,
        50);
    fill(92 * width / 100);
    fill(colorPanelGray);
    textSize(7);
    text("MIN",
        90 * width / 100,
        63 * height / 100);
    text("MAX",
        94 * width / 100,
        63 * height / 100);
    text("MASTER VOLUME",
        92 * width / 100,
        65 * height / 100);
    fill(colorPanelGray);
    textSize(7);
    textAlign(CENTER);
    angleMode(RADIANS);
    for (let i = 0; i < 10; i++) {
        text(i + 1,
            92 * width / 100 + 30 * cos(0.75 * PI + i * TWO_PI / 12),
            57 * height / 100 + 30 * sin(0.75 * PI + i * TWO_PI / 12));
    }
    pop();
}

function drawKnobTempo() {
    push();
    ellipseMode(CENTER);
    noStroke();
    fill(colorKnobBlack);
    ellipse(10 * width / 100,
        55 * height / 100,
        90,
        90);
    fill(92 * width / 100);
    fill(colorPanelGray);
    textSize(10);
    textAlign(CENTER);
    angleMode(RADIANS);
    text("TEMPO",
        10 * width / 100,
        45 * height / 100);
    for (let i = 0; i < 10; i++) {
        text(i + 1,
            10 * width / 100 + 57 * cos(0.75 * PI + i * TWO_PI / 12),
            56 * height / 100 + 57 * sin(0.75 * PI + i * TWO_PI / 12));
    }
    pop();
}