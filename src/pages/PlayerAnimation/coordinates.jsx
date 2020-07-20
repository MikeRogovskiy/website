function Coordinates(
    cxInner, cyInner, rInner, strokeWidthInner, delay,
    cxOuter, cyOuter, rOuter, strokeWidthOuter,
    blackRight, blackTop,
    blackSize, blackSize2, blackDelay,
    rectX, rectY, rectH, rectW,
    textRectXA, textRectYA, textRectXB, textRectYB, textRectXC, textRectYC,

    ){
    /* Blue circles parameters */
    this.cxInner = cxInner;
    this.cyInner = cyInner;
    this.rInner = rInner;
    this.strokeWidthInner = strokeWidthInner;
    this.delay = delay;
    this.cxOuter = cxOuter;
    this.cyOuter = cyOuter;
    this.rOuter = rOuter;
    this.strokeWidthOuter = strokeWidthOuter;
    /* */

    /* Black inside circle parameters */
    this.blackRight = blackRight;
    this.blackTop = blackTop;
    this.blackSize = blackSize;
    this.blackSize2 = blackSize2;
    this.blackDelay = blackDelay;
    /* */

    /* White rectangle parameters */
    this.rectX = rectX;
    this.rectY = rectY;
    this.rectH = rectH;
    this.rectW = rectW;
    /* */

    /* Text for white rectangle paramenters*/
    this.textRectXA = textRectXA;
    this.textRectYA = textRectYA;
    this.textRectXB = textRectXB;
    this.textRectYB = textRectYB;
    this.textRectXC = textRectXC;
    this.textRectYC = textRectYC;
    /* */

};

export const coordinatesInitial = new Coordinates(
    "28%", "30%", "13%", "4%", "0",
    "28%", "30%", "18%", "12%",
    "72%", "30%", "14%", "2%", "0s",
    "43%", "50%", "13%", "18%",
    "51.4%", "57.5%", "39%", "60%", "39%", "63%",
);

export const coordinatesA = new Coordinates(
    "44%", "63%", "10%", "3%", "0",
    "44%", "63%", "13%", "8%",
    "56%", "63.5%", "12%", "2.5%", "0s",
    "45%", "34%", "11%", "17%",
    "53.5%", "40.5%", "53.5%", "37%", "53.5%", "43%",
);

export const coordinatesB = new Coordinates(
    "47%", "85%", "38%", "5%", "0",
    "47%", "85%", "43%",  "15%",
    "52%", "85%", "43%", "2.5%", "0s",
    "30%", "35%", "16%", "32%",
    "45%", "40%", "45.5%", "44%", "45%", "48%",
);

export const coordinatesC = new Coordinates(
    "95%", "64%", "30%", "2%", "0",
    "95%", "64%", "33%", "5%",
    "7%", "63%", "23%", "2.5%", "0s",
    "60%", "45%", "13%", "20%",
    "70%", "50.5%", "70%", "55.5%", "70%", "60%",
);

export const coordinatesD = new Coordinates(
    "90%", "64%", "12%", "2%", "0",
    "90%", "64%", "15%", "5%",
    "10%", "63%", "10%", "2.5%", "0s",
    "43%", "20%", "13%", "30%",
    "57%", "25.5%", "58%", "30.5%", "59%", "35%",
);

export const coordinatesE = new Coordinates(
    "65.5%", "78%", "4%", "1%", "0",
    "65.5%", "78%", "5%", "1%",
    "34.8%", "77.5%", "4%", "2.5%", "0s",
    "43%", "20%", "13%", "30%",
    "57.5%", "28%", "58%", "32.5%", "59%", "35%",
);

export const coordinatesF = new Coordinates(
    "69.5%", "78%", "4%", "1%", "0",
    "69.5%", "78%", "5%", "1%",
    "30.3%", "77.5%", "4%", "2.5%", "0s",
    "33%", "20%", "13%", "40%",
    "53%", "28%", "53%", "32.5%", "54%", "35%",
);

export const coordinatesG = new Coordinates(
    "44%", "77%", "13%", "7%", "0",
    "44%", "77%", "20%", "15%",
    "56%", "76%", "13%", "2.5%", "0s",
    "30%", "45%", "12%", "29%",
    "44.3%", "50.5%", "44.3%", "54.5%", "44.3%", "55%",
);

export const coordinatesH = new Coordinates(
    "56.8%", "70.5%", "4%", "2.5%", "0",
    "56.8%", "70.5%", "6%", "5%",
    "43%", "71%", "4%", "2.5%", "0s",
    "37%", "42%", "12%", "17.5%",
    "46%", "47%", "46%", "51%", "46%", "55%",
);

export const coordinatesI = new Coordinates(
    "54%", "70%", "17.5%", "2.5%", "0",
    "54%", "70%", "19.5%", "5%",
    "46%", "70.5%", "21%", "2.5%", "0s",
    "43%", "20%", "12%", "35%",
    "60.5%", "25%", "60.7%", "29%", "60.5%", "33%",
);

export const coordinatesFinal = new Coordinates(
    "54%", "70%", "0%", "2.5%", "0",
    "54%", "70%", "0%", "5%",
    "46%", "70.5%", "0%", "0%", "0s",
    "45%", "20%", "0%", "0%",
    "50%", "35%", "50%", "40%", "50%", "57%",
);

////////////////////////////////////////////////////

// export const coordinatesE = new Coordinates(
//     "44%", "77%", "13%", "7%", "0",
//     "44%", "77%", "20%", "15%",
//     "56%", "76%", "13%", "2.5%", "0s",
//     "30%", "45%", "12%", "29%",
//     "44.3%", "50.5%", "44.3%", "54.5%", "44.3%", "55%",
// );

// export const coordinatesF = new Coordinates(
//     "54.3%", "70.5%", "4%", "2.5%", "0",
//     "54.3%", "70.5%", "6%", "5%",
//     "46%", "71%", "4%", "2.5%", "0s",
//     "37%", "42%", "12%", "17.5%",
//     "46%", "47%", "46%", "51%", "39%", "55%",
// );

// export const coordinatesG = new Coordinates(
//     "54.3%", "70.5%", "15%", "2.5%", "0",
//     "54.3%", "70.5%", "16%", "5%",
//     "46%", "71%", "18%", "2.5%", "0s",
//     "50%", "22%", "12%", "32%",
//     "65%", "27%", "66%", "32%", "69%", "37%",
// );

// export const coordinatesH = new Coordinates(
//     "54%", "70%", "17.5%", "2.5%", "0",
//     "54%", "70%", "19.5%", "5%",
//     "46%", "70.5%", "21%", "2.5%", "0s",
//     "45%", "20%", "16%", "18%",
//     "53.5%", "25%", "53.7%", "29%", "53.5%", "33%",
// );