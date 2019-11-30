// recreation of a Roland TR-808 using p5.js
// by aaron montoya-moraga
// november 2019

// sequencer variables
let tempo = 90;
let stepCurrent = 0;
const stepNumber = 16;

// drawing variables and constants
const widthInstrument = 1200;
const heightInstrument = 720;
const instrumentKnobsDiameter = 18;
const instrumentSwitchWidth = 20;
const instrumentSwitchHeight = 30;
const instrumentLabelWidth = 55;
const instrumentLabelHeight = 20;
const instrumentLabelRadius = 4;
const buttonStartStopWidth = 75;
const buttonStartStopHeight = 50;

const instrumentNamesShort = ["AC", "BD", "SD", "LT", "MT", "HT", "RS", "CP",
    "CB", "CY", "OH", "CH", "LC", "MC", "HC", "CL", "MA"
];

const instrumentNamesRows = [
    ["-", "-", "-", "LowConga", "MidConga", "HiConga", "CLaves", "MAracas", "-", "-", "-", "-"],
    ["ACcent", "BassDrum", "SnareDrum", "LowTom", "MidTom", "HiTom", "RimShot", "handClaP", "CowBell", "CYmbal", "OpenHihat", "ClsdHihat"]
];

const instrumentKnobsRows = [
    ["LEVEL", "LEVEL", "LEVEL", "LEVEL", "LEVEL", "LEVEL", "LEVEL", "LEVEL", "LEVEL", "LEVEL", "LEVEL", "LEVEL"],
    ["-", "TONE", "TONE", "TUNING", "TUNING", "TUNING", "-", "-", "-", "TONE", "-", "-"],
    ["-", "DECAY", "SNAPPY", "SWITCH", "SWITCH", "SWITCH", "SWITCH", "SWITCH", "-", "DECAY", "DECAY", "-"]
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
let colorPanelYellow;
let colorKnobRed;
let colorKnobWhite;
let colorKnobBlack;
let colorButtonYellow;


function setup() {

    createCanvas(widthInstrument, heightInstrument);

    setupInitialSettings();

    setupColors();

    drawMainPanel();

    drawLettersRed();

    drawLettersWhite();

    drawPanelLines();

    drawInstrumentKnobs();

    drawInstrumentSwitches();

    drawInstrumentLabels();

    drawSequencerPanel();

    drawSequencerSteps();

    drawKnobMasterVolume();

    drawKnobTempo();

    drawButtonStartStop();

}

function draw() {

}

function setupInitialSettings() {
    rectMode(CORNER);
    ellipseMode(CENTER);
    textAlign(CENTER);
    smooth();
}

function setupColors() {
    colorBackground = color(15, 15, 15);
    colorStepRed = color(220, 20, 0);
    colorStepOrange = color(240, 120, 0);
    colorStepYellow = color(220, 220, 0);
    colorStepWhite = color(230, 230, 120);
    colorTextRed = color(230, 50, 0);
    colorTextBlack = color(0, 0, 0);
    colorPanelGray = color(130, 130, 130);
    colorPanelYellow = color(220, 220, 150);
    colorKnobRed = color(230, 80, 0);
    colorKnobWhite = color(220, 220, 220);
    colorKnobBlack = color(30, 30, 30);
    colorButtonYellow = color(255, 255, 70);
}

function drawMainPanel() {
    push()
    fill(colorBackground);
    rect(0, 0, width, height);
    pop();
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

function drawInstrumentKnobs() {
    // level knobs
    push();
    // 0th row - red "level" knobs
    for (let i = 0; i < instrumentKnobsRows[0].length; i++) {
        if (instrumentKnobsRows[0][i] != "-" && instrumentKnobsRows[0][i] != "SWITCH") {
            fill(colorKnobRed);
            ellipse((30 + (i + 0.5) * 65 / 12) * width / 100,
                25 * height / 100,
                instrumentKnobsDiameter,
                instrumentKnobsDiameter);
            // white text
            fill(255, 255, 255);
            textSize(8);
            text(instrumentKnobsRows[0][i],
                (30 + (i + 0.5) * 65 / 12) * width / 100,
                23 * height / 100);
        }
    }

    // 1th row - white "tone" and "tuning" knobs
    for (let i = 0; i < instrumentKnobsRows[1].length; i++) {
        if (instrumentKnobsRows[1][i] != "-" && instrumentKnobsRows[1][i] != "SWITCH") {
            fill(colorKnobWhite);
            ellipse((30 + (i + 0.5) * 65 / 12) * width / 100,
                32 * height / 100,
                instrumentKnobsDiameter,
                instrumentKnobsDiameter);
            // white text
            fill(255, 255, 255);
            textSize(8);
            text(instrumentKnobsRows[1][i],
                (30 + (i + 0.5) * 65 / 12) * width / 100,
                30 * height / 100);
        }
    }

    // 2th row - white "decay" and "snappy" knobs
    for (let i = 0; i < instrumentKnobsRows[2].length; i++) {
        if (instrumentKnobsRows[2][i] != "-" && instrumentKnobsRows[2][i] != "SWITCH") {
            fill(colorKnobWhite);
            ellipse((30 + (i + 0.5) * 65 / 12) * width / 100,
                39 * height / 100,
                instrumentKnobsDiameter,
                instrumentKnobsDiameter);
            // white text
            fill(255, 255, 255);
            textSize(8);
            text(instrumentKnobsRows[2][i],
                (30 + (i + 0.5) * 65 / 12) * width / 100,
                37 * height / 100);
        }
    }
    pop();
}

function drawInstrumentSwitches() {
    push();
    rectMode(CENTER);
    fill(colorKnobBlack);
    noStroke();
    // 2th row - black switches for selection of instruments
    for (let i = 0; i < instrumentKnobsRows[2].length; i++) {
        if (instrumentKnobsRows[2][i] == "SWITCH") {
            rect((30 + (i + 0.5) * 65 / 12) * width / 100,
                44 * height / 100,
                instrumentSwitchWidth,
                instrumentSwitchHeight);
        }
    }
    pop();
}

function drawInstrumentLabels() {
    push();
    for (let row = 0; row < instrumentNamesRows.length; row++) {
        for (let i = 0; i < instrumentNamesRows[row].length; i++) {
            if (instrumentNamesRows[row][i] != "-") {
                fill(colorPanelYellow);
                strokeJoin(ROUND);
                noStroke();
                rectMode(CENTER);
                rect((30 + (i + 0.5) * 65 / 12) * width / 100,
                    (39 + (row * 10)) * height / 100,
                    instrumentLabelWidth,
                    instrumentLabelHeight,
                    instrumentLabelRadius);
                // stroke(colorTextBlack);
                textSize(10);
                textAlign(CENTER);
                noStroke();
                fill(colorTextBlack);
                text(instrumentNamesRows[row][i],
                    (30 + (i + 0.5) * 65 / 12) * width / 100,
                    (39.5 + (row * 10)) * height / 100);
            }
        }
    }
    pop();
}

function drawLettersRed() {
    push();
    fill(colorTextRed);
    // "Roland" - red letters
    textSize(37);
    noStroke();
    textAlign(LEFT);
    text("Roland",
        74 * width / 100,
        13 * height / 100);
    // "Rhythm Composer TR-808" - red letters
    textSize(20);
    textAlign(CENTER);
    text("Rhythm Composer   TR-808",
        70 * width / 100,
        55 * height / 100);
    // red line underneath
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
        10 * width / 100,
        27 * height / 100);
    // lower left panel under steps 1-12
    rect(15 * width / 100,
        91 * height / 100,
        57 * width / 100,
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
        62 * height / 100);
    text("MAX",
        94 * width / 100,
        62 * height / 100);
    text("MASTER VOLUME",
        92 * width / 100,
        64 * height / 100);
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

function drawButtonStartStop() {
    push();
    noStroke();
    rectMode(CENTER);
    fill(colorButtonYellow);
    rect(10 * width / 100,
        86 * height / 100,
        buttonStartStopWidth,
        buttonStartStopHeight);
    textAlign(CENTER);
    noStroke();
    fill(colorTextBlack);
    text("START",
        10 * width / 100,
        85 * height / 100);
    text("STOP",
        10 * width / 100,
        88 * height / 100);
    strokeWeight(1);
    stroke(colorTextBlack);
    line(8 * width / 100,
        86 * height / 100,
        12 * width / 100,
        86 * height / 100);
    pop();
}